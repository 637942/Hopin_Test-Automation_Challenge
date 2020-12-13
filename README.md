# Hopin_Test-Automation_Challenge #

Hopin_Test-Automation_Challenge for Customer APP.

## TASK 1 ##

Screenshot of the customer list page with username and date after environmental set up has been added into the root.

## TASK 2 ##

Test Plan with Test steps and results has been manually created and executed the tests and updated the results into it.

## api-tests (TASK 3) ##

API Testing for Customer APP - Automation Test scripts has been created using cypress.

## PRE-REQUISITES ##

The only pre-requisite to run the scripts is to have npm and Node.js installed in your machine. For instructions on how to install, go to https://nodejs.org/en/

## To Run Scripts ##

After clonning the repo.

Open a terminal, go to the root of this repo and

```
cd api-tests
npm install cypress --save-dev  
npm run cy:open  // To open the cypress
npm run cy:run   // To run the scripts in headless mode - electron browser
npm run cy:headrun  // To run the scripts headed electron browser
npm run cy:chromerun  //To run the scripts in chrome browser

```

## ui-tests (TASK 4) ##

UI Testing for Customer APP - Automation Test scripts has been created using cypress with BDD framework and Page Objects

## PRE-REQUISITES ##

The only pre-requisite to run the scripts is to have npm and Node.js installed in your machine. For instructions on how to install, go to https://nodejs.org/en/

## To Run Scripts ##

After clonning the repo.

Open a terminal, go to the root of this repo and

```
cd api-tests
npm install cypress --save-dev  
npm run cy:open  // To open the cypress
npm run cy:run   // To run the scripts in headless mode - electron browser
npm run cy:headrun  // To run the scripts headed electron browser
npm run cy:chromerun  //To run the scripts in chrome browser
npm run cy:dashboard // To run the scripts and get the cypress dashboard for test reports

```
