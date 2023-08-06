---
sidebar_position: 6
---

# Static Files

To serve static files such as images, CSS files, JavaScript or even html files. In your `server.js` file:

```javascript
.static("public", path.join(__dirname, 'public'));
```

You server.js file will look like:

```javascript
//server.js
const path = require("path")
const root = require("./root.js");
const port = 3000

root
  .static("public", path.join(__dirname, 'public')); // new added
  .start(port, () => {
    console.log(`> Server Listening on http://localhost:${port}`);
  });
```

All static file will loaded from /public base directory

```bash
http://localhost:3000/public/images/dog.jpg
http://localhost:3000/public/css/style.css
http://localhost:3000/public/images/bg.png
http://localhost:3000/public/hello.html
http://localhost:3000/public/js/pikapika.js

```
