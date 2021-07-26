Project 'test-dat-shopping-list' tests the application 'Dat Shopping List'

Steps for testing:-
-------------------
-------------------

System under test:
------------------
Install Node.js and npm.
Install docker.
Run command 'sudo docker run -p 5000:5000 jimpick/dat-shopping-list'.
Open browser and type the Url 'http://localhost:5000/'.

Cypress Project:
----------------
Clone this project.
Open the project in an IDE like Visual Studio Code or pycharm.
Open a terminal.
Run command 'npm init -y'.
Run command 'npm install cypress'.


Executing the tests through the IDE:
------------------------------------
Run command 'npx cypress open'.
The IDE opens displaying all the .spec.js files.
Click on the test file to be executed.


Executing the tests through the CLI:
------------------------------------

Headless (Electron)
-------------------
npx cypress run

Headed (Firefox)
----------------
npx cypress run --browser firefox --headed








