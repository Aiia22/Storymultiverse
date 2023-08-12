//------------------------------- Guideline for this project ---------------------------------------- /

# Brief overview of Storymultiverse App and utils

The StoryMultiverse App offers an intuitive and seamless experience for exploring a universe of interconnected content. This App unfortunately could not be connected to the DB although all the logic is there comment out. It is using json . We did try to even inject the data onto the DB manually using a script importData.js but nothing works.

## StoryMultiverse Search

Global Search: You can browse without login by clicking onto the "Explore" button
Once in the global search page just type the storyname you are looking for like "Harry Potter" and press "Search the storyverse"
The system will generate related content icons, with number of items per categories beneath each icon
If you click on one of then you will be redirected to a detailed list
Detailed List: If you click on one of the items on the list you will then access comprehensive details about the content

## Navigation

The Navbar provides quick access to different sections like My Account, Support, search and home

## Support

If user have questions or need assistance, he/she can visit the Support section for help with general answer provide

## Contact Us

User can reach out to our team for comments, questions, or collaboration opportunities with provided contact

## Login/Register/Reset password

User can login directly via home page or by clicking on the login icon on the navbar
New user can register as there are given the choice to either login or register
User cannot reset password yet as we encounter DB connection issue and we only mocking the data for now. But the logic is there commented.  
User that are not logged in cannot access the community and my list pages.

# Structure of the project:

We set up separate JSON package for clear separation of concerns for backend/frontend.
However please not that both Frontend & Backend share the same domain.
We set up controllers, models & routes in Backend, adhering to best development practices
We chose to use a typical React project structures for the frontend using components & pages/views

# Technologies used:

Front:

- HTML & CSS
- webPack config
- Javascript
- React Library

Back:

- Javascript
- Nodes.js & Express.js

Database:

- mongoDB
- mongoose

# Changelog

-## [Unreleased] => [1.0.0] - YYYY-MM-DD
-### Added
-Feature A
-Feature B

-### Changed
-Updated Component x

-### Fixed
-Bug in Function Y

## Structure of the project:

Set up separate JSON package for backend/frontend for clear separation of concerns .
Both Frontend & backend share same domain.
Set up models & routes for articles in Backend, adhering to best development practices
Structured front using React components & views

## user registered to test login feature

Email: wilderhunt@exozent.com
Password: 1HeCeS6o

We deployed the front of this App only, since the connection to mongDB database was not made possible at the time, despite are numerous attempts. We even tried to create a script which we call “importData.js to inject manually our collection onto the Database, which were added successfully but still didn’t allow us to retrieve the dataset.

# MongoDb

Project Name: Science&AIHub
Access :

- Username: tatianaleclerc
- Password: irJ0wKZw30IF8r9P

Uri:

- mongodb+srv://tatianaleclerc:irJ0wKZw30IF8r9P@cluster0.0ztx6oz.mongodb.net/?retryWrites=true&w=majority //

// ===> Connecting with MongoDB for VS Code

1. Install MongoDB for VS Code.

- In VS Code, open "Extensions" in the left navigation and search for "MongoDB for VS Code." Select the extension and click install.

2. In VS Code, open the Command Palette.

- Click on "View" and open "Command Palette."
- Search "MongoDB: Connect" on the Command Palette & click on "Connect with Connection String."

3. Connect to the MongoDB deployment.

- Paste your connection string into the Command Palette.
- mongodb+srv://TatianaLeclerc:irJ0wKZw30IF8r9P@storymultiverse.zviyrpg.mongodb.net/
