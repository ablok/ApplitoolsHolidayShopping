# Applitools Holiday Shopping Hackathon

This is [my](#Author) submission for the [Applitools Holiday Shopping Hackathon](https://applitools.com/hackathon-v20-3-instructions/).

## How it works

This solution uses the [WebdriverIO](https://webdriver.io/) v5 testrunner. I used [TypeScript](https://www.typescriptlang.org/) to write the code and I also set up some static analysis tools like [eslint](https://eslint.org/) and [prettier](https://prettier.io/).
Test execution is performed locally and all tests run headless and in parallel. This makes for quick test execution.

## Remarks/observations

- In part 2 we are required to submit the URL for the Root Cause Analysis (RCA) view of the Applitools Dashboard for failed Test 3. However, there are multiple bugs in that test which all have different root causes and thus RCA views. I have submitted the link to the most obvious one.
- I decided to put each test in its own file. This might make it somewhat less readable but the test execution becomes parallel instead of serial. This reduces execution time.
- In test 2, instead of clicking on a grid item, I decided to open the link to the details page directly. This also reduces execution time since you only load 1 page instead of 2. Keep in mind that you do miss the functional action of clicking on an item.
- Type system information for the libraries used is not always available or 100% correct.

## Running the tests

### Prerequisites

Make sure you have the following installed:

- [NodeJS](https://nodejs.org/) version >= 10 (Created on 14.15.1)
- Make sure [Chrome](https://www.google.com/chrome/) browser is installed and updated to the latest version.

### How to run

- Clone this repository.
- Go to the `ApplitoolsHolidayShopping` directory.
- Run `npm install` and wait until the installation is finished.
- Set the `APPLITOOLS_API_KEY` environment variable with your key.
- To run the tests, execute one of the following commands:
  - `npm run test:part1` to run tests against v1
  - `npm run test:part2` to run tests against dev
  - `npm run test:part3` to run tests against v2
- Logging can be found in the `./logs` folder.

### Driver versions

A new version of the Chrome browser could have been release that is incompatible with the chromedriver defined in this project. If that happens, run the following command to update the chromedriver: `npm install chromedriver@latest`

## My results

My submissions can be found here:

- [Part 1](https://eyes.applitools.com/app/test-results/00000251795396422188?accountId=OhimNZedaEadb0RBYhFcfQ~~&display=gallery&top=00000251795395381872%283%29)
- [Part 2](https://eyes.applitools.com/app/test-results/00000251795396354128/00000251795396354018/steps/1/edit?accountId=OhimNZedaEadb0RBYhFcfQ~~&diff=eyJkaWZmIjp7InRvcCI6ODE4Ljg4NDYxNTM4NDYxNTQsImxlZnQiOjE1LCJ3aWR0aCI6MzcsImhlaWdodCI6MTkuMjMwNzY5MjMwNzY5MjN9LCJ2aWV3TW9kZSI6ImFjdHVhbCJ9&mode=step-editor)
- [Part 3](https://eyes.applitools.com/app/test-results/00000251795395381872?accountId=OhimNZedaEadb0RBYhFcfQ~~&display=gallery&top=00000251795395381872%283%29)

## Author

Arjan Blok - [Github](https://github.com/ablok)
