# Storage

### Initializing the Storage

To start using the FSStorage module, you need to initialize it with a storage directory. The following code snippet demonstrates how to set up FSStorage in your application:

```javascript
const path = require("path");
const napnux = require("napnux");

const storage = napnux.FSStorage({
  storageDir: path.join(__dirname, "uploads"),
});
```

In this example, we initialize the storage in a directory called "uploads" within the current application directory.

### Storing Files

To store files using FSStorage, you can use the .store() method. It takes two arguments: the file data and the desired file name. Here's an example of how to store a file received via a POST request:

```javascript
.post("/", async (req, res) => {
    const { userImg } = req.body;
    await storage.store(userImg.data, userImg.name);
    res.redirect("/");
})
```

In this code, userImg.data represents the file data, and userImg.name represents the desired file name.

### Creating a Symbolic Link

To make the stored files accessible to the public, you can create a symbolic link to a public folder. Use the linkOrCopyTo option when initializing FSStorage, like this:

```javascript
const storage = napnux.FSStorage({
  storageDir: path.join(__dirname, "givens"),
  linkOrCopyTo: path.join(__dirname, "public"), // new added
});
```

In this example, files stored in the "givens" directory will be symbolically linked to the "public" directory.

### Removing Files

To remove files from the storage directory, you can use the .remove() method. Provide the file name as an argument to delete the specified file:

```javascript
.post("/", async (req, res) => {
    await storage.remove("file-name");
    res.redirect("/");
})
```

Replace "file-name" with the name of the file you want to remove.

### Removing Symbolic Links

To remove symbolic links created by FSStorage, use the .unlink() method. Here's an example:

```javascript
.post("/", async (req, res) => {
    await storage.unlink();
    res.redirect("/");
})
```

This code will remove the symbolic links between the storage directory and the public directory.

### Conclusion

Napnux FSStorage provides a convenient way to store and manage files in your Node.js application. You can easily store, access, and remove files while maintaining control over their visibility to the public.
