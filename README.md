# AI Resume Screening System

An AI-powered resume screening and job-matching web application built with **Python, Flask, React, and Vite**.

The system analyzes candidate resumes, extracts technical skills, compares them with job requirements, calculates a resume match score, and presents the results through a web dashboard.

## 📌 Project Overview

Recruiters often need to review many resumes for a single position. This project provides an automated screening system that helps identify relevant candidates by comparing skills found in a resume with skills required by a job description.

### Main capabilities

* Resume upload
* PDF and DOCX text extraction
* Technical skill extraction
* Job description skill extraction
* Resume-to-job skill matching
* Resume match scoring
* Candidate ranking
* AI screening summary
* JSON result export
* Input validation and error handling
* React-based web dashboard

---

## ✨ Features

### Resume Upload

Candidates can upload resumes in:

* PDF
* DOCX

### Resume Parsing

The Flask backend extracts readable text from uploaded resume documents.

### Skill Extraction

The system identifies recognized technical skills from resume content.

Example skills:

```text
Python
Flask
Django
JavaScript
HTML
CSS
Node.js
MongoDB
MySQL
SQLite
Git
GitHub
Artificial Intelligence
```

### Job Description Analysis

Recruiters can paste a job description into the dashboard. The application identifies recognized skills from the requirements.

### Resume Match Score

The application compares the candidate's skills with the required job skills and calculates a percentage match.

```text
Candidate Resume
       ↓
Skill Extraction
       ↓
Job Description
       ↓
Job Skill Extraction
       ↓
Skill Matching
       ↓
Resume Match Score
```

### Matched and Missing Skills

The dashboard displays:

* Matched Skills
* Missing Skills
* Candidate Skills
* Job Skills

This provides a clear explanation of the screening result.

### Candidate Ranking

The backend includes candidate ranking functionality that can sort candidates according to their resume match scores.

### Screening Summary

The dashboard provides a simple screening summary based on the candidate's match score:

* Strong Match
* Good Match
* Moderate Match
* Low Match

### Export Results

Screening results can be exported as a JSON file for record keeping.

### Validation

The application handles common input errors such as:

* No resume selected
* Empty job description
* Invalid resume input
* API errors

---

# 🛠️ Technology Stack

## Backend

* Python
* Flask
* Flask-CORS
* PyPDF2
* python-docx
* Pandas
* NumPy
* Scikit-learn
* Joblib

## Frontend

* React
* Vite
* JavaScript
* CSS
* Axios

## Development Tools

* Git
* GitHub
* Visual Studio Code

---

# 📂 Project Structure

```text
InternGrow-Resume-Screening/
│
├── backend/
│   ├── app.py
│   ├── candidate_ranker.py
│   ├── job_matcher.py
│   ├── resume_parser.py
│   └── skill_extractor.py
│
├── data/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── models/
│
├── uploads/
│
├── .gitignore
├── README.md
└── requirements.txt
```

> The `venv` directory is used only for local development and is excluded from Git.

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/zeeofficial01/InternGrow-Resume-Screening.git
cd InternGrow-Resume-Screening
```

## 2. Create a Python virtual environment

```bash
python -m venv venv
```

### Windows PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

## 3. Install backend dependencies

```bash
pip install -r requirements.txt
```

## 4. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

---

# 🚀 Running the Application

The application requires two development servers:

1. Flask backend
2. React frontend

## Start the Flask Backend

From the project root:

```bash
python backend/app.py
```

The backend should run on:

```text
http://127.0.0.1:5000
```

## Start the React Frontend

Open a second terminal:

```powershell
cd E:\InternGrow_Resume_Screening\frontend
```

Then run:

```powershell
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173/
```

---

# 🖥️ How to Use

### 1. Open the application

Visit:

```text
http://localhost:5173/
```

### 2. Upload a resume

Select a candidate's PDF or DOCX resume.

### 3. Enter a job description

Paste the requirements for the position.

Example:

```text
We are looking for a Python Backend Developer.

Requirements:
Python
Flask
FastAPI
SQL
Git
REST API
MongoDB
Docker
```

### 4. Analyze the resume

Click:

**Analyze Resume**

### 5. Review the results

The dashboard displays:

* Resume Match Score
* Matched Skills
* Missing Skills
* Candidate Skills
* Job Skills
* AI Screening Summary

### 6. Export the result

Click:

**Export Results**

The application generates a JSON file containing the screening result.

---

# 🔌 API Endpoints

## Resume Analysis

```http
POST /api/resume/analyze
```

The endpoint accepts:

* Resume file
* Job description

The response contains screening information including:

* Resume skills
* Job skills
* Matched skills
* Missing skills
* Resume score

## Candidate Ranking

```http
POST /api/candidates/rank
```

The endpoint accepts candidate information and ranks candidates according to their resume scores.

---

# 📊 Scoring Method

The current implementation uses skill matching as the primary scoring method.

Conceptually:

```text
Match Score =
Matched Job Skills / Total Job Skills × 100
```

Example:

```text
Required Skills = 10
Matched Skills = 7

Match Score = 7 / 10 × 100

Match Score = 70%
```

This provides a simple and transparent baseline for resume screening.

---

# 🧪 Testing

The application was tested with different scenarios.

## Strong Match

A job description containing skills available in the test resume produced:

```text
Match Score: 100%
```

## Weak Match

A job description containing unrelated technical requirements produced:

```text
Match Score: 0%
```

## Empty Job Description

The application correctly displayed:

```text
Please enter a job description.
```

## No Resume

The application correctly displayed:

```text
Please select a PDF or DOCX resume.
```

These tests verify the main screening workflow and basic input validation.

---

# 🔮 Future Improvements

Possible future improvements include:

* Semantic resume matching using NLP embeddings
* Machine-learning-based candidate classification
* Experience and education scoring
* Improved synonym handling
* Recruiter authentication
* Candidate history and database storage
* PDF screening reports
* Advanced analytics dashboard
* Cloud deployment
* Job recommendation system
* Improved candidate ranking
* AI-generated recruitment recommendations

---

# 🎯 Project Objective

The objective of this project is to build a practical recruitment-support system that combines document processing, skill extraction, job matching, scoring, candidate ranking, and a web interface.

The overall workflow is:

```text
Document Processing
        ↓
Skill Extraction
        ↓
Job Matching
        ↓
Scoring
        ↓
Candidate Ranking
        ↓
Web Dashboard
```

---

# 👨‍💻 Author

**Muhammad Zaryab Khan**

BS Artificial Intelligence
Abdul Wali Khan University Mardan

GitHub: **Zeeofficial01**

---

# 📚 Internship

This project was developed as part of the **InternGrow Internship Task**.

The project demonstrates practical implementation of a resume screening and job-matching system using Python, Flask, React, and related technologies.

---

# 📜 License

This project is intended for educational and internship purposes.
