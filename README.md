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

#### REST APIs

#### API General Notes

> API Root -  http://api.nationsauction.com/auth

##### User Auth API

<!-- User RESTful API Table -->
<div class="auth_rest_api">
  <table>

    <tbody>
      <tr>
        <th width="50px">Method</th>
        <th width="75px">URL</th>
        <th width="125px">Action</th>
        <th width="200px">JSON Object</th>
        <th>Ajax Syntax</th>
      </tr>

      <tr>
        <td>GET</td>
        <td>/User/GetAll</td>
        <td>Get all users</td>
        <td>
          {
            <br>
            'submitter': 'test'
            <br>
          }
        </td>
        <td>
          ```javascript
          $.ajax({
            url: 'http://api.nationsauction.com/auth/User/GetAll',
            type: 'POST',
            cache: 'false',
            contentType: 'application/json',
            data: testData,
            fail: (function (jqXHR, textStatus, errorThrown) {
                alert(JSON.stringify(jqXHR));
                alert(textStatus + ":" + errorThrown);
            }),
            success: (function (data) {
                TestSuccess(data, "basic get all test");
            })
          });

          function TestSuccess(data, testTitle) {
            console.log("TEST: " + testTitle);
            console.log("DATA: " + data);

            var newData = jQuery.parseJSON(data);

            console.log("newData: " + newData);
          }
          ```
        </td>
      </tr>

      <tr>
        <td>POST</td>
        <td>/User/Add</td>
        <td>Add user</td>
        <td>
          {
            <br>
            'submitter': 'submitter',
            <br>
            'username': 'username',
            <br>
            'password': 'password',
            <br>
            'activity': 'add'
            <br>
          }
        </td>
        <td>
          ```javascript
          function testAddUser(){
              var testData = JSON.stringify({
                  'submitter': "test",
                  'username': "testme@nowhere.com",
                  'password': "mypassword",
                  'activity': 'add'
              });

              $.ajax({
                  url: 'http://api.nationsauction.com/auth/User/Add',
                  type: 'POST',
                  cache: 'false',
                  contentType: 'application/json',
                  data: testData,
                  fail: (function (jqXHR, textStatus, errorThrown) {
                      alert(JSON.stringify(jqXHR));
                      alert(textStatus + ":" + errorThrown);
                  }),
                  success: (function (data) {
                      TestSuccess(data, testTitle)
                  })
              });
          }

          function TestSuccess(data, testTitle) {
              console.log("TEST: " + testTitle);
              console.log("DATA: " + data);

              var newData = jQuery.parseJSON(data);

              console.log("newData: " + newData);
          }
          ```
        </td>
      </tr>

      <tr>
        <td>POST</td>
        <td>/User/Update</td>
        <td>Update user</td>
        <td>
          {
            <br>
            'submitter': 'submitter',
            <br>
            'username': 'username',
            <br>
            'password': 'newPassword',
            <br>
            'activity': 'update'
            <br>
          }
        </td>
        <td>
          ```javascript
          function runTestUpdateUser(){
            var testTitle = "Auth API - /User/Update";

            var submitter = "test";
            var email = "testme@nowhere.com";
            var newPassword = "new password";

            var testData = JSON.stringify({
                'submitter': submitter,
                'username': email,
                'password': newPassword,
                'activity': 'update'
            });

            console.log("Test data: " + testData);

            console.log("BEGIN: Ajax call for /User/Update.");

            $.ajax({
                //url: 'http://api.nationsauction.com/auth/User/Update',
                url: '/User/Update',
                type: 'POST',
                cache: 'false',
                contentType: 'application/json',
                data: testData,
                fail: (function (jqXHR, textStatus, errorThrown) {
                    alert(JSON.stringify(jqXHR));
                    alert(textStatus + ":" + errorThrown);
                }),
                success: (function (data) {
                    TestSuccess(data, testTitle);
                })
            });

            console.log("END: Ajax call for /User/Update.");
          }

          function TestSuccess(data, testTitle) {
            console.log("TEST: " + testTitle);
            console.log("DATA: " + data);

            var newData = jQuery.parseJSON(data);

            console.log("newData: " + newData);
          }
          ```
        </td>
      </tr>

      <tr>
        <td>POST</td>
        <td>/User/Delete</td>
        <td>Add user</td>
        <td>
          {
            <br>
            'submitter': 'submitter',
            <br>
            'guid': '1DC2EC58-0A05-4D72-BAE8-44EDF87B6BD6'',
            <br>
          }
        </td>
        <td>
          ```javascript
          function runTestDeleteUser(){
              var testTitle = "Auth API - /User/Delete";

              var submitter = "test";
              var guid = '1DC2EC58-0A05-4D72-BAE8-44EDF87B6BD6';

              var testData = JSON.stringify({
                  'submitter': submitter,
                  'guid': guid
              });

              console.log("Test data: " + testData);

              console.log("BEGIN: Ajax call for /User/Delete.");

              $.ajax({
                  //url: 'http://api.nationsauction.com/auth/User/Delete',
                  url: '/User/Delete',
                  type: 'POST',
                  cache: 'false',
                  contentType: 'application/json',
                  data: testData,
                  fail: (function (jqXHR, textStatus, errorThrown) {
                      alert(JSON.stringify(jqXHR));
                      alert(textStatus + ":" + errorThrown);
                  }),
                  success: (function (data) {
                      TestSuccess(data, testTitle);
                  })
              });

              console.log("END: Ajax call for /User/Delete.");
          }

          function TestSuccess(data, testTitle) {
              console.log("TEST: " + testTitle);
              console.log("DATA: " + data);

              var newData = jQuery.parseJSON(data);

              console.log("newData: " + newData);
          }
          ```
        </td>
      </tr>

      <tr>
        <td>POST</td>
        <td>/User/Undelete</td>
        <td>Add user</td>
        <td>
          {
            <br>
            'submitter': 'submitter',
            <br>
            'guid': '1DC2EC58-0A05-4D72-BAE8-44EDF87B6BD6'',
            <br>
          }
        </td>
        <td>
          ```javascript
          function runTestUndeleteUser(){
              var testTitle = "Auth API - /User/Undelete";

              var submitter = "test";
              var guid = '1DC2EC58-0A05-4D72-BAE8-44EDF87B6BD6';

              var testData = JSON.stringify({
                  'submitter': submitter,
                  'guid': guid
              });

              console.log("Test data: " + testData);

              console.log("BEGIN: Ajax call for /User/Undelete.");

              $.ajax({
                  //url: 'http://api.nationsauction.com/auth/User/Undelete',
                  url: '/User/Undelete',
                  type: 'POST',
                  cache: 'false',
                  contentType: 'application/json',
                  data: testData,
                  fail: (function (jqXHR, textStatus, errorThrown) {
                      alert(JSON.stringify(jqXHR));
                      alert(textStatus + ":" + errorThrown);
                  }),
                  success: (function (data) {
                      TestSuccess(data, testTitle);
                  })
              });

              console.log("END: Ajax call for /User/Undelete.");
          }

          function TestSuccess(data, testTitle) {
              console.log("TEST: " + testTitle);
              console.log("DATA: " + data);

              var newData = jQuery.parseJSON(data);

              console.log("newData: " + newData);
          }
          ```
        </td>
      </tr>

      <tr>
        <td>POST</td>
        <td>/User/Authenticate</td>
        <td>Add user</td>
        <td>
          {
            <br>
            'submitter': 'submitter',
            <br>
            'username': 'username',
            <br>
            'password': 'password',
            <br>
            'activity': 'auth'
            <br>
          }
        </td>
        <td>
          ```javascript
          function runTestAuthenticateUser(){
              var testTitle = "Auth API - /User/Authenticate";

              var submitter = "test";
              var email = "testme@nowhere.com";
              var newPassword = "new password";

              var testData = JSON.stringify({
                  'submitter': submitter,
                  'username': email,
                  'password': newPassword,
                  'activity': 'auth'
              });

              console.log("Test data: " + testData);

              console.log("BEGIN: Ajax call for /User/Update.");

              $.ajax({
                  //url: 'http://api.nationsauction.com/auth/User/Authenticate',
                  url: '/User/Authenticate',
                  type: 'POST',
                  cache: 'false',
                  contentType: 'application/json',
                  data: testData,
                  fail: (function (jqXHR, textStatus, errorThrown) {
                      alert(JSON.stringify(jqXHR));
                      alert(textStatus + ":" + errorThrown);
                  }),
                  success: (function (data) {
                      TestSuccess(data, testTitle);
                  })
              });

              console.log("END: Ajax call for /User/Authenticate.");
          }

          function TestSuccess(data, testTitle) {
              console.log("TEST: " + testTitle);
              console.log("DATA: " + data);

              var newData = jQuery.parseJSON(data);

              console.log("newData: " + newData);
          }
          ```
        </td>
      </tr>

      <tr>
        <td>POST</td>
        <td>/User/Version</td>
        <td>Get version</td>
        <td>
          {
            <br>
            'submitter': 'test'
            <br>
          }
        </td>
        <td>
          ```javascript
          function runTestGetAPIVersion()
          {
              var testTitle = "Auth API - /User/Version";

              var submitter = "test";

              var testData = JSON.stringify({
                  'submitter': submitter
              });

              console.log("Test data: " + testData);

              console.log("BEGIN: Ajax call for /User/Version.");

              $.ajax({
                  //url: 'http://api.nationsauction.com/auth/User/Version',
                  url: '/User/Version',
                  type: 'POST',
                  cache: 'false',
                  contentType: 'application/json',
                  data: testData,
                  fail: (function (jqXHR, textStatus, errorThrown) {
                      alert(JSON.stringify(jqXHR));
                      alert(textStatus + ":" + errorThrown);
                  }),
                  success: (function (data) {
                      TestSuccess(data, testTitle);
                  })
              });

              console.log("END: Ajax call for /User/Version.");
              }

              function TestSuccess(data, testTitle) {
                  console.log("TEST: " + testTitle);
                  console.log("DATA: " + data);

                  var newData = jQuery.parseJSON(data);

                  console.log("newData: " + newData);

                  log("Test this => " + newData.message);
              }
          ```
        </td>
      </tr>
    </tbody>
  </table>
</div>
