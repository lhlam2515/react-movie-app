# React Movie App

This project is a movie search application built with React and Vite. It allows users to search for movies, view trending movies, and see detailed information about each movie. The application uses the TMDB API to fetch movie data and Appwrite for backend services.

## Features

- Search for movies by title
- View trending movies based on search counts
- Display detailed information about each movie
- Responsive design with Tailwind CSS
- Debounced search to minimize API requests
- Loading spinner for better user experience
- Advanced search filters: genre, release year, language, rating range, and sorting options

## Technologies Used

- React
- Vite
- Tailwind CSS
- Appwrite
- TMDB API

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/lhlam2515/react-movie-app.git
   cd react-movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build

## License

This project is licensed under the MIT License.
