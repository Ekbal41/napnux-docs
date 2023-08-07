---
sidebar_position: 6
---

# Create A Project

Let's create a Napnux project from scratch. Follow these steps to set up and create your own Napnux project.

1. **Create a Project Directory:**
   Open your terminal or command prompt and create a directory where your Napnux project will reside. Navigate to this directory using the following commands:

```bash
mkdir myproject
cd myproject
```

2. **Initialize a package.json File:**
   Run the following command to create a package.json file for your application. This file will store information about your project and its dependencies.

```bash
Copy code
npm init
```

Follow the prompts to configure your package settings.

3. **Install Napnux:**
   With your project directory set up, install Napnux using the following command:

```bash
npm install napnux
```

4. **Creating Project Structure:**

A Napnux project can be structured to fit your needs, but we recommend a standardized structure with a `root.js` and `server.js` file in your project base directory.

Create a file named `root.js` in your project directory and add the following code:

```javascript
Copy code
// root.js
const napnux = require("napnux");
module.exports = napnux()
  .get("/", (req, res) => {
    res.end("hello world");
  })
  .get("/hello/:name", (req, res) => {
    res.end(`Hello ${req.params.name}!`);
  });
```

Next, create a file named `server.js` in your project directory and add the following code:

```javascript
Copy code
// server.js
const root = require("./root.js");
const port = 3000;

root.start(port, () => {
  console.log(`> Server Listening on http://localhost:${port}`);
});
```

5. **Start the Development Server:**

Run the following command in your terminal to start the development server:

```bash
node server.js
```

Your Napnux project is now up and running at http://localhost:3000. You'll see "hello world" when you visit this URL in your web browser.

Congratulations! You've successfully created a Napnux project and set up a basic server using the root.js and server.js files. From here, you can further customize and expand your project by adding more apps, views, routes, and functionality.
