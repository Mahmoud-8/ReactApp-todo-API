# Todo App with Meals - Frontend & Backend
This is a simple web application that allows users to manage their to-do list and get a random meal suggestion for the day.

![!\[Alt text\](<dist/Screenshot 2023-09-09 at 3.01.38 PM.png>)
](<Screenshot 2023-09-09 at 3.01.38 PM.png>)


![Alt text](<Screenshot 2023-09-20 at 3.38.31 PM.png>)

## Features

- Create, edit, and delete tasks on your to-do list.
- Toggle task statuses between open and completed.
- Get a random meal suggestion for the day.
- Simple navigation between the to-do list and meal suggestions.
- Responsive design for different screen sizes.
- Error handling for API requests.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Backend](#backend)
- [Contributing](#contributing)

## Getting Started

![Alt text](<Screenshot 2023-09-18 at 3.51.43 PM.png>)

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd todo-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the application.

![Alt text](<Screenshot 2023-09-09 at 3.05.07 PM.png>)


## Usage

- Add new tasks to your to-do list by typing in the input field and pressing Enter.
- Edit tasks by clicking the "Edit" button.
- Toggle task statuses between open and completed by clicking the checkbox.
- Delete tasks by clicking the "Delete" button.
- Click on the "Today Meal" link in the navigation bar to get a random meal suggestion for the day.

## Dependencies

This project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- FontAwesome: A library for adding icons to your web application.
- Yup: A JavaScript schema validation library (used for form validation).
- Formik: A form library for React.
- Axios: A promise-based HTTP client for making API requests.

You can find the full list of dependencies in the `package.json` file.

## Backend

This project uses a backend server to store and manage to-do tasks. The backend is implemented using Node.js and MongoDB.

### Backend Setup

1. Ensure you have Node.js and MongoDB installed on your system.

2. Set up a MongoDB database and obtain the connection URL.

3. Create a `.env` file in the root directory of the backend code with the following content:

   ```env
   DATABASE_CONNECTION=YOUR_MONGODB_CONNECTION_URL
   ```

4. Install the backend dependencies:

   ```bash
   cd backend
   npm install
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

The backend server should now be running and accessible at `http://localhost:3000`. The frontend is configured to communicate with this server.

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue or create a pull request.
