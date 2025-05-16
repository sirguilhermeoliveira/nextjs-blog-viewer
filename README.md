# 🧪 Frontend Technical Test – Focus on Next.js > nextjs-blog-viewer
A practical frontend challenge focused on building a modern and high-performance blog interface using Next.js. The application consumes data from public REST APIs to display posts, comments, and user information, applying best practices in code quality, performance, and user experience.

---

## 📦 Technologies Used

- [Next.js 15.3.2](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint 9](https://eslint.org/)
- [Docker](https://www.docker.com/)

---

## 🗂️ Application Pages

### 🏠 Home (`/`)
- Displays a list of available **posts**.
- Each item shows the **title** and a **summary** of the content.
- Links to the post details page.

### 📄 Post Page (`/posts/[id]`)
- Displays the full **post** content.
- Lists all **comments** for that post.
- Shows **author (user)** details.

### 👤 User Page (`/users/[id]`)
- Displays all **posts written by a specific user**.
- Shows **user information** at the top of the page.

---

## 🧠 Technical Decisions

### Data Fetching: Pages uses async server-side functions (getPosts, getUsers) for Static Site Generation (SSG), improving performance and SEO.

### Dynamic Routing:

#### /posts/[id] displays full post content and comments.

#### /users/[id] shows user details and their posts.

### Styling: Built with Tailwind CSS 4 for a clean, responsive UI with smooth hover effects and consistent design.

---

## 🔗 Public APIs Used

- **Posts:** https://jsonplaceholder.typicode.com/posts  
- **Post Comments:** https://jsonplaceholder.typicode.com/posts/[ID]/comments  
- **Users:** https://jsonplaceholder.typicode.com/users  
- **User Details:** https://jsonplaceholder.typicode.com/users/[ID]  

---

## 🛠️ How to Run the Project

### ▶️ Option 1: Running Locally

# Clone the repository
git clone https://github.com/your-user/nextjs-blog-viewer.git
cd nextjs-blog-viewer

# Install dependencies
yarn install
# or
npm install

# Run in development mode
yarn dev
# or
npm run dev

# Open http://localhost:3000 in your browser

### ▶️ Option 2: Using Docker (recommended for production)

> Requirements: [Docker](https://www.docker.com/) installed

```bash
# Build the Docker image
docker build -t nextjs-blog-viewer .

# Run the container on port 3000
docker run -p 3000:3000 nextjs-blog-viewer
