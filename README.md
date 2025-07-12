💼 Skill Swap Platform

## 🚨 Problem Statement

In a world full of diverse talents, people often want to learn new skills but can't afford formal training or don't know where to start. At the same time, many individuals *have* skills they're willing to teach — but lack a platform to connect with learners in a fair, rewarding, and trusted environment.

The **Skill Swap Platform** solves this by enabling users to **exchange skills** with one another — no money involved. Just passion, knowledge, and community. 🙌

It empowers users to:
- Share what they know
- Learn what they love
- And grow through collaboration 💡

---

## 🚀 Overview

**Skill Swap** is a MERN stack-based web platform that allows users to **list skills they offer**, **request skills they want**, and **connect with others** to exchange knowledge. It features a dynamic user interface, rating system, real-time swap requests, and an admin dashboard for moderation.

---

## 🔧 Features

### 👤 User Side:
- Profile: Name, location, profile photo, availability
- Skills Offered & Wanted (with tag-based entry)
- Public/Private profile toggle
- Browse/Search users by skill & availability
- Send, accept, reject, or delete swap requests
- Rate and leave feedback after completed swaps

### 🛡️ Admin Side:
- Approve/reject spammy or inappropriate skills
- Ban/unban users violating policies
- Monitor all swap statuses (pending/accepted/cancelled)
- Send platform-wide announcements
- Export CSV reports: user activity, feedback, swap stats

---

## 📁 Folder Structure

skill-swap-app/ ├── client/                # React Frontend │   ├── public/ │   └── src/ │       ├── components/ │       ├── pages/ │       ├── context/ │       ├── utils/ │       ├── App.jsx │       └── main.jsx ├── server/                # Express Backend │   ├── controllers/ │   ├── models/ │   ├── routes/ │   ├── middleware/ │   ├── config/ │   └── server.js ├── .env ├── package.json └── README.md

---

## 🛠️ Tech Stack

| Frontend       | Backend     | Database     | Tools              |
|----------------|-------------|--------------|---------------------|
| React.js (Vite) | Node.js     | MongoDB Atlas | Tailwind CSS       |
| React Router   | Express.js  | Mongoose      | Axios, Toastify     |
| Context API    | JWT Auth    |               | Cloudinary (images) |
|                 |             |               | Socket.io (chat - optional) |

---

## 🌐 Live Demo (optional)

🔗 https://skillswap-hackathon-project.vercel.app
---

## 🧪 How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/aanchal911/skillswap.git
cd skill-swap-app

2. Setup Backend

cd server
npm install
create a `.env` file and add your MongoDB URI + JWT_SECRET
npm start

3. Setup Frontend

cd ../client
npm install
npm run dev


---

🧠 Future Scope

Real-time chat using Socket.io

AI-based skill recommendations (e.g., “If you know X, learn Y”)

Email notifications (swap status, feedback reminders)

Dark mode toggle 🌒

Gamification: XP system, skill badges
