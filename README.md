<div align="center">
<h1> Tian's website v2 </h1> 
A new website designed to showcase my portfolio and offer detailed information about my background, skills, and professional achievements.  <br><br>
  
[![madewithlove](https://img.shields.io/badge/made_with-❤-red?style=for-the-badge&labelColor=orange
)](https://github.com/Tianyu-00)

[Backend](https://github.com/TianYu-00/TianYuSiteV2?tab=readme-ov-file#backend) | [Frontend](https://github.com/TianYu-00/TianYuSiteV2?tab=readme-ov-file#frontend)

[![Docker GHCR Build & Push](https://github.com/TianYu-00/TianYuSiteV2/actions/workflows/docker-ghcr.yml/badge.svg?branch=production)](https://github.com/TianYu-00/TianYuSiteV2/actions/workflows/docker-ghcr.yml)


![Website Image Demo](https://github.com/user-attachments/assets/472d6a77-4f12-4129-827f-1740a922f00b)

</div>

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
npm install
npm run setup-db
npm run seed
npm start
```

.env.development

```
PGDATABASE=x
DATABASE_URL=x
```

.env.test

```
PGDATABASE=x
DATABASE_URL=x
```

.env.production

```
PGDATABASE=x
DATABASE_URL=x
```

## Frontend

For the frontend, I’ve used **React** and **Vite.js** to build a modern, responsive web application. **Tailwind CSS** is utilized for styling to ensure a clean and customizable design.

#### Key Components:

1. **React & Vite.js**:

   - I use **React** to build the user interface, leveraging its component-based architecture for a dynamic and interactive experience.
   - **Vite.js** serves as the build tool and development server, providing fast hot module replacement (HMR) and optimized production builds.

2. **Tailwind CSS**:

   - **Tailwind CSS** is employed for styling the application. It offers a utility-first approach to CSS, allowing for flexible and responsive design without the need for custom CSS.

3. **Hosting with NGINX**:

   - The final product is hosted on **NGINX**. This setup includes **NGINX Proxy Manager** to manage reverse proxy configurations, handling incoming requests and routing them to the appropriate services.

4. **Cloudflare for Secure Connections**:
   - **Cloudflare** is used to set up a secure tunnel, protecting and optimizing traffic between the users and my application. This ensures that connections are encrypted and the site benefits from Cloudflare’s security features.

#### My Workflow:

- **Development**: I build the frontend using React and Vite.js, applying styles with Tailwind CSS. During development, Vite.js provides fast feedback with its hot module replacement.
- **Styling**: Tailwind CSS is used throughout the project to maintain a consistent design and facilitate responsive layouts.
- **Deployment**: Once the build is complete, the application is deployed to an NGINX server. NGINX Proxy Manager handles the reverse proxy setup, and Cloudflare ensures secure and optimized access for users.

```
cd frontend
npm install
npm run dev
```

## Root

This is only needed if testing with local docker containers

.env

```
# backend
PORT=x
NODE_ENV=development
PGDATABASE=x
DATABASE_URL=x

# Watchtower
GHCR_USERNAME=TianYu-00
GHCR_TOKEN=x
```

## Docker

Docker Compose For Production

```yml
version: "3.9"

services:
  # Backend
  backend:
    container_name: tianyu-website-backend
    image: ghcr.io/tianyu-00/tianyu-website-backend:latest
    ports:
      - "34443:9090"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - PGDATABASE=xxx
      - DATABASE_URL=xxx
    networks:
      - tianyu-website-network

  # Frontend
  frontend:
    container_name: tianyu-website-frontend
    image: ghcr.io/tianyu-00/tianyu-website-frontend:latest
    ports:
      - "34442:80"
    restart: unless-stopped
    networks:
      - tianyu-website-network

  # Updater
  watchtower:
    image: containrrr/watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_POLL_INTERVAL=30
      - GHCR_USERNAME=xxx
      - GHCR_TOKEN=xxx
    networks:
      - tianyu-website-network

networks:
  tianyu-website-network:
    driver: bridge
```
