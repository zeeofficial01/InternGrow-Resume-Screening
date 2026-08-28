import os
from skill_extractor import extract_skills
from job_matcher import extract_job_skills, calculate_match
from candidate_ranker import rank_candidates

from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.utils import secure_filename

from resume_parser import extract_resume_text


app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {".pdf", ".docx"}

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def allowed_file(filename):
    extension = os.path.splitext(filename)[1].lower()
    return extension in ALLOWED_EXTENSIONS


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "InternGrow Resume Screening API is running 🚀"
    })


@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "Resume Screening API"
    })


@app.route("/api/resume/upload", methods=["POST"])
def upload_resume():

    if "resume" not in request.files:
        return jsonify({
            "error": "No resume file provided."
        }), 400

    file = request.files["resume"]

    if file.filename == "":
        return jsonify({
            "error": "No file selected."
        }), 400

    if not allowed_file(file.filename):
        return jsonify({
            "error": "Invalid file type. Please upload a PDF or DOCX file."
        }), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)

    file.save(file_path)

    try:
        extracted_text = extract_resume_text(file_path)

        skills = extract_skills(extracted_text)

        return jsonify({
    "message": "Resume uploaded successfully.",
    "filename": filename,
    "text": extracted_text,
    "text_length": len(extracted_text),
    "skills": skills,
    "skill_count": len(skills)
})
    except Exception as error:
        return jsonify({
            "error": f"Could not process resume: {str(error)}"
        }), 500

@app.route("/api/resume/analyze", methods=["POST"])
def analyze_resume():

    if "resume" not in request.files:
        return jsonify({
            "error": "No resume file provided."
        }), 400

    file = request.files["resume"]

    if file.filename == "":
        return jsonify({
            "error": "No file selected."
        }), 400

    if not allowed_file(file.filename):
        return jsonify({
            "error": "Invalid file type. Please upload a PDF or DOCX file."
        }), 400

    job_description = request.form.get("job_description", "").strip()

    if not job_description:
        return jsonify({
            "error": "Job description is required."
        }), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(
        app.config["UPLOAD_FOLDER"],
        filename
    )

    file.save(file_path)

    try:
        extracted_text = extract_resume_text(file_path)

        resume_skills = extract_skills(extracted_text)
        job_skills = extract_job_skills(job_description)

        match_result = calculate_match(
            resume_skills,
            job_skills
        )

        return jsonify({
            "message": "Resume analyzed successfully.",
            "filename": filename,
            "resume_skills": resume_skills,
            "job_skills": job_skills,
            "matched_skills": match_result["matched_skills"],
            "missing_skills": match_result["missing_skills"],
            "resume_score": match_result["score"]
        })

    except Exception as error:
        return jsonify({
            "error": f"Could not analyze resume: {str(error)}"
        }), 500

@app.route("/api/candidates/rank", methods=["POST"])
def rank_candidate_list():

    data = request.get_json()

    if not data or "candidates" not in data:
        return jsonify({
            "error": "Candidates list is required."
        }), 400

    candidates = data["candidates"]

    if not isinstance(candidates, list) or not candidates:
        return jsonify({
            "error": "Candidates must be a non-empty list."
        }), 400

    ranked_candidates = rank_candidates(candidates)

    return jsonify({
        "message": "Candidates ranked successfully.",
        "candidates": ranked_candidates
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)