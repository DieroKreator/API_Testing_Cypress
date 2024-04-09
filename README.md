Introduction:

API Testing for the url (petstore.swagger.io/v2). The purpose is to test CRUD (Create, Read, Update and Delete) process.
Testing will cover the API operations based on the petId. And assuming that the API is working correctly to be able to get connected.

Test Strategy:
Using Cypress as an API Testing framework I will create tests for some endpoints. 
No authentication tokens required.

Test Scenarios:
List of high-level scenarios to be automated, covering various endpoints and functionalities:
  - Add a new pet to the store
  - Search for pets by petId
  - Update an existing pet
  - Delete a pet
    
Test Case Design:
Preconditions and prerequisites: All endpoints are functional
Steps to execute the API test: 
  - sending HTTP requests (POST, GET, PUT, DELETE)
  - validating responses
    
Test Data Management:
Using JSON files

Test Execution:
Executing through Cypress.
Logging and reporting will be provided.

Test Reporting:
Detailed test results.
Metrics to be captured: API response times, pass/fail rates
