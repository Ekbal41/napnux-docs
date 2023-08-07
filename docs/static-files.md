---
sidebar_position: 6
---

# Static Files

To serve static files such as images, CSS files, JavaScript, or even HTML files, you can use the `.static()` method in your `server.js` file.

First, make sure to import the `path` module at the beginning of your` server.js` file:

```javascript
const path = require("path");
```

Next, you can add the `.static()` method to your Napnux root app configuration in `server.js`:

```javascript
// server.js
const path = require("path");
const root = require("./root.js");
const port = 3000;

root
  .static("public", path.join(__dirname, "public")) // Serve static files from the "public" directory
  .start(port, () => {
    console.log(`> Server Listening on http://localhost:${port}`);
  });
```

In this example, the `.static()` method is used to serve static files from the "public" directory, which is located in the same directory as your `server.js` file.

Now, you can access your static files using URLs like the following:

```bash
http://localhost:3000/public/images/dog.jpg
http://localhost:3000/public/css/style.css
http://localhost:3000/public/images/bg.png
http://localhost:3000/public/hello.html
http://localhost:3000/public/js/pikapika.js
```

Make sure that the files you want to serve are located in the "public" directory relative to your `server.js` file.

By configuring the `.static()` method, you can easily serve static assets and enhance the functionality of your Napnux web application.
