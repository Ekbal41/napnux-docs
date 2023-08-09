# Deployment

Deploying a Napnux project is quite similar to how you'd deploy your regular Node.js web projects. And if you're looking to explore the realm of serverless deployment, we've got an exciting option for you: **Vercel**.

### ▲ Vercel

Vercel offers an easy and powerful way to deploy your Napnux project without the hassle of managing servers.  
Create a file named `vercel.json` in your project directory and add the following code.

```json
{
  "version": 2,
  "builds": [
    {
      "src": "./index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

#### Push to GitHub

Once you've got your configuration set, it's time to bring your project to life. Push your project to GitHub, as you've done before. Now comes the exciting part - deploying through Vercel:

1. Visit the Vercel website.
2. Link your GitHub repository.
3. Choose your project and click deploy.

Thats All🎉
