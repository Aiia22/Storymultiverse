# Changelog

## UI [1.10.0] 2023-08-07

### Added
- Page: Contact us page
- CSS: Basic styling added

## UI [1.9.0] 2023-08-06

### Added
- Page: Support Page and somee content
- CSS: Add css page for the support page and added some styling


## UI [1.8.0] 2023-08-01

### Changed

- Pages: Community, Contact, MarketPlace, MyAccount, MyList, MySearch, MySearchSubResult, MySelectedResult
- Components: renamed MoviesBubble to FilmsBubble, footer, gameBubble,TvShowBubble

### Added

- Pages: Register, About us
- Routes in App.js router
- Selected item Search logic using temporary a json (to be replace by DB logic)

## UI [1.7.0] 2023-07-23

### Changed

- Pages: Login, Home, Mysearch, LandingPageNabar => LandingPageLogoPartner
- Components: SearchBar, SearchResults, UserLogin
- Removed some components not used/empty
- Removed unused Sass and other dependencies from webpack.config.js file

### Added

- Pages: Contact,MySearchResult, MySearchSubResult, MySelectedResult
- Components: BooksBubble, MoviesBubble, TvShowBubble, GamesBubble
- Icons for search results
- Added routes in App.js router for new search pages
- Search logic using temporary a json (to be replace by DB logic)
- data.json (containing all data for search feature)

## UI [1.6.2] 2023-07-22

### Changed

- Enhance home page , change icon for logo

### Added

- Create login page

## UI [1.6.1] 2023-07-20

### Changed

- Updated CSS file for home page

## UI [1.6.0] 2023-07-20

### Changed

- Updated Landing Page component with Icons
- Updated CSS file to reflect overal colouring and Icons

## UI [1.5.3] 2023-07-19

### Added

- Background image to Home Page
- CSS style file updated

## UI [1.5.2] 2023-07-19

### Changed

- CSS Style file for footer
- Added Icons for social media
- Updated links to pages

## UI [1.5.1] 2023-07-18

### Added

- Navbar component to Landing page
- CSS tag for landing page styling
- Homepage background image to images

## UI [1.5.0] 2023-07-18

### Added

- Created Landingpage navbar component
- CSS File for landing page navbar

## UI [1.4.0] 2023-07-17

### Added

- Basic structure for seach page
- SearchBar component
- SearResult component
- container for pages core functionalities

### Changed

- package.json file to specify UI or back from of items
- package.json file to add correct versions

### Fixed

- MySearch page path
- Nabar so it would stick to left side

## Back [1.2.0] 2023-07-16

### Changed

- route: auth.js
- model: user.js
- controllers: authControlle.js and userController.js
- Server
- removed node_module on project root

## UI [1.3.1] 2023-07-16

### Changed

- Updated Footer Style css

## UI [1.3.0] 2023-07-16

### Added

- CSS File for Footer
- Footer Componet logic

### Changed

- updated NavBar Style css

## UI [1.2.1] 2023-07-16

### Changed

- updated NavBar Style css

## UI [1.2.0] 2023-07-16

### Added

- CSS file for NavBar
- NavBar Component logic
- Support Page
- Images Folder

### Changed

- Removed Sass Folder (only use CSS from now on)

### Fixed

- webpack.config.js rules: accept .png, etc.

## UI [1.1.0] 2023-07-15

### Added

- Set up react router
- Connect pages to router
- Install required dependencies to use react router
- Add copyright & references

### Changed

- modify webpack.config.js to make sure client-side routing works properly

## UI [1.0.0] 2023-07-15

### Added

- Set up between react server and node serve
- Add proxy to connect

## UI [Unreleased] 2023-07-15

### Added

- Set up for react project
- All required dependencies : Babel, Webpack
- WebPack congig file

### Changed

- Rename components Header.js to Navbar.js

## UI [Unreleased] 2023-07-15

### Changed

- Changed Style folder location in Frontend

## back [1.1.0] 2023-07-13

### Added

- Added validation middleware using Yup for registration and login routes in auth.js
- Integrated authentication middleware in users.js routes
- Added user model to include database operations for user CRUD
- Added userController.js to handle user-related actions
- Created authMiddleware.js for JWT authentication

### Changed

- Refactored authentification logic

### fixed

- Fixed import errors and module dependencies in route files

### Changed

- Refactored the server.js file for better organization and modularity.

## back [1.0.0] 2023-07-12

### Added

- Set up the initial server file with necessary dependencies and middleware.
- Created API endpoints for user authentication and registration.
- Implemented JWT authentication middleware for secure routes.

### Changed

- Refactored the server.js file for better organization and modularity.

### Fixed

- Resolved any issues related to the server setup.

## [Version 1.0.0] 2023-07-12

- Initial release of the Storymultiverse server.

## [Unreleased]- 2023-07-10

### Added

- Main.css & Sass files

## [Unreleased]- 2023-07-10

### Added

- Initial project setup
  - Created file structure
  - Added basic components and services
  - Set up routing and navigation
  - Implemented user registration and login functionality
  - Added basic search and cross-referencing functionality
  - Included rating and review feature
  - Integrated personalized recommendations functionality
  - Implemented community and marketplace features
