# TianYuSiteV2

A new website to store my portfolios and basic information about me. 
 
## Backend
I’ve built my backend using Node.js, with Express.js to handle the API routing and middleware. My database is PostgreSQL, which I’ve hosted on a Docker container within my Debian server.

#### Key Components:
1. **Node.js & Express.js**:
   - I use **Node.js** as the runtime environment to run my server-side JavaScript code, and **Express.js** to manage my RESTful API routes and middleware.

2. **PostgreSQL (PSQL) Database**:
   - My **PostgreSQL** database is hosted in a Docker container on my Debian server. This setup allows me to manage the database in an isolated and consistent environment.

3. **Database Seeding with JSON**:
   - For easy database management, I use **JSON files** to seed my PostgreSQL database. A custom Node.js script reads these JSON files and populates the database with the necessary data, which simplifies updating and initializing the database during development and testing.

4. **Testing with Jest**:
   - I use **Jest** for testing, covering everything from unit tests to integration tests. I also utilize mocking to isolate components, so my tests run independently of the actual database.

5. **Express.js Hosting with Docker & NGINX**:
   - My **Express.js** application is also hosted in a Docker container. To handle incoming traffic, I use **NGINX** as a reverse proxy, directing requests to the appropriate containers. This setup ensures efficient routing and load balancing.

6. **Cloudflare for Tunneling**:
   - I use **Cloudflare** for tunneling, which helps me secure and manage external access to my application. Cloudflare adds a layer of protection, ensuring that traffic to my server is optimized and secure.

7. **Environment Configuration**:
   - I manage environment variables through **.env files**, which allow me to configure settings for different environments (development, testing, production) without hardcoding sensitive information.

#### My Workflow:

- **Development**: I write my code using Node.js/Express.js and update my JSON seed files when necessary. After making changes, I run tests using Jest to ensure everything works correctly.
- **Database Management**: I use Docker to run my PostgreSQL container. Whenever I need to reset or seed my database, I execute my custom seeding script that reads from JSON files and populates the database.
- **Deployment**: My Express.js app runs in a Docker container, with NGINX handling the reverse proxy, and Cloudflare ensuring secure and optimized access.

```
cd backend
```

```
npm run setup-db
npm run seed
npm start
```


## Frontend

```
cd frontend
```

```
npm run dev
```




