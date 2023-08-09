# Ejs

Napnux comes with the EJS (Embedded JavaScript) templating engine by default as a middleware. You don't need to add it separately; it's included out of the box. EJS allows you to dynamically generate HTML content by embedding JavaScript code within your templates.

The EJS middleware can be configured according to your needs. Here is an example configuration:

```javascript
.ejs({
    views : path.join(__dirname, 'views'), // Views directory
    cache: process.env.NODE_ENV === "production", // Enable caching in production mode
    contentType: "text/html", // Content type for rendered templates
    status: 200, // HTTP status code to send, if set
    ext: "ejs", // File extension for templates (omit when rendering)
    options: {} // Additional options for EJS, refer to EJS documentation
})
```

In this configuration example:

**views:** Specify the directory where your EJS template files are located.  
**cache:** Enable caching of templates in production mode to improve performance.  
**contentType:** Set the content type for the rendered templates (e.g., "text/html").  
**status:** Set an HTTP status code to send with the response, if desired.  
**ext:** Define the file extension for templates. When rendering, you can omit this extension.  
**options:** Provide additional options for the EJS templating engine itself. Refer to the EJS documentation for available options.  
With this EJS configuration, Napnux will use the EJS templating engine to render HTML templates based on your configuration settings.

EJS provides a powerful way to create dynamic web pages and inject data into your templates. You can explore EJS further to build interactive and data-driven user interfaces for your Napnux applications.
