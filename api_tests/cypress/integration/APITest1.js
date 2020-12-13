/// <reference types="Cypress" />
describe("API Test for Customer APP", () => {
  beforeEach(() =>
    cy.fixture("payload.json").then((payloadjson) => {
      cy.request({
        method: "POST",
        url: "/",
        body: payloadjson,
      }).as("customerlist");
    })
  );

  it("API Test - validate the headers", () => {
    cy.get("@customerlist")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
  });

  it("API Test - validate the status code", () => {
    cy.get("@customerlist").its("status").should("equal", 200);
  });

  it("API Test -validate the objects in the response", () => {
    cy.get("@customerlist")
      .its("body.customers")
      .each((value) =>
        expect(value).to.have.keys(
          "id",
          "name",
          "employees",
          "contactInfo",
          "size"
        )
      );
  });

  it("API Test - should return the correct number of customers in the response", () => {
    cy.get("@customerlist").its("body.customers").should("have.length", 6);
  });

  it("API Test- validate the user name", () => {
    cy.fixture("data.json").then((datajson) => {
      cy.get("@customerlist").its("body").should("include", datajson);
    });
  });

  it("API Test -validate the size object in the response", () => {
    cy.get("@customerlist")
      .its("body.customers")
      .each(($e1, index, $list) => {
        const numemp = parseFloat($e1.employees);
        const size1 = $e1.size;
        if (numemp > 0 && numemp <= 100) {
          expect(size1).to.be.equal("Small");
        } else if (numemp > 100 && numemp <= 1000) {
          expect(size1).to.be.equal("Medium");
        } else {
          expect(size1).to.be.equal("Big");
        }
      });
  });
});
