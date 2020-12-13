const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am in the Customer APP welcome page", () => {
  PageObjects.getURL();
  PageObjects.getHeader().should("contain", data.header);
});
And("I see {string} in the instruction text", (instructiontext) => {
  PageObjects.getinstructionText().should("contain", instructiontext);
});
When("I click on submit button without input", () => {
  PageObjects.getSubmitBtn().click();
});
Then("I should see the alert message {string}", (alertmsg) => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal(alertmsg);
    cy.get("button").contains("OK").click();
  });
});

When("I enter the input name", () => {
  PageObjects.setUserName().type(data.name);
});

And("I click on submit button", () => {
  PageObjects.getSubmitBtn().click();
});

Then("I should see the Customer list page with same input name", () => {
  PageObjects.getuserName().should("contain", data.name);
});
