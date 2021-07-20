# AuDS Lite

🌐 https://auds.surge.sh/

A simpler, vanilla AuDS. 

* Platform agnostic (HTML, CSS, JS) system.
* Useful as a base for a UI Framework library. 
* Design tokens can be used by external consumers.

## Setup

Install the correct Node:

    nvm use

Install: 

    yarn 
    
Run dev environment: 

    yarn storybook
    
Build assets:

    yarn build

## Exports 

### CSS / JS

| Asset name | Description |
| - | - |
| auds.tokens.css | Design tokens |
| auds.css | Full compiled CSS source |
| auds.js | Full compiled JS source |

### HTML

Can be copied from html templates, such as ./src/components/button/button-default.html.

## Tests 

### Visual diff testing 

View test cases: 
https://www.chromatic.com/build?appId=60f5de224a7e3f003ba711e0&number=1

Look at state of main branch: 
http://main--60f5de224a7e3f003ba711e0.chromatic.com/

We might need to configure this: https://www.chromatic.com/docs/github-actions.
