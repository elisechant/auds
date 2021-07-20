## System

Install the correct Node:

    nvm use
    
Install yarn: 

    npm i -g yarn

## Setup

Install: 

    yarn 
    
Run dev environment: 

    yarn storybook
    
Build assets:

    yarn build

## Pull requests 

Send a Changeset with Pull Requests to bump the package version:
    
    yarn feature

## Tests 

### Visual diff testing 

View test cases: 
https://www.chromatic.com/build?appId=60f5de224a7e3f003ba711e0&number=1

Look at state of main branch: 
http://main--60f5de224a7e3f003ba711e0.chromatic.com/

We might need to configure this: https://www.chromatic.com/docs/github-actions.
