# Real-Time Chat Application

A real-time one-to-one chat application built with **Node.js, Express.js, MongoDB, Socket.IO, and JWT Authentication**. Users can securely communicate in real time with persistent chat history stored in MongoDB.

## Features

* User Authentication with JWT
* Secure Password Hashing with bcrypt
* Real-Time Messaging using Socket.IO
* One-to-One Private Chat
* Persistent Message Storage in MongoDB
* Protected Routes with JWT Middleware
* Layered Architecture (Controller → Service → Repository → Database)
* REST APIs for Chat History
* Scalable and Maintainable Project Structure

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* bcryptjs

### Tools

* Git & GitHub
* Postman
* VS Code

## Project Structure

```bash
src/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   └── Message.js
│
├── repositories/
│   ├── user.repository.js
│   └── message.repository.js
│
├── services/
│   ├── auth.service.js
│   └── message.service.js
│
├── controllers/
│   ├── auth.controller.js
│   └── message.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   └── socketAuth.middleware.js
│
├── routes/
│   ├── auth.routes.js
│   └── message.routes.js
│
├── sockets/
│   └── chat.socket.js
│
├── app.js
└── server.js
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/chat-application.git
```

### Move Into Project

```bash
cd chat-application
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the root directory.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run Development Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:3000
```

## Authentication Flow

1. User registers an account.
2. Password is hashed using bcrypt.
3. User logs in.
4. JWT token is generated and returned.
5. Client stores the token.
6. Token is verified for protected routes and socket connections.

## Socket.IO Flow

```text
User Login
    ↓
JWT Generated
    ↓
Socket Connection
    ↓
JWT Verification
    ↓
Join User Room
    ↓
Send Message
    ↓
Save Message in MongoDB
    ↓
Emit Message to Receiver
    ↓
Real-Time Delivery
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Messages

#### Get Chat History

```http
GET /api/messages/:receiverId
```

## Database Schema

### User

```javascript
{
  name: String,
  email: String,
  password: String
}
```

### Message

```javascript
{
  sender: ObjectId,
  receiver: ObjectId,
  message: String,
  createdAt: Date
}
```

## Future Improvements

* Group Chat
* Typing Indicator
* Online/Offline Status
* Seen Message Status
* File Sharing
* Image Uploads
* Voice Messages
* Push Notifications

## Author

Sachin Bind
