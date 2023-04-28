# Project Documentation

## MunroGo

A mountain-climbing app using FastAPI and React technologies.

Designed and created by:

- Warren Hill
- Paula Mejia
- Brian Rabern
- Elijah Ramos
- Diganta Roy

Your challenge, should you choose to accept it, is to conquer the [Munros](https://en.wikipedia.org/wiki/Munro) in Scotland, a list of Scottish mountains which are named after Sir Hugh T. Munro, who surveyed and catalogued them in 1891. MunroGo is a comprehensive guide to all of Scotland's 282 Munros. Gotta bag 'em all!

## Technology Stack

- Programming languages: Python 3, JavaScript ES+, HTML5, CSS
- Front-End technologies: React, React Hooks, Redux Toolkit, Tailwind, DaisyUI
- Back-End technologies: MongoDB, FastAPI
- Development tools: Docker, Git
- API Integrations: Google Maps API, OpenWeather API, Wikipedia API, the Database of British and Irish Hills

## Design
- [Wireframe](https://gitlab.com/elijahram/munro-go/-/blob/main/docs/Wireframe.png)
- [API Endpoints](https://gitlab.com/elijahram/munro-go/-/blob/main/docs/api-endpoints.md)

## Intended market

Munro bagging is a popular pastime in Scotland where walking enthusiasts challenge themselves to climb as many of the peaks as they can - over 6,000 people, called 'compleatists' (or Munroists) have climbed them all so far. We are targeting adventure seekers that wish to plan, review and track Munro climbs.

## Application functionality

- Website requires users to sign up to have access to its functionality.
- Users will have access to their dashboard, which displays:
  - Their privately logged climbs
  - Their statistics: number of Munros climbed, etc.
  - Their publicly written reviews for Munros
  - A list of climbed Munros by the user
  - A map, integrated through the Google Maps API, which has different colored markers depending on whether users have climbed a Munro or not. Unclimbed Munros will be displayed with a red marker and climbed Munros will be displayed with a green marker. Each marker redirects the detail page for each specific Munro when clicked.
- From the dashboard, users can also see a page which includes of all their climbs, and another page which displays all their reviews.
- Each Munro has its own detail page which includes:
  - A picture of the Munro
  - Its height
  - A summary description
  - A map with the marker of the Munro's location, integrated through the Google Maps API
  - The region the Munro is located
  - Its latitude and longitude coordinates
  - Buttons to add a climb or a review for the specific Munro - both of which display a modal when clicked
  - Public reviews by users
  - The current weather conditions at the Munro - implemented through the OpenWeather API
- Users will be able to add a climb from their dashboard, selecting a Munro from a dropdown menu.
- A list of all the Munros, which includes the region, height in feet and meters, and which allows the user to select whether a Munro has been climbed and displays a modal to add a climb. Users can search this list using the search bar - filtering by name, region, and height. Users may also navigate to individual Munro detail pages by clicking the Munro's name on the list.

## Future directions and functionality

Looking to the future, possible features that we would like to implement are:

- Real-time user messaging system
- Including 7 day weather forecast on Munros detail pages
- Including all the British Hills, the Donalds
- Ordnance survey data API to create more detailed maps
- Allow users to publicly post a climb trail that others can follow along

## Project Initialization

To fully enjoy this application on your local machine, please be sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run docker volume create mongo-data3
4. Run docker compose build
5. Run docker compose up
6. Run docker exec -it munro-go-fastapi-1 /bin/bash
7. Run python seed_db.py
8. Start bagging those Munros!
