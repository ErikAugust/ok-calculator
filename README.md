# OK Calculator
## An Angular and Node-based application for calculating road trip expenses

*Note: This is for a coding challenge.*

###Challenge
*Build a basic page/app that calculates the expenses who like to go on road trips.*

*In it, you will need to submit data to an endpoint that you will build, render to the page using all required information, and include a submit button to display the end calculation.*

*The app does not need to conform to any existing brand styles.*

## Guidelines

TODO

## Requirements
Node version 12+ (and corresponding npm version) is required.

## Installation
Run `npm run install-all` in the project root. This script will kick off `npm install` in both the Express server (`api`) and the Angular application (`web`).

## Quick Start
Run `npm run start` from the project root. This script will start both the Express server, and the Angular application.

## Technologies Used
* Node.js
* Express
* Angular

## API Reference

### Calculate Payouts (`POST /payouts`)

**Endpoint URL**
`http://localhost:3000/payouts`

**JSON Body Parameters**
`expenses` : array : Specifies the expenses you want to calculate a payout on.
`expenses.name` : string : The name of the person who incurred the expense.
`expenses.amount` : number : The amount of the expense incurred.