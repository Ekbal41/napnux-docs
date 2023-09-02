---
sidebar_position: 6
---

# Templating Engine

Napnux supports a variety of templating engines commonly used in web development, such as  
 'ejs', 'pug', 'dot', 'ejs' and more. By default, Napnux comes with the `nunjucks` templating engine for rendering HTML.

To configure default(Nunjucks) templating engine in Napnux, follow these steps:

1. Make sure to import the `path` module at the beginning of your `server.js` file:

```javascript
const path = require("path");
```

2. Add the `.views()` method to your Napnux server configuration in `index.js`.  
   so tha we can provide path where we will store our view files.

```javascript
// index.js
const path = require("path");
const server = require("./ends.js");
const port = 3000;

server
  .static("public", path.join(__dirname, "public"))

  .views(path.join(__dirname, "views"), {
    //This config object is optional
    contentType: "text/html", // Content type for rendered templates
    status: 200, // HTTP status code to send, if set
    ext: "njk", // File extension for templates (omit when rendering)
    options: {}, // Additional options for Nunjucks, Ex : cache.
  })

  .start(port, () => {
    console.log(`> index Listening on http://localhost:${port}`);
  });
```

3. Now you can render HTML templates from the `/views` folder. For example, in your `ends.js` file:

```javascript
// ends.js
module.exports = napnux()
  .get("/", (req, res) => {
    res.render("hello"); // Render the "hello.ejs" template from the /views folder
  })
  .get("/hello/:name", (req, res) => {
    res.end(`Hello ${req.params.name}!`);
  });
```

This assumes you have an `hello.ejs` template file in your `/views` folder.

With these configurations, Napnux will use the ejs templating engine to render HTML templates from the specified views directory. You can create dynamic and interactive web pages by leveraging the power of templating engines.

Feel free to explore and experiment with different templating engines and templates to create engaging user interfaces for your Napnux applications.
