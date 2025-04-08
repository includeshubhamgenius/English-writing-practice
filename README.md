# ✍️ English Writing Practice App

A minimalist web app to help you practice English writing by observing high-quality images and expressing your thoughts. Built using **React** and **Tailwind CSS**, this app gives you a random landscape image and a clean interface to write at least 50 words in English.

---

## 🖼️ Features

- 🔀 Loads a random high-quality **landscape image** from Unsplash API
- 📝 **Write your thoughts** (minimum 50 words required)
- ✅ Text turns **green** once 50-word mark is reached
- 🔁 Load a new image anytime for a fresh writing prompt
- 🎯 Minimalist and distraction-free design using Tailwind CSS

---

## 📸 Screenshot

![App Screenshot](screenshot.png) <!-- Add a real screenshot image in your repo with this name -->

---

## 🚀 Tech Stack

- **React**
- **Tailwind CSS**
- **Unsplash API**

---

## 📦 Installation

1. **Clone this repository**
   ```
   git clone https://github.com/includeshubhamgenius/English-writing-practice
   cd writing-practice
   ```
3. **Install dependencies**
   ```
   npm install
   ```
5. **Add your Unsplash API key**
   In App.jsx, replace:
   ```
   const response = await fetch('https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_API_KEY');
   ```
   With your own API.
   
7. **Run the app locally**
   ```
   npm start
   ```


**Folder Structure**

src/
│
├── components/
│   ├── Greeting.jsx
│   ├── ImageDisplay.jsx
│   ├── TextArea.jsx
│   └── ReloadButton.jsx
│
├── App.jsx
└── index.css

