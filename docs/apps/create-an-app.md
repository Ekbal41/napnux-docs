# Create An App

Creating an app in Napnux is a straightforward process that allows you to build modular and maintainable components for your project. Let's walk through the process of creating an authentication app step by step.

### Step 1: Project Setup

1. Open your project directory.
2. Create a folder named `apps`. This directory will house all your individual apps.
3. Inside the `apps` folder, create a new folder named `authApp` (for the authentication app).

### Step 2: Set Up App Structure

1. Inside the `authApp` folder, create an `index.js` file.
2. Open the `index.js` file in your preferred code editor.

### Step 3: Define Basic App Route

```javascript
//apps/authApp/index.js
const napnux = require("napnus");

module.exports = napnux().get("/", (req, res) => {
  res.end("hello from authApp");
});
```

### Step 4: Views Configuration

1. Create a folder named views inside the authApp folder.
2. Modify the index.js file to include the views configuration:

```javascript
//apps/authApp/index.js
const napnux = require("napnus");

module.exports = napnux()
  .ejs({
    views: __dirname + "/views", //new
  })
  .get("/", (req, res) => {
    res.end("hello from authApp");
  });
```

In this example we are using default ejs templating engine.

### Step 5: Public Folder for Static Files

1. Create a folder named public inside the authApp folder.
2. Place your static files (e.g., images, CSS, JavaScript) inside the public folder.
3. Update the index.js file to serve static files:

```javascript
//apps/authApp/index.js
const napnux = require("napnus");

module.exports = napnux()
  .static(__dirname + "/public") //new
  .ejs({
    views: __dirname + "/views",
  })
  .get("/", (req, res) => {
    res.end("hello from authApp");
  });
```

Path for statics file for our app will be,

```bash
http://localhost:3000/authApp/public/images/dog.jpg
http://localhost:3000/authApp/public/css/style.css
http://localhost:3000/authApp/public/images/bg.png
http://localhost:3000/authApp/public/hello.html
http://localhost:3000/authApp/public/js/pikapika.js

```

### Using Cli

If you are useing Napnux-cli, you can use following command to generate an app.

```bash
nux create-app authApp
```

It will create an app inside your projects apps folder, easy!

### Conclusion

Congratulations! You've successfully created an authentication app using the Napnux framework. This app is now structured to handle routes, views, and static files in an organized and maintainable manner. You can further expand your app by adding authentication logic, views, and features as needed. With Napnux's modular approach, you can easily manage and extend your project by adding more apps for different functionalities.
