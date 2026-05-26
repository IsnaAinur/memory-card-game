[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=4AF6CD)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

# Game Rules

1. The application will fetch a group of data (e.g., 10-12 characters/images) from an API when it first loads (on component mount).
2. Every time a card is clicked, the positions of all cards will be shuffled randomly
3. The Challenge: The player must click a card that has not been clicked yet during that specific session
4. If the player clicks a card that has not been clicked before, the Current Score increases by +1.
5. If the player clicks a card that has already been clicked, Game Over! The Current Score resets to 0, and if the current score is higher than the Best Score, the Best Score value is updated.

## Features

* **Live Asynchronous API Fetching:** Direct integration with `https://pokeapi.co/` using standard asynchronous JavaScript (`async/await`) inside lifecycle hooks (`useEffect`) to load high-resolution official artworks dynamically.

* **State Preservation:** Decoupled structural state tracking to safely separate operational arrays (card indexes, clicked identifiers) from UI metrics (scores, loading locks).

* **Algorithmic Shuffling :** Leverages a true linear-time array randomizer to prevent layout bias and maintain computational performance during rapid rendering.

## Folder Structure

```text
src/
├── components/
│   ├── Header.jsx       # Displays title banners and programmatic rules
│   ├── Scoreboard.jsx   # Scoring tracks for current and session-high metrics
│   ├── CardGrid.jsx     # Structural wrapper responsible for grid iterations
│   └── CardItem.jsx     # Individual stateless rendering nodes for each card
├── styles/
│   ├── App.css          # Viewport architecture and responsive media queries
│   ├── Scoreboard.css   # Panel cosmetics and absolute tracking themes
│   └── Card.css         # Grid layouts, hover transitions, and item cards
├── App.jsx              # Centralized global state & API handlers
├── main.jsx             # React DOM entry point
└── index.css            # Base stylesheet reset configurations