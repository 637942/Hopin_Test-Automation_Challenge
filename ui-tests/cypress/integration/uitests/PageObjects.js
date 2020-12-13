class PageObjects {
  static getURL() {
    cy.visit("/");
  }

  static getHeader() {
    return cy.get("#root").find("div").find("h1");
  }

  static getinstructionText() {
    return cy.get("#root").find("div").find("div").find("div").find("p").eq(0);
  }

  static setUserName() {
    return cy.get("#name");
  }

  static getSubmitBtn() {
    return cy.get(
      "#root > div > div > div > p:nth-child(2) > input[type=button]:nth-child(2)"
    );
  }

  static getuserName() {
    return cy.get("#root > div > div > div > p > b:nth-child(1)");
  }

  static getTableData() {
    return cy.get("table > tbody > tr > td:nth-child(3)");
  }

  static getTableHeader() {
    return cy.get("table > thead > tr > th:nth-child(1)");
  }

  static getCustomerName() {
    return cy.get("table > tbody > tr > td:nth-child(1) > a");
  }

  static getCustname() {
    return cy.get("#root > div > div > div > div > p:nth-child(2)");
  }

  static backToList() {
    return cy.get("#root > div > div > div > div > input[type=button]");
  }

  static getContact() {
    return cy.get("#root > div > div > div > div > p:nth-child(5)");
  }

  static getCustDetails() {
    return cy.get("#root > div > div > div > div > p:nth-child(1) > b");
  }
}

export default PageObjects;
