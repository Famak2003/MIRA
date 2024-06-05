# StudyBot - An Engaging Chatbot for Students


The primary objective of MIRA is to serve as an exceptional study companion for students, transforming the traditional study process into a more interactive and enjoyable experience. By integrating AI-driven responses, TTS capabilities, chat history, responsive design, and bilingual support, MIRA addresses the diverse needs of modern learners. It is designed to alleviate the challenges associated with conventional study methods, providing a supportive and engaging platform that fosters effective learning.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Firebase
- Real-time database interactions with Firebase Firestore
- Intelligent responses generated by OpenAI
- Engaging chatbot interface designed for students

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- Firebase account set up
- OpenAI account with API key
- Git installed on your machine

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/studybot.git
   cd studybot
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` file in the root directory:**

   ```bash
   touch .env
   ```

2. **Add your Firebase and OpenAI API keys to the `.env` file:**

   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

3. **Firebase Configuration:**

   - Go to the Firebase console.
   - Create a new project.
   - Add a web app to your Firebase project.
   - Copy the Firebase SDK snippet and add the values to your `.env` file as shown above.

4. **OpenAI Configuration:**

   - Go to the OpenAI platform.
   - Sign up or log in.
   - Generate an API key.
   - Add the API key to your `.env` file.

## Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Deployment

To deploy your React application, you can use services like Vercel, Netlify, or Firebase Hosting. Below is an example of how to deploy using Firebase Hosting.

1. **Install Firebase CLI:**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**

   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project:**

   ```bash
   firebase init
   ```

   - Select `Hosting` when prompted.
   - Choose the Firebase project you created earlier.
   - Set `build` as the public directory.
   - Configure as a single-page app by selecting `Yes`.

4. **Build your React project:**

   ```bash
   npm run build
   ```

5. **Deploy to Firebase Hosting:**

   ```bash
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
