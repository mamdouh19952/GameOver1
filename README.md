# Game Over — Free-to-Play Games Browser

A responsive front-end app for browsing free-to-play games by category. Users sign up and log in, then explore games and open a details page for each one.

## Features

- **Sign up and log in** against a REST API, with the token kept in `localStorage`
- **Form validation** with regular expressions (email format, password of at least 8 characters with letters and digits)
- **Browse by category** with data loaded from the Free-to-Play Games Database API
- **Game details page** with description and info for the selected game
- **Dark / light mode** remembered between visits
- Responsive layout built with Bootstrap 5

## Tech Stack

| Area | Tools |
|---|---|
| Markup / style | HTML5, CSS3, Bootstrap 5.3, Font Awesome |
| Logic | Vanilla JavaScript (fetch, async/await, DOM, localStorage) |
| Data | Free-to-Play Games Database on RapidAPI |

## Project Structure

```
index.html      login page
register.html   sign-up page
home.html       games list with category filter
details.html    single game details
js/             auth, home, details, register, theme logic
css/            Bootstrap, Font Awesome, custom styles
assets/         images and web fonts
```

## Getting Started

It is a static site, so there is no build step.

1. Clone the repo.
2. Create a free key on [RapidAPI](https://rapidapi.com/digiwalls/api/free-to-play-games-database) and put it in the `x-rapidapi-key` header in `js/home.js` and `js/details.js`.
3. Serve the folder with any static server (for example the VS Code Live Server extension) and open `index.html`.

## Author

**Mamdouh Mahmoud** — Full Stack Developer (Laravel · Vue)
[LinkedIn](https://linkedin.com/in/mamdouh-mahmoud) · [Portfolio](https://mamdouh19952.github.io/portfolio/)
