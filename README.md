🛡️ WebSafe — Cyber Threat Scanner

WebSafe is a full-stack cybersecurity web application that analyzes URLs and messages for potentially suspicious patterns. It combines a responsive frontend with a backend API for processing security analysis and storing scan information.

🌐 Live Demo

🚀 Try WebSafe online:

https://maheshbommini-stack.github.io/WebSafe/

✨ Features

🔍 URL and message analysis

🛡️ Security risk score

🔐 HTTPS detection

⚠️ Suspicious keyword detection

🌐 IP address detection

🚨 Suspicious domain detection

📊 URL length analysis

📜 Recent scan history

💾 Database-backed scan history

🔄 REST API integration

📱 Responsive design

🔒 Backend security processing

⚡ Real-time analysis

🛠️ Technologies Used
Frontend

HTML5

CSS3

JavaScript

LocalStorage

Responsive Web Design

Backend

Node.js

Express.js

REST API

CORS

Database

MongoDB

Deployment

GitHub Pages — Frontend

Backend API — Node.js hosting platform

📂 Project Structure
WebSafe/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   │   └── scanRoutes.js
│   ├── controllers/
│   │   └── scanController.js
│   └── models/
│       └── Scan.js
│
└── README.md

⚙️ How It Works
User
  │
  ▼
WebSafe Frontend
  │
  │ HTTP Request
  ▼
Node.js + Express Backend
  │
  ├── URL Analysis
  ├── Threat Detection
  └── Risk Calculation
  │
  ▼
MongoDB
  │
  ▼
Analysis Result
  │
  ▼
Frontend Dashboard

🚀 How to Run
1. Clone the Repository
git clone https://github.com/maheshbommini-stack/WebSafe.git

2. Start the Frontend

Open the frontend:

frontend/index.html


You can also deploy the frontend using GitHub Pages.

3. Start the Backend

Navigate to the backend directory:

cd backend


Install dependencies:

npm install


Start the server:

npm start


The backend API will run locally on:

http://localhost:5000

🔌 API Example
Analyze URL
POST /api/scan
Content-Type: application/json


Request:

{
  "target": "https://example.com/login"
}


Example response:

{
  "score": 25,
  "risk": "LOW",
  "https": true,
  "suspiciousKeywords": false,
  "ipDetected": false,
  "suspiciousDomain": false
}

🌍 Live Website

🚀 WebSafe:

https://maheshbommini-stack.github.io/WebSafe/

Note: GitHub Pages supports the static frontend only. The Node.js/Express backend must be deployed separately on a backend hosting service and connected to the frontend through its API URL.

🔮 Future Improvements

🤖 AI-powered threat analysis

🌐 Real-time domain reputation checking

🔐 SSL certificate analysis

🗄️ User accounts and authentication

📊 Advanced security analytics

🚨 Real-time threat intelligence APIs

📧 Security alert notifications

📱 Progressive Web App support

⚠️ Disclaimer

WebSafe is an educational cybersecurity project. Its analysis is intended for demonstration and learning purposes and should not be considered a replacement for professional cybersecurity products, threat-intelligence platforms, or security services.

👨‍💻 Author

Mahesh Bommini

Built as a Web Technology project.
