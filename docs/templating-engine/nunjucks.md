# Nunjucks

Napnux also comes with the Nunjucks templating engine by default as a middleware.  
You don't need to add it separately; it's included out of the box.

The Nunjucks middleware can be configured according to your needs. Here is an example configuration:

```javascript
.nunjucks({
    views : path.join(__dirname, 'views'), // Views directory
    contentType: "text/html", // Content type for rendered templates
    status: 200, // HTTP status code to send, if set
    ext: "njk", // File extension for templates (omit when rendering)
    options: {} // Additional options for Nunjucks, Ex : cache.
})
```

In this configuration example:

**views:** Specify the directory where your EJS template files are located.  
**contentType:** Set the content type for the rendered templates (e.g., "text/html").  
**status:** Set an HTTP status code to send with the response, if desired.  
**ext:** Define the file extension for templates. When rendering, you can omit this extension.  
**options:** Provide additional options for the Nunjucks templating engine itself.
