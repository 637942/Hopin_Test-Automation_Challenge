const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am in the Customer list page", () => {
  PageObjects.getURL();
  PageObjects.setUserName().type(data.name);
  PageObjects.getSubmitBtn().click();
  PageObjects.getHeader().should("contain", data.header);
});
When("I click on customer name link", () => {
  PageObjects.getCustomerName().eq(0).click();
});
Then(
  "I should see the customer details screen with the customer details",
  () => {
    PageObjects.getCustDetails().should("contain", data.cdtext);
  }
);
When("I click on Back to list button", () => {
  PageObjects.backToList().click();
});
Then("I should see the customer List Page", () => {
  PageObjects.getTableHeader().contains("Name");
  PageObjects.getTableHeader().next().contains("# of Employees");
  PageObjects.getTableHeader().siblings().contains("Size");
});
When("I click on customer name who doesn't have contact info", () => {
  PageObjects.getCustomerName().eq(3).click();
});
Then("I should see the error message {string}", (errormsg) => {
  PageObjects.getContact().should("contain", errormsg);
});
