# AuDS

## Set up

Use the correct node version:

    nvm use 
    
Install:

    npm install
    npm run bootstrap
    
Build: 

    npm run build 
    
Dev: 

    cd packages/body
    npm run watch

## Tests 

### Visual regression tests

    npm run build
    npm run serve:test
    npm run test:integration

Update visual tests: 

    npm run test:integration:update
