import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const exportResults = () => {
  if (!result) return;

  const data = JSON.stringify(result, null, 2);

  const blob = new Blob([data], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "resume_screening_result.json";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

  const analyzeResume = async () => {
    if (!resume) {
      setError("Please select a PDF or DOCX resume.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please enter a job description.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();

    formData.append("resume", resume);
    formData.append("job_description", jobDescription);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/resume/analyze",
        formData
      );

      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Unable to analyze the resume. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">InternGrow AI</div>

          <h1>Intelligent Resume Screening</h1>

          <p>
            Analyze resumes, identify skills, and match candidates
            with job requirements.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="analyzer">
          <div className="card">
            <h2>Candidate Resume</h2>

            <p className="card-description">
              Upload a candidate resume in PDF or DOCX format.
            </p>

            <label>Resume File</label>

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(event) => {
                setResume(event.target.files[0]);
                setError("");
              }}
            />

            {resume && (
              <p className="file-name">
                ✓ {resume.name}
              </p>
            )}
          </div>

          <div className="card">
            <h2>Job Description</h2>

            <p className="card-description">
              Paste the requirements for the position you are hiring for.
            </p>

            <textarea
              placeholder="Example: We are looking for a Python Backend Developer..."
              value={jobDescription}
              onChange={(event) =>
                setJobDescription(event.target.value)
              }
            />

            <button onClick={analyzeResume} disabled={loading}>
              {loading ? "Analyzing Resume..." : "Analyze Resume"}
            </button>

            {error && <div className="error">{error}</div>}
          </div>
        </section>

        {result && (
          <section className="results">
            <div className="card analysis-card">
  <h2>AI Screening Summary</h2>

  <p>
    {result.resume_score >= 80
      ? "Strong Match: This candidate matches most of the required skills for the position."
      : result.resume_score >= 60
      ? "Good Match: This candidate has several relevant skills, but some requirements are missing."
      : result.resume_score >= 40
      ? "Moderate Match: The candidate has some relevant skills, but several job requirements are missing."
      : "Low Match: The candidate currently matches only a small portion of the required skills."}
  </p>

  <div className="summary-stats">
    <div>
      <strong>{result.matched_skills.length}</strong>
      <span>Matched Skills</span>
    </div>

    <div>
      <strong>{result.missing_skills.length}</strong>
      <span>Missing Skills</span>
    </div>

    <div>
      <strong>{result.resume_skills.length}</strong>
      <span>Total Resume Skills</span>
    </div>
  </div>
</div>
            <div className="score-card">
              <p className="score-label">Resume Match Score</p>

              <div className="score">
                {result.resume_score}%
              </div>

              <div className="score-bar">
  <div
    className="score-fill"
    style={{ width: `${result.resume_score}%` }}
  ></div>
</div>

              <p className="score-text">
                Based on skills detected in the resume and job description.
              </p>
              <button onClick={exportResults}>
  Export Results
</button>
            </div>

            <div className="results-grid">
              <div className="card">
                <h2>✓ Matched Skills</h2>

                <div className="skills">
                  {result.matched_skills.length > 0 ? (
                    result.matched_skills.map((skill) => (
                      <span
                        className="skill matched"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p>No matching skills found.</p>
                  )}
                </div>
              </div>

              <div className="card">
                <h2>✕ Missing Skills</h2>

                <div className="skills">
                  {result.missing_skills.length > 0 ? (
                    result.missing_skills.map((skill) => (
                      <span
                        className="skill missing"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p>No missing skills.</p>
                  )}
                </div>
              </div>

              <div className="card">
                <h2>Candidate Skills</h2>

                <div className="skills">
                  {result.resume_skills.map((skill) => (
                    <span className="skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card">
                <h2>Job Skills</h2>

                <div className="skills">
                  {result.job_skills.map((skill) => (
                    <span className="skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;