---
sidebar_position: 6
---

# Templating Enigine

Napnux can support all the templating engine that a commonlly used, like 'ejs', 'pub','dot' etc.
As deafult napnux comes with `ejs` engine for rendering htmls.
``

```javascript
.ejs({
    views : path.join(__dirname, 'views')
})
```

You updated server.js file will look like:

```javascript
//server.js
const path = require("path")
const root = require("./root.js");
const port = 3000

root
  .static("public", path.join(__dirname, 'public'));
  .ejs({
    views : path.join(__dirname, 'views') // new added
   })
  .start(port, () => {
    console.log(`> Server Listening on http://localhost:${port}`);
  });
```

Now you can render `html` from /views folder

```javascript
//root.js
module.exports = napnux()
  .get("/", (req, res) => {
    res.render("hello");
  })
  .get("/hello/:name", (req, res) => {
    res.end(`Hello ${req.params.name}!`);
  });
```
