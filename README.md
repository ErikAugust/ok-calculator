# Trip Calculator
## An Angular and Node-based application for calculating road trip expenses

*Note: This is for a coding challenge.*

## Challenge
*Build a basic page/app that calculates the expenses who like to go on road trips.*

*In it, you will need to submit data to an endpoint that you will build, render to the page using all required information, and include a submit button to display the end calculation.*

*The app does not need to conform to any existing brand styles.*

## Challenge Requirements
- The page should be built out using Angular 7 or above
- The page should be fully responsive and mobile friendly
- The page should contain the following fields (per student):
    - Name
    - Expenses
- The page should have a Calculate button
- The page should show how much each student needs to pay out to any other students
- The endpoint should be a NodeJS Web API using a recent version of NodeJS and following RESTful principles
- This code should be saved 

## Platform Requirements
NodeJS version 7.6+ (and corresponding npm version) is required. Version 12+ is recommended.

## Installation
Run `npm run install-all` in the project root.

This script will kick off `npm install` in both the Express server (`api`) and the Angular application (`web`).

## Quick Start
Run `npm run start` from the project root. This script will start both the Express server, and the Angular application.

## Running Tests
Run `npm test` from the project root. This script will run all tests - both server tests with Mocha, and front-end using Karma.

Run E2E tests with the `npm run e2e` command from project root. This will run the browser E2E via Protractor from the Angular project.

## Technologies Used
* NodeJS 12
* Express
* Angular 10

## API Reference

### Calculate Payouts (`POST /payouts`)

**Endpoint URL**
`http://localhost:3000/payouts`

**JSON Body Parameters**

`expenses` - array : Specifies the expenses you want to calculate a payout on.

`expenses.name` - string : The name of the person who incurred the expense.

`expenses.amount` - number : The amount of the expense incurred.

**Example Request**
```shell script
curl --location --request POST 'localhost:3000/payouts' \
--header 'Content-Type: application/json' \
--data-raw '{
	"expenses": [
		{ "name": "Adriana", "amount": 5.75 },
		{ "name": "Adriana", "amount": 5.75 },
		{ "name": "Bao", "amount": 12 }
	]
}'
```

**Example Response**
```json
{
    "total": 23.5,
    "equalShare": 11.75,
    "payouts": [
        {
            "owes": "Adriana",
            "owed": "Bao",
            "amount": 0.25
        }
    ]
}
```
