# Voute - Vue Voting Application

## Description
- This repository contains both the Front-End and Back-End files for a Vue application which uses Axios to make requests to a Restful API which, in turn, makes calls to a PostgreSQL database, by way of the pg-promise library.  
- Voute is not a misspelling, it's a portmanteau of Vue and Vote, just to clear that up!  
- I had a lot of fun and learned a ton while building this application, so I hope that you can get some value out of reading through its contents! Thank you so much for checking it out!

## Install

### Dependencies
- Node 7+
- Connection to a PostGres database

### Installation
- After cloning the repo, you'll want to run yarn install in both the /client and /server directories, respectively.
- From there, you'll need to connect to your database and set up other environment variables on your local .bash_profile or .zshenv configuration file.
- ENV Variables that you'll need to have: PG_CONNECTION_URI, VOTE_BE_PORT, VOTE_FE_PORT, and VOTE_API_URL.
- Once you have all of that set up, it should be as simple as opening two terminal windows; for the /client and /server respectively and then cding into them and running $yarn start !  
  
#### Thank you very much for taking the time to read this over! Have a great day!


## Contribute

PRs accepted.

## License

