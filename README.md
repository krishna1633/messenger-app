# Messenger App

This repository contains two npm projects: one for the server and one for the React app. The goal of this project is to create a simple messenger application where users can write messages in a chat window and see them appear, as well as select a friend and view the chat history with that friend.

## Features

### Goals
1. **Real-time Messaging**: User can write messages in the chat window and see them appear instantly.
2. **Friend Selection**: User can select a friend and view the chat history with that friend.

### Non-Goals
1. **Persisting Chat History**: The chat history is implemented using backend.
2. **Backend Communication**: The application is sending message to backend.
3. **Multiple users**: This is not implemented.

## Project Structure

```
messenger-app/
    ├── messenger-api/       # Node.js server project
    └── react-app/    # React application project
```

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/krishna1633/messenger-app
    cd messenger-app
    ```

2. **Install dependencies for the server:**
    ```sh
    cd messenger-api
    npm install
    ```

3. **Install dependencies for the React app:**
    ```sh
    cd ../react-app
    npm install
    ```

### Running the Application

1. **Start the server:**
    ```sh
    cd server
    npm start
    ```

2. **Start the React app:**
    ```sh
    cd ../react-app
    npm start
    ```

3. **Open your browser and navigate to:**
    ```
    http://localhost:5173/
    ```

## Implementation Details

- The server project is a basic Node.js application that serves the React app.
- The React app is built using functional components and hooks to manage state and side effects.
- There is no user auth concept. Default user goes and get all usernames saved in backend.
- User can send message and see history. It cannot recieve a message.

## Future Improvements

- Add persistent storage for chat history.
- Implement backend communication for real-time updates and data storage.
- Add auth mechanism like signup/login and jwt token for creating and managing multiple users.
- Use web-socket to communicate between users.
- Add options like Friends , Online Friends.
