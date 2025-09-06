# VOIS Website
VOIS AI – Smart Voice Assistant 🎙️💻
Automate Your World with Voice Commands

VOIS AI (Voice-Operated Intelligent System) is a Python-based voice-controlled assistant that transforms your speech into actions. It helps you control your PC, manage files, search the web, fetch information, and even send emergency alerts — all hands-free.

✨ Key Features
Voice Interaction
Speech recognition with speech_recognition & pyttsx3
Multilingual support (Hindi, Marathi, French)
System Control
Shutdown, restart, sleep PC
Adjust screen brightness & volume
Check CPU, RAM, and battery status
File & Folder Management
Create, rename, delete files/folders
Read PDF, Word, and TXT documents
Search files (e.g., list all PDFs)
Productivity Tools
Reminders & alarms
Open apps (Word, Excel, PowerPoint, Calculator)
Screenshots & camera control
Math calculations & clipboard operations
Web & Info Retrieval
Wikipedia & DuckDuckGo search
Weather reports (OpenWeatherMap API)
Latest news headlines (RSS feeds)
Communication
Send emails
Emergency SMS alerts with location (Twilio)
Make phone calls
Automation & Mouse Control
Move/click mouse with voice
Hotkeys for quick shortcuts

🛠 Tech Stack
Language: Python 3.x 

Libraries:
pyttsx3, speechrecognition, opencv-python, pyautogui,
requests, twilio, feedparser, psutil, PyPDF2, python-docx, etc.

APIs:
OpenWeatherMap (weather updates)
Twilio (SMS alerts)
Gmail SMTP (email sending)

📂 Project Structure
VOIS-AI/
│── vois.py                # Main assistant script
│── modules/               # Helper modules
│── assets/                # Icons, sounds, etc.
│── requirements.txt       # Python dependencies
│── README.md

⚡ Installation
Clone the repo:
git clone https://github.com/<your-username>/VOIS-AI.git
cd VOIS-AI

Install dependencies:
pip install -r requirements.txt

Add API keys (OpenWeatherMap, Twilio) in config.

Run the assistant:
python vois.py

🔑 Example Commands
Command	Action
"Shutdown"	Turns off the PC
"Create file"	Creates a new text file
"Read file"	Reads a PDF/Word/TXT file
"Wikipedia Python"	Fetches info from Wikipedia
"Weather Mumbai"	Shows Mumbai weather
"Set alarm 7:30"	Sets alarm at 7:30
"Send email"	Sends an email
"Emergency"	Sends SOS SMS with location

🚀 Future Scope
Integrate ChatGPT for natural conversations
Smarter voice recognition with NLP
IoT & smart home device integration
Cross-platform support (Linux, Mac, Mobile)
IoT & smart home device integration

Cross-platform support (Linux, Mac, Mobile)
