---
sidebar_position: 6
---

# Hello World!

```javascript
const napnux = require("napnux");
const port = 3001;

napnux()
  .get("/", (req, res) => {
    res.end("Hello World");
  })
  .start(port, () => {
    console.log(`Your first app listening on port ${port}`);
  });
```

### Run Locally

You can run the app with the following command:

```bash
node app.js
```

This will start the dev server at http://localhost:3000/ in your browser.
