# 🧩 EZ Labs Frontend Assignment – Contact Form (React + Tailwind)

## 🔗 Live Demo  
🚀 **Hosted on Netlify:** [https://vflims.netlify.app/](https://vflims.netlify.app/)

---

## 📖 Overview  
This is a **single-page responsive React web application** built as part of the **EZ Labs Frontend Developer Assignment**.  
The goal of the project is to recreate the provided **Figma home page design** and integrate a **Contact Form** with a live API endpoint.

It demonstrates:
- Responsive UI development  
- Frontend validation for form fields  
- API integration using `fetch()`  
- Clean, modular React structure  
- Real-time feedback on form submission  

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | **React.js (Vite)** |
| Styling | **Tailwind CSS** |
| Deployment | **Netlify** |
| API Testing | **Postman** |

---

## 🎨 Design Reference
The layout and styling are based on the official Figma design provided in the assignment:  
[🎨 Figma – EZ Labs Assignment](https://www.figma.com/design/1EUuNvrVUVWuYkTG0OmpMj/EZ-Labs-Assignment?node-id=0-1&t=WoUIFHGYARdd1lg0-1)

---

## 🧩 Features
✅ Responsive Home Page (desktop + mobile)  
✅ Contact Form with Field Validation  
✅ API Integration with POST request  
✅ “Form Submitted” message on success  
✅ Clean Tailwind styling  
✅ Deployed public version on Netlify  

---

## 📡 API Information

- POST https://vernanbackend.ezlab.in/api/contact-us/


### 📤 Request Example:

json
      {

      "name": "Test user",
  
      "email": "testuser@gmail.com",
  
      "phone": "908765498",
  
      "message": "This is a message"
  
      }


### 📥 Expected Response (200 OK):

    {

      "id": 49,
  
      "name": "Test user",
  
      "email": "testuser@gmail.com",
  
      "phone": "908765498",
  
      "message": "This is a message",
  
      "created_at": "2025-10-10T05:27:59.371578Z",
  
      "updated_at": "2025-10-10T05:27:59.371598Z"
  
    }

## ⚙️ Validation Rules

- All fields are required.

- Email must be valid.

- On success, “✅ Form Submitted” appears on screen.

- Invalid inputs trigger clear error messages.





