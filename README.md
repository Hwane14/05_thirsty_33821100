
# Node.js Application

A lightweight node.js web application built with Express and EJS for dynamic HTML rendering. This project demonstrates modular Express architecture with support for dynamic routing, form handling, middleware chaining and static file serving. It showcases how to build clean, maintainable web apps using server-side templating and structured route management.

## Technologies Used

- **HTML** – for structuring page content
- **CSS** - to styling and layout of the HTML elements
- **Node.js** – for running the server-side application (`index.js`)
- **Express.js** - for routing, middleware, and modular server logic
- **EJS** - for rendering dynamic HTML pages by embedding JavaScript into templates

## Available Routes

| Route            | Description                                                                |
|------------------|----------------------------------------------------------------------------|
| `/`              | Displays a dynamic home page                                               |
| `/about`         | Displays a dynamic page using EJS                                          |
| `/search`        | Displays a dynamic search page                                             |
| `/register`      | Displays a register form with inputs e.g. name                             |
| `/survey`        | Displays a survey that once submitted displays `surveyResult.ejs`          |

> Note: Some routes like `/surveyed`, `/registered`, and `/search_result` are used internally to handle form submissions and are not intended for direct access.

## How to Install and Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Hwane14/05_thirsty_33821100.git
cd 05_thirsty_33821100 
```

### 2. Install Node.js (if not already installed)
Download and install from nodejs.org

### 3. Install dependencies
```bash
npm install
```

### 4. Run the server
```bash
node index.js
```

### 5. Open your browser
Visit: http://www.doc.gold.ac.uk/usr/301/
You should see the home page. Experiment by visiting the routes listed above.