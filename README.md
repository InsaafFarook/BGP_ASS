# BGP-assignment
Automation assignment using Cypress

## Table of Contents
1. [Introduction](#Introduction)
2. [Structure](#Structure)
3. [Reportins](#Reporting)
4. [Execution](#TestExecution)

# Introduction
This repository contains test scenarios related to **User Story 1 and 2** of Business Grants Portal which are automated using [Cypress](https://www.cypress.io).

| Item | Description | 
| --- |---|
| **Test Type** | Component and End-to-End Tests |
| **Technologies** | ![Cypress](https://img.shields.io/badge/cypress-^6.8.0-red.svg?style=plastic&logo=cypress) |
| **Dependencies** | cypress-mochawesome-reporter, cypress-plugin-tab, cypress-xpath |
| | |

# Structure
There are 5 main folders inside cypress folder.

## fixtures
All test data required for the tests are placed here.

## e2d
All the test files are placed here.

## lib
There are 2 sub folders under lib.
  - functions : Application specific page elements and methods to be placed here. These methods will be used in the test layer.
  - helpers : Application domain specific helper methods to be placed here. Such as generating session cookie, retreive data from external apis and etc.
  - utils : Utlity functions like currency conversions, date/time conversions can be placed here.

## plugins
Plugins that needed to be placed here

## support
Custom cypress commands to be placed here.

cypress-mochawesome-reporter(https://www.npmjs.com/package/cypress-mochawesome-reporter) is used for reporting. It is required to install the dependencies mentioned in Inroduction.

Upon test execution completion html report will be generated in cypress/report folder.

# Execution
Tests can be executed with below command.
```
$ npx cypress run --e2e
```

PLEASE NOTE:

I was able to automated only User Story 1 and 2, due to highwork load in the current project assignment.

Also there some issues in handling multiple origins in the framework which will require some time as I haven't worked on cypress framework for more than a year. The tests will be executed successfully if the test is executed by through the cypress window.

Command to Open Cypress window
```
$ npx cypress open
```