---
sidebar_position: 6
---

# Hello World!

To get started with Napnux, let's create a simple "Hello World" app.  
 Follow the steps below to set up and run the app.

1. Create a new file named `index.js` in your project directory.
2. Copy and paste the following code into your `index.js` file:

```javascript
const napnux = require("napnux");
const port = 3001;

napnux()
  .get("/", (req, res) => {
    res.end("Hello World");
  })
  .start(port, () => {
    console.log(`Your first app is listening on port ${port}`);
  });
```

Save the file.  
Open your terminal or command prompt and navigate to your project directory.  
3. Run the app using the following command:

```bash
node index.js
```

This will start the development server, and you will see the following message in your terminal:

```csharp
Your first app is listening on port 3001
```

Open your web browser and navigate to http://localhost:3001/. You should see the "Hello World" message displayed in your browser.
Congratulations! You've just created and run your first Napnux app. This basic example demonstrates how to set up a simple web server using Napnux and serve content to a web browser.

