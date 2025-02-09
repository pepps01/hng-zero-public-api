# Node.js Express Email Validation API

This is a simple Node.js Express application that provides an email validation API endpoint. It validates whether an email is provided, checks if the email is valid, and then returns a JSON response with the email, the current date and time, and the GitHub repository URL.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pepps01/hngx-stage0-public-api.git


2. Install the dependencies 
   ```bash
   npm install 
   npm run build

3. Runn the Application 
    ```bash
    npm start

4. API Endpoints
    GET /
    This is the root endpoint that returns a simple greeting.

    URL: http://localhost:3000/
    Response: Hello World!
    
    
    GET /info
    This endpoint validates the email query parameter and returns a JSON response with the email, the current date and time, and the GitHub repository URL.

    Parameters:
    email (required): The email address to validate. It should be passed as a query parameter.

    ```bash 
    GET http://localhost:3000/info?email=test@example.com


5. Response:
    If the email is valid, you will receive a JSON response containing:

    {
        "email": "test@example.com",
        "current_datetime": "2025-02-09T12:34:56.789Z",
        "github_url": "https://github.com/pepps01/hngx-stage0-public-api.git"
    }


    If no email query parameter is provided, you will get an error:
    {
        "error": "Email query parameter is required"
    }
    
    If the provided email is invalid, you will get an error:
    {
        "error": "The input is an invalid email"
    }
