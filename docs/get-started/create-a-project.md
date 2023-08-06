---
sidebar_position: 6
---

# Create A Project

Create a `myproject` directory in your pc.

```bash
 mkdir myproject
 cd myproject
```

Inside `myproject` dir run `npm init` to create a package.json file in your aplication.

```bash
 npm init
```

Now install `Napnux` in your myapp directory, Try bellow command.

```bash
 npm install napnux
```

### Creating Project

A Napnux project can be structured the way you like it fit. But we recomendate a standarded structure with `roo.js` and `server.js` file in your project base directory.

```javascript
//root.js
const napnux = require("napnux");
module.exports = napnux()
  .get("/", (req, res) => {
    res.end("hello world");
  })
  .get("/hello/:name", (req, res) => {
    res.end(`Hello ${req.params.name}!`);
  });
```

Now import the `root.js` inside `server.js` where we will start the server and do nessary setting for the project.

```javascript
//server.js
const root = require("./root.js");
const port = 3000

root
  .start(port, () => {
    console.log(`> Server Listening on http://localhost:${port}`);
  });
```

Run `node server.js` to start dev server in http://localhost:3000. And that all.🎉
