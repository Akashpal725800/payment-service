# 💳 Payment Service API

A scalable Payment Service built with **Node.js**, **Express**, and **MongoDB** following a clean layered architecture with repository pattern and command-query separation.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (if used)
* Stripe (if integrated)

---

## 📂 Project Structure

```
payment-service/
│
├── src/
│   ├── command/
│   ├── config/
│   ├── controller/
│   ├── dto/
│   ├── model/
│   ├── queries/
│   ├── repository/
│   ├── routes/
│   ├── service/
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 🏗 Architecture Overview

Flow:

```
Route → Controller → Service → Repository → Database
```

### Layer Responsibilities

* **Controller** → Handles HTTP request/response
* **Service** → Business logic
* **Repository** → Database operations
* **DTO** → Data validation / transformation
* **Command / Query** → Logical separation of write and read operations

---

## ⚙️ Environment Variables

Create a `.env` file in root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> ⚠️ Never push `.env` to GitHub. Use `.env.example` instead.

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/your-username/payment-service.git
```

Go to project folder:

```
cd payment-service
```

Install dependencies:

```
npm install
```

Create `.env` file:

```
cp .env.example .env
```

Start the server:

```
npm run dev
```

or

```
npm start
```

---

## 🌐 API Endpoints

Base URL:

```
http://localhost:8001/api/payments
```

---

### 🔹 Create Payment

**POST** `/api/payments`

Request Body:

```json
{
  "name": "Akashkumar",
  "email": "akash@gmail.com",
  "amount": 500,
  "paymentMethod": "upi",
  "status": "pending",
  "transactionId": "TXN1001"
}
```

Description: Create a new payment record.

---

### 🔹 Get All Payments

**GET** `/api/payments`

Description: Fetch all payment records.

---

### 🔹 Get Payment By ID

**GET** `/api/payments/:id`

Example:

```
GET /api/payments/69a423e11e2cf742889c1de0
```

Description: Fetch a single payment by ID.

---

### 🔹 Update Payment

**PUT** `/api/payments/:id`

Example:

```
PUT /api/payments/69a423e11e2cf742889c1de0
```

Description: Update payment details by ID.

---

### 🔹 Delete Payment

**DELETE** `/api/payments/:id`

Example:

```
DELETE /api/payments/69a423e11e2cf742889c1de0
```

Description: Delete a payment record by ID.


---

## 🛡 Features

* Create Payment
* Verify Payment
* Transaction History
* Clean Architecture
* Repository Pattern
* Command-Query Separation
* Scalable Folder Structure

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client

---

## 📌 Future Improvements

* Centralized Error Handling
* Logging (Winston)
* Rate Limiting
* Swagger API Documentation
* Unit & Integration Testing

---

## 👨‍💻 Author

Developed by Akash

---

## 📄 License

This project is licensed under the MIT License.
