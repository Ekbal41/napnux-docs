---
sidebar_position: 6
---

# Templating Engine

Napnux supports a variety of templating engines commonly used in web development, such as  
 'ejs', 'pug', 'dot', and more. By default, Napnux comes with the `ejs` templating engine for rendering HTML.

To configure the ejs templating engine in Napnux, follow these steps:

1. Make sure to import the `path` module at the beginning of your s`erver.js` file:

```javascript
const path = require("path");
```

2. Add the `.ejs()` method to your Napnux root app configuration in `server.js`:

```javascript
// server.js
const path = require("path");
const root = require("./root.js");
const port = 3000;

root
  .static("public", path.join(__dirname, "public"))
  .ejs({
    views: path.join(__dirname, "views"), // Configure the views directory
  })
  .start(port, () => {
    console.log(`> Server Listening on http://localhost:${port}`);
  });
```

3. Now you can render HTML templates from the `/views` folder. For example, in your `root.js` file:

```javascript
// root.js
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
