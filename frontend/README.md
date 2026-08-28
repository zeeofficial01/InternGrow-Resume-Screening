# AI Resume Screening System

An AI-powered resume screening and job-matching web application built with **Python, Flask, React, and Vite**. The system analyzes candidate resumes, extracts technical skills, compares them with job requirements, calculates a match score, and presents the results through a clean web dashboard.

## 📌 Project Overview

Recruiters often need to review many resumes for a single position. This project provides a simple automated screening system that helps identify relevant candidates by comparing skills found in a resume with skills required by a job description.

The application supports:

* Resume upload
* PDF and DOCX text extraction
* Technical skill identification
* Job description skill extraction
* Resume-to-job skill matching
* Resume match scoring
* Candidate ranking
* Screening summary
* JSON result export
* Input validation and error handling
* React-based web dashboard

---

## ✨ Key Features

### 1. Resume Upload

Candidates can upload their resume in:

* PDF
* DOCX

The backend processes the uploaded file and extracts its text.

### 2. Resume Text Extraction

The system extracts readable text from uploaded resumes using Python document-processing libraries.

### 3. Skill Extraction

The application identifies technical skills from resume content.

Example detected skills:

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

### 4. Job Description Analysis

The recruiter can paste a job description into the dashboard.

The system identifies recognized skills from the job requirements.

### 5. Resume Match Score

The system compares:

```text
Candidate Skills
        +
Job Requirements
        ↓
Skill Matching
        ↓
Resume Match Score
```

The score is calculated based on the percentage of required job skills found in the candidate's resume.

### 6. Matched & Missing Skills

The dashboard clearly displays:

* ✅ Matched Skills
* ❌ Missing Skills
* Candidate Skills
* Job Skills

This makes it easier to understand why a candidate received a particular score.

### 7. Candidate Ranking

The backend provides a candidate-ranking API that sorts candidates from the highest resume score to the lowest score.

Example:

```text
Rank 1 → Candidate A → 85%
Rank 2 → Candidate B → 72%
Rank 3 → Candidate C → 54%
```

### 8. AI Screening Summary

The dashboard generates a screening summary based on the match score.

The application categorizes candidates as:

* Strong Match
* Good Match
* Moderate Match
* Low Match

### 9. Export Results

Screening results can be exported as a JSON file for later use or record keeping.

### 10. Validation & Error Handling

The application handles common input problems, including:

* No resume selected
* Empty job description
* Invalid resume file type
* Missing candidate data
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
InternGrow_Resume_Screening/
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
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── models/
│
├── uploads/
│
├── .gitignore
├── Readme.md
└── requirements.txt
```

> The `venv` directory is used only for local development and is excluded from Git.

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Move into the project directory:

```bash
cd InternGrow_Resume_Screening
```

---

## 2. Create a Python virtual environment

```bash
python -m venv venv
```

### Windows PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

---

## 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

---

# 🚀 Running the Application

The project uses two servers:

* Flask backend
* React frontend

## Start the Flask Backend

From the project root:

```bash
python backend/app.py
```

The backend runs on:

```text
http://127.0.0.1:5000
```

---

## Start the React Frontend

Open a second terminal and move into the frontend:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173/
```

---

# 🖥️ How to Use

### Step 1

Open:

```text
http://localhost:5173/
```

### Step 2

Upload a candidate resume.

Supported formats:

```text
PDF
DOCX
```

### Step 3

Paste the job description.

For example:

```text
We are looking for a Python Backend Developer
with experience in Python, Flask, FastAPI,
SQL, Git and REST APIs.
```

### Step 4

Click:

```text
Analyze Resume
```

### Step 5

Review:

* Match Score
* Matched Skills
* Missing Skills
* Candidate Skills
* Job Skills
* AI Screening Summary

### Step 6

Use:

```text
Export Results
```

to save the screening result as JSON.

---

# 🔌 API Endpoints

## Analyze Resume

```http
POST /api/resume/analyze
```

Accepts:

* Resume file
* Job description

Returns:

* Resume skills
* Job skills
* Matched skills
* Missing skills
* Resume score

---

## Rank Candidates

```http
POST /api/candidates/rank
```

Accepts a list of candidates containing their resume scores and returns them ranked from highest to lowest score.

---

# 📊 Scoring Method

The current scoring system is based on required job skills detected in the job description.

Conceptually:

```text
Match Score =
Matched Job Skills / Total Job Skills × 100
```

For example:

```text
Required Skills: 10
Matched Skills: 7

Score = 7 / 10 × 100

Score = 70%
```

This makes the score easy to interpret and provides a transparent baseline for resume screening.

---

# 🧪 Testing

The application was tested using multiple scenarios.

### Strong Match Test

A job description containing skills available in the test resume produced:

```text
Match Score: 100%
```

### Weak Match Test

A job description containing unrelated requirements produced:

```text
Match Score: 0%
```

### Empty Job Description

The application correctly returned:

```text
Please enter a job description.
```

### No Resume

The application correctly returned:

```text
Please select a PDF or DOCX resume.
```

These tests verify the main screening flow and basic input validation.

---

# 🔮 Future Improvements

Possible future improvements include:

* Machine-learning-based resume classification
* Semantic similarity using NLP embeddings
* Experience and education scoring
* Improved candidate ranking
* Recruiter authentication
* Database integration
* Resume history
* PDF report generation
* Advanced analytics dashboard
* Cloud deployment
* Automated job recommendations
* Better handling of synonyms and related skills

---

# 🎯 Project Objective

The goal of this project is to demonstrate how a practical recruitment-support application can combine:

```text
Document Processing
        +
Skill Extraction
        +
Job Matching
        +
Scoring
        +
Candidate Ranking
        +
Web Interface
```

into a single usable system.

---

# 👨‍💻 Author

**Muhammad Zaryab Khan**

BS Artificial Intelligence

Abdul Wali Khan University Mardan

GitHub: **Zeeofficial01**

---

# 📜 Internship

This project was developed as part of the **InternGrow Internship Task**.

The project focuses on building a practical resume screening and job matching application using modern backend and frontend technologies.

---

# 📄 License

This project is intended for educational and internship purposes.
