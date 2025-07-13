# Moviefy - A Movie Web App in React

Welcome to Moviefy, a modern movie discovery web application built using React and Vite. This project lets users browse, search, and learn more about movies with a clean UI and fast performance.

## Technologies Used

- **React**: For building interactive user interfaces with reusable components.
- **Vite**: As the build tool and development server for fast startup and hot module replacement.
- **ESLint**: For maintaining code quality and consistency.
- **Vite Plugins**: Includes plugins for React (Babel and SWC) to enable fast refresh and modern JavaScript features.

## Getting Started

Clone the repository and run it locally:

```sh
git clone https://github.com/animenzo/moviefy-a-movie-webapp-in-react.git
cd moviefy-a-movie-webapp-in-react
npm install
npm run dev
```

Open your browser and go to `http://localhost:5173` to view the app.

## Project Structure

- **src/pages/**: Contains page-level components representing different views in the app.
- **src/components/**: Contains reusable UI components used across pages.

## Pages

Here’s an overview of the main pages you’ll find:

- **Home Page**: The landing page that displays popular or featured movies. Users can explore trending content and quickly access movie details.
- **Movie Details Page**: Shows in-depth information about a selected movie, including its title, description, cast, and ratings.
- **Search Page**: Allows users to search for movies by title or keyword, displaying results dynamically.
- **Favorites Page**: Lets users view and manage their list of favorite movies.

## Components

Below are some of the key components used in the app, along with their purpose:

- **MovieCard**: Displays a movie’s poster, title, and summary. Used in lists or grids of movies.
- **Navbar**: The top navigation bar for switching between pages like Home, Search, and Favorites.
- **SearchBar**: An input component for users to search movies.
- **MovieList**: Arranges multiple MovieCard components, used for rendering collections like trending or search results.
- **FavoriteButton**: Lets users add or remove movies from their favorites.
- **Loader/Spinner**: Indicates loading states while data is being fetched.

## How It Works

1. **Browse Movies**: From the Home page, users can scroll through trending movies.
2. **Search**: Use the SearchBar to find movies by name.
3. **View Details**: Click a MovieCard to see full details on the Movie Details page.
4. **Favorite Movies**: Mark movies to keep track of your favorites and view them on the Favorites page.

## Live Demo

Try Moviefy online:  
[https://moviefy-a-movie-webapp-in-react.vercel.app](https://moviefy-a-movie-webapp-in-react.vercel.app)

## Contribution

Feel free to fork, open issues, and submit pull requests to improve Moviefy!

## Author

Created by [piyushtailor](https://github.com/animenzo)
