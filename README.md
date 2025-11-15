# MediAlert – Medication Reminder Web App
MediAlert is a full-stack web application that helps users stay on track with their medications by creating, updating, and managing medication reminders in a simple and friendly interface.
This project was developed as a course assignment using a modern JavaScript stack (React, Node.js, Express, MongoDB).

---

## 📌 Table of Contents

- Features
- Tech Stack
- Project Structure
- Getting Started
  - Prerequisites
  - Installation
  - Environment Variables
  - Running the App
- Main Screens
- API Overview
  
---

## ✅ Features

**Authentication & Users**

- User registration (Sign Up) with validation
- Secure login (Log In) using email and password
- Password rules (minimum length and required character types)
- User profile page:
  - Name
  - Email
  - Birth date
  - Phone
  - Gender
  - Address
- Ability to update profile information

**Medication Reminders**

- Create medication reminders with:
  - Medication name
  - Dosage
  - Schedule (e.g., “8:00 PM daily”)
  - Start date and end date
  - Optional notes (e.g., “Take after eating food”)
- List all reminders for the logged-in user
- Edit existing reminders
- Delete reminders
- Reminders are stored securely in MongoDB and linked to the user

**Public Pages & Content**

- Landing page explaining the benefits of taking medication on time
- Testimonials section (“What our users are saying”)
- FAQ (Frequently Asked Questions)
- Quick health tips for better medication adherence
- Support & Help page with contact information
- Privacy Policy page
- Terms of Use page
- Responsive navigation menu with links to Home, About, Reminders, Profile, Log In, and Sign Up

---

## 🧩 Tech Stack

**Front-end**

- React (with Vite)
- React Router
- Context / hooks for state management
- HTML5 & CSS3 (responsive layout, dark theme UI)

**Back-end**

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing

**Tools & Services**

- GitHub – version control and repository hosting
- MongoDB Atlas – cloud database
- ClickUp – agile project management (backlog, tasks, and sprint board)

---
