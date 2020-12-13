const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am in the Customer list page", () => {
  PageObjects.getURL();
  PageObjects.setUserName().type(data.name);
  PageObjects.getSubmitBtn().click();
  PageObjects.getHeader().should("contain", data.header);
});
Then("I should see the customerlist table with customer data", () => {
  PageObjects.getTableHeader().contains("Name");
  PageObjects.getTableHeader().next().contains("# of Employees");
  PageObjects.getTableHeader().siblings().contains("Size");
});
And(
  "I should see size = small for # of employees <=100 size = Medium for # employees >100 <=1000 and Big for # of employees >1000",
  () => {
    PageObjects.getTableData().each(($e1, index, $list) => {
      const size = $e1.text();
      if (size.includes("Small")) {
        PageObjects.getTableData()
          .eq(index)
          .prev()
          .then(function (employees) {
            const numemp = parseFloat(employees.text());
            expect(numemp).to.be.gt(0).and.be.lte(100);
          });
      } else if (size.includes("Medium")) {
        PageObjects.getTableData()
          .eq(index)
          .prev()
          .then(function (employees) {
            const numemp = parseFloat(employees.text());
            expect(numemp).to.be.gt(100).and.be.lte(1000);
          });
      } else if (size.includes("Big")) {
        // expect(size).to.eq('Big');
        PageObjects.getTableData()
          .eq(index)
          .prev()
          .then(function (employees) {
            const numemp = parseFloat(employees.text());
            expect(numemp).to.be.gt(1000);
          });
      }
    });
  }
);
