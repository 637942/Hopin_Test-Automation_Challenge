Feature: Customer APP Testing

Scenario: Validations in the welcome screen
  Given I am in the Customer APP welcome page
  And I see "Please provide your name" in the instruction text
  When I click on submit button without input
  Then I should see the alert message "Please provide your name"
  When I enter the input name
  And I click on submit button
  Then I should see the Customer list page with same input name 

Scenario: Customer size field validation
  Given I am in the Customer list page
  Then I should see the customerlist table with customer data
  And I should see size = small for # of employees <=100 size = Medium for # employees >100 <=1000 and Big for # of employees >1000

  Scenario: Validations in the customer Details screen
  Given I am in the Customer list page
  When I click on customer name link
  Then I should see the customer details screen with the customer details
  When I click on Back to list button
  Then I should see the customer List Page
  When I click on customer name who doesn't have contact info
  Then I should see the error message "No contact info available"
  
      
  
  