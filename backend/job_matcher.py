import re

from skill_extractor import SKILL_DATABASE, extract_skills


def extract_job_skills(job_description):
    """Extract known skills from a job description."""
    return extract_skills(job_description)


def calculate_match(resume_skills, job_skills):
    """Calculate resume-to-job skill match percentage."""

    if not job_skills:
        return {
            "score": 0,
            "matched_skills": [],
            "missing_skills": []
        }

    resume_skill_set = set(resume_skills)
    job_skill_set = set(job_skills)

    matched_skills = sorted(resume_skill_set.intersection(job_skill_set))
    missing_skills = sorted(job_skill_set - resume_skill_set)

    score = round(
        (len(matched_skills) / len(job_skill_set)) * 100,
        2
    )

    return {
        "score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }