# Personal Financial Management App

This is a personal financial management application designed to help users manage their finances by tracking expenses, income, and budgeting. The system is built using React for the frontend, Express for the backend, and MongoDB for the database. The project includes features like transaction categorization, visual analytics, and user authentication.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and authorization
- Expense and income tracking with categorization
- Budget management
- Visual analytics with charts and graphs
- Responsive and user-friendly interface

## Installation

### Prerequisites
- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/theavnishkumar/personal-financial-management-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd personal-financial-management-app
   ```
3. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```
4. Install dependencies for the frontend:
   ```bash
   cd ../client
   npm install
   ```
5. Start the MongoDB server and configure the environment variables.
6. Run the backend server:
   ```bash
   cd server
   npm start
   ```
7. Run the frontend development server:
   ```bash
   cd ../client
   npm run dev
   ```

## Usage

- Once the servers are running, open your browser and navigate to `http://localhost:3000` to access the frontend.
- Register or log in to start managing your finances, track expenses, and view analytics.

## Project Structure

- **server/** - Backend code (Express)
  - **controllers/** - Contains route controllers for handling requests
  - **middleware/** - Custom middleware for tasks like authentication
  - **models/** - MongoDB models
  - **routes/** - API routes
  - **connection.js** - Database connection setup
  - **index.js** - Main server file

- **client/** - Frontend code (React)
  - **public/** - Static assets
  - **src/** - Source code for the React application
    - **components/** - Reusable React components
    - **pages/** - Application pages
    - **context/** - API context for managing global state and API calls
  - **vite.config.js** - Vite configuration file

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
