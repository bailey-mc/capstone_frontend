# 'Art Gallery' (capstone frontend)
 Art gallery is a React app built with React Router, meant to be used in conjunction with a .NET web api backend (my repo capston_backend holds this web api). It is a CRUD app based on the popular website, Museum of Bad Art. Here, you can submit the worst art you come across and sort it into such categories as Awful Animals or Poor Traits.

## Continuing Goals
I'd like to incorporate user auth for admins, so that only admins may edit or delete art postings

## User Stories
 - As a user, I want to open the site to a page with clear links to navigate the pages, and a featured image of bad art.
 - As a user, I want to be able to peruse all of the art on the site, and see more details when i click on a specific piece.
 - As a user, I want to be able to browse through the art by collection.
 - As a user, I want to be able to submit new awful art.
 - As an admin, I want to be able to edit art pieces that have been submitted.
 - As an admin, I want to be able to delete art pieces that have been submitted.

## Tech Used
- React
- React Router
- React Router DOM
- Node.js
- Axios
- React Bootstrap

## Installation Instructions
- clone capstone_frontend repo onto your local machine
    - cd into art-store
    $ npm i

- clone capstone_backend repo onto your local machine
    -cd into ArtStoreApi
    - dotnet build
    - dotnet run
    - If you'd like to view it on your local machine, navigate to http://localhost:5245/api/art

