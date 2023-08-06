# Ejs

`.ejs` is nothing more than a **Middleware** that defaulty come with napnux. You dont have to add it separetly.
Thos middleware can configured according to your need, here is an example:

```javascript
.ejs({
    views : path.join(__dirname, 'views') , // views directory
    cache: process.env.NODE_ENV === "production", // true or false
    contentType: "text/html", // rendered content type
    status: 200, // status to send, if set
    ext: "ejs", // file extention, so that you dont have to wright it always
    options: {} // options for ejs itself, see ejs docs
   })
```
