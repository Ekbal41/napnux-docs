---
sidebar_position: 6
---

# Napnux CLI

The Napnux CLI (Command Line Interface) provides a convenient way to generate a project structure for your web applications. Follow these steps to use the Napnux CLI and understand the resulting project structure.

1. **Install Napnux CLI:**  
   Open your terminal or command prompt and install the Napnux globally using the following command:

```bash
npm install -g napnux
```

2. **Create a New Project:**
   Once the Napnux CLI is installed, you can create a new project by running the following command:

```bash
nux create-project ./
```

This will prompt you to provide a project name and create a basic project structure for you.

### Project Structure

The Napnux CLI generates a project structure that promotes modularity and easy organization. Here's an overview of the typical project structure:

```java
├── apps
├── views
├── public
├── ends.js
├── index.js
└── package.json

```

**apps:** This directory houses your individual apps. Each app has its own subdirectory containing views, static files, styles, and an `index.js` file.  
**views:** This directory contains shared views/templates that can be used across different apps.  
**public:** This directory is used to serve static files such as images, CSS, and JavaScript for your apps.  
**ends.js:** This file defines all the routes on / , Ex: /about, /contact.  
**index.js:** This is the main entry point for your Napnux server.  
**package.json:** The package file for your project, which includes dependencies and scripts.

The generated project structure helps you build and manage multiple apps within a single project, allowing you to create modular and organized applications.
