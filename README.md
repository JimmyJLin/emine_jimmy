## Nations Auction

#### Technologies
  * Front-end Frameworks: Angular
  * Back-end Frameworks: NodeJS + Express


#### Development Installation

###### Pre-requisites
  * NodeJS - please ensure [NodeJS](https://nodejs.org/en/) is installed on your system
  ```
  //navigate to root directory
  cd na.leanweb

  // navigate to server folder  
  cd server

  // npm install all app dependencies
  npm install

  // run the following command inside server folder
  nodemon index.js

  // default port localhost:8082

  // In the web browser, to go localhost:8082
  ```

###### Overall Directory Structure

```
na.leanweb/
  |-  public/
  |   |-  angular-app/
  |   |   |-  dealer/
  |   |   |   |-  dealer_detail/
  |   |   |   |-  dealer_search/
  |   |   |   |-  dealer_sigin/
  |   |   |   |-  dealer_signup/
  |   |   |   |-  addVehiclesByVIN.html
  |   |   |   |-  profileLanding.html
  |   |   |   |-  public.controller.js
  |   |   |   |-  publicProvider.js
  |   |   |-  home/
  |   |   |-  main/
  |   |   |-  partials/
  |   |   |-  profile/
  |   |   |-  tools/
  |   |   |-  user/
  |   |   |-  vehicle/
  |   |   |   |-  vehicle_add/
  |   |   |   |-  vehicle_search/
  |   |   |   |-  vehicle_show_all/
  |   |   |   |-  vehicle_show_one/
  |   |   |-  app.js
  |   |-  css/
  |   |-  js/
  |   |-  library/
  |   |-  src/
  |   |   |-  fonts/
  |   |   |-  img/
  |   |-  index.html
  |-  server/
  |   |-  node_modules
  |   |-  index.js
  |   |-  npm-debug.log
  |   |-  package.json
  |-  static/
  |-  .gitignore
  |-  README.md

```
