# 📚 Book Review API

A simple and secure REST API for users to create, read, and review books. Built with **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.

---

## 🔧 Features

- User signup & login with JWT authentication
- Add new books (authenticated users)
- View books with optional filters (author, genre)
- Add/update/delete reviews (one per user per book)
- Search books by title or author
- Pagination support for book listing
- MongoDB Atlas integration
- Modular folder structure for scalability

---

## 🗂️ Folder Structure

book-review-api/
├── config/ # DB connection config
├── controllers/ # Business logic (auth, books, reviews, search)
├── middlewares/ # Middleware (auth protection)
├── models/ # Mongoose schemas (User, Book, Review)
├── routes/ # Route declarations
├── .env # Env vars (MONGO_URI, JWT_SECRET)
├── .gitignore
├── server.js # Entry point
└── README.md




---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas via Mongoose
- **Authentication:** JWT & bcryptjs
- **Environment Config:** dotenv
- **API Testing:** Postman / curl

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/book-review-api.git
cd book-review-api




2. Install Dependencies
npm install


3. Configure Environment Variables
Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret



4. Start the Server

npm start
API runs at http://localhost:5000

🔐 Auth Routes

✅ Signup
POST /api/signup
Content-Type: application/json
{
  "username": "john",
  "password": "password123"
}


🔓 Login
POST /api/login
Content-Type: application/json
{
  "username": "john",
  "password": "password123"
}
Returns a JWT token.


📚 Book Routes
➕ Add Book (Auth required)

POST /api/books
Authorization: Bearer <token>
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian"
}


📖 Get All Books
GET /api/books?page=1&limit=10


🔍 Get Book by ID
GET /api/books/:id


✍️ Review Routes
➕ Add Review (Auth required)

POST /api/books/:id/reviews
Authorization: Bearer <token>
{
  "rating": 4,
  "comment": "Amazing book!"
}


✏️ Update Review
PUT /api/reviews/:id
Authorization: Bearer <token>
{
  "rating": 5,
  "comment": "Even better on the second read."
}


❌ Delete Review
DELETE /api/reviews/:id
Authorization: Bearer <token>


🔍 Search Route
GET /api/search?q=harry


🧠 Design Decisions
JWT is used for stateless auth

Reviews are restricted to 1 per user per book

MongoDB Atlas is used for cloud database access

Code is modular and scalable with MVC pattern



🗃️ Database Schema

👤 User
{
  username: String,
  password: String (hashed)
}


📕 Book
{
  title: String,
  author: String,
  genre: String,
  createdBy: ObjectId (User)
}


✍️ Review
{
  bookId: ObjectId (Book),
  userId: ObjectId (User),
  rating: Number,
  comment: String
}


🧪 Example curl Requests
# Signup
curl -X POST http://localhost:5000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"john","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"john","password":"password123"}'

# Create Book (replace <TOKEN> with actual token)
curl -X POST http://localhost:5000/api/books \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"title":"1984","author":"George Orwell","genre":"Dystopian"}'


👤 Author
Satyam Kumar
GitHub • LinkedIn

