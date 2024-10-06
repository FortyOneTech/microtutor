# MicroTutor: AI-Powered Tutoring Assistant

An AI-powered platform designed to streamline tutoring workflows by automating administrative tasks such as lesson planning, note-taking, and generating practice exercises.

---

## Introduction

MicroTutor aims to empower tutors by reducing their time spent on administrative tasks. This allows them to focus more on personalized teaching and student engagement. It offers features tailored to the needs of modern tutors.

---

## Features

- **AI-Generated Practice Exercises**
- **Automated Lesson Note-Taking**
- **Lesson Plan Templates**
- **User Authentication (Email & Google SSO)**
- **Subscription Management with Stripe**

---

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **MongoDB** (local or cloud instance)
- **Stripe Account**
- **Firebase Project** (for Authentication)
- **OpenAI API Key**
- **Git**

---

## Installation

1. **Clone the Repository**
    
    ```bash
    git clone <https://github.com/yourusername/microtutor.git>
    cd microtutor
    ```
    
2. **Copy Environment Variables**
    
    For each service directory and the client, copy the `.env.example` to `.env`:
    
    ```bash
    cp ./api-gateway/.env.example ./api-gateway/.env
    cp ./auth-service/.env.example ./auth-service/.env
    cp ./user-service/.env.example ./user-service/.env
    cp ./ai-service/.env.example ./ai-service/.env
    cp ./payment-service/.env.example ./payment-service/.env
    cp ./client/.env.example ./client/.env
    ```
    
3. **Fill in the Environment Variables**
    
    Replace placeholders in each `.env` file with your actual configuration values.
    
4. **Build and Start Services**
    
    ```bash
    docker-compose up --build
    ```
    

---

## Environment Variables

Each service and client requires specific environment variables. For the required variables, refer to the `.env.example` files in each directory.

---

## Usage

Once all services are running, the application will be accessible at `http://localhost:3000`.

---

## Project Structure

```
microtutor/
├── api-gateway/
├── auth-service/
├── user-service/
├── ai-service/
├── payment-service/
├── client/
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## Services

### API Gateway

- **Port:** 5000
- **Description:** Acts as a single entry point for client requests, routing them to appropriate services.

### Auth Service

- **Port:** 5001
- **Description:** Handles user authentication and authorization.

### User Service

- **Port:** 5002
- **Description:** Manages user profiles, lesson plans, and notes.

### AI Service

- **Port:** 5003
- **Description:** Provides AI-powered features like exercise generation and note suggestions.

### Payment Service

- **Port:** 5004
- **Description:** Manages subscriptions and payment processing using Stripe.

### Client

- **Port:** 3000
- **Description:** Front-end application built with React.js.

---

## Contributing
Contributions are always welcome. See the [contributing guide](/CONTRIBUTING.md) to learn how you can help.

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
