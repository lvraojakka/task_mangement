# 📝 Task Management API

A clean, modular, and secure Task Management RESTful API built with:

- Node.js (ES6)
- Express
- Sequelize ORM
- PostgreSQL
- JWT Authentication
- Joi for validation

---

## 🚀 Features

### ✅ Authentication
- `POST /api/auth/signup` – Register a new user
- `POST /api/auth/login` – Login and receive a JWT

### 👤 User
- `GET /api/users/me` – Get logged-in user profile (JWT protected)

### 📌 Tasks (JWT Protected)
- `POST /api/tasks` – Create a new task
- `GET /api/tasks` – List all tasks (supports status & dueDate filters)
- `GET /api/tasks/:id` – Get task by ID
- `PUT /api/tasks/:id` – Update task
- `PATCH /api/tasks/:id/complete` – Mark task as complete
- `DELETE /api/tasks/:id` – Delete task

---

## 🧾 Technologies

| Tech            | Description                     |
|-----------------|---------------------------------|
| Node.js         | Backend runtime (ES6 syntax)    |
| Express         | Web framework                   |
| Sequelize       | PostgreSQL ORM                  |
| PostgreSQL      | Relational database             |
| JWT             | Auth via JSON Web Tokens        |
| Joi             | Input validation                |

---