# Mount An App 🚀

You can easyly mount your app to the Napnux project, Here is how you should do it

```javascript
const authApp = require("/apps/auth")
const port = 3001;

napnux()
  .get("/", (req, res) => {
    res.end("Hello World");
  })
  .use("/auth", authApp); //new
  .start(port, () => {
    console.log(`Your first app is listening on port ${port}`);
  });
```

Now your **Auth** app should be available in **http://localhost:3001/auth**
