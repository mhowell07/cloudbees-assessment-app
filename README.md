# CloudBees Assessment App

A Next.js application that displays GitHub users in a table format and provides detailed user profiles. This app fetches data from the GitHub API using Octokit and presents it in a clean, responsive interface.

## Features

- **User Table**: Browse a list of GitHub users with their avatars, usernames, and quick access links
- **User Details**: View detailed profiles including:
  - User avatar and full name
  - GitHub and Twitter handles
  - Company and location information
  - Join date
  - Repository count, gists, followers, and following statistics
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Mode Support**: Automatic dark/light theme detection

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)
- **Docker** (for containerized deployment)

## Installation & Setup

### Method 1: Local Development

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd cloudbees-assessment-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   The app includes a `.env` file with the following configuration:
   ```
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
   No additional environment variables are required as the app uses the public GitHub API.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Method 2: Docker Installation & Setup

#### Prerequisites for Docker
- Docker Desktop installed and running
- Basic familiarity with Docker commands

#### Docker Setup Steps

1. **Build the Docker image**:
   ```bash
   docker build -t cloudbees-assessment-app .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 cloudbees-assessment-app
   ```

3. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser

#### Alternative Docker Commands

**Run in detached mode** (runs in background):
```bash
docker run -d -p 3000:3000 --name cloudbees-app cloudbees-assessment-app
```

**Stop the container**:
```bash
docker stop cloudbees-app
```

**Start the container again**:
```bash
docker start cloudbees-app
```

**Remove the container**:
```bash
docker rm cloudbees-app
```

## How to Use the Application

### Main Page (User Table)
1. **Navigate to the home page**: [http://localhost:3000](http://localhost:3000)
2. **Browse users**: The main page displays a table of GitHub users with:
   - User avatars
   - Usernames
   - "View" link to see detailed profile
   - Direct link to their GitHub profile

### User Detail Pages
1. **Access user details**: Click the "View" link next to any user in the table
2. **URL format**: `http://localhost:3000/user/[username]`
   - Example: `http://localhost:3000/user/octocat`
3. **User profile includes**:
   - Large avatar image
   - Full name
   - GitHub username
   - Twitter handle (if available)
   - Company information (if available)
   - Location (if available)
   - Account creation date
   - Statistics cards showing:
     - Number of public repositories
     - Number of public gists
     - Follower count
     - Following count

### Navigation
- **Back to main page**: Use the back button (←) in the top-left corner of user detail pages
- **External links**: GitHub icons link directly to the user's GitHub profile in a new tab

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Technology Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **GitHub API**: Octokit
- **Image Optimization**: Next.js Image component
- **Container**: Docker with Node.js 20 Alpine

## Project Structure

```
cloudbees-assessment-app/
├── app/
│   ├── api/                    # API routes
│   │   ├── user/[username]/    # Individual user API endpoint
│   │   └── users/              # Users list API endpoint
│   ├── components/             # Reusable React components
│   │   ├── BackButton.tsx      # Navigation back button
│   │   └── UserTable.tsx       # Main user table component
│   ├── types/                  # TypeScript type definitions
│   │   └── github.ts           # GitHub API response types
│   ├── user/[username]/        # Dynamic user detail pages
│   │   ├── loading.tsx         # Loading state component
│   │   └── page.tsx            # User detail page component
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Home page component
├── public/                     # Static assets
├── Dockerfile                  # Docker configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## API Endpoints

The application includes API routes that can be accessed directly:

- `GET /api/users` - Returns list of GitHub users
- `GET /api/user/[username]` - Returns detailed information for a specific user

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   ```bash
   # Find and kill the process using port 3000
   npx kill-port 3000
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **Docker build fails**:
   - Ensure Docker Desktop is running
   - Check available disk space
   - Try cleaning Docker cache: `docker system prune`

3. **GitHub API rate limiting**:
   - The app uses the public GitHub API which has rate limits
   - If you encounter rate limiting, wait a few minutes before retrying
   - For higher rate limits, consider adding GitHub authentication

4. **Module not found errors**:
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

### Performance Notes

- The application uses Next.js dynamic rendering to ensure fresh data
- Images are optimized using Next.js Image component
- The app is responsive and works on mobile devices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to check code quality
5. Submit a pull request

## License

This project is private and intended for assessment purposes.
