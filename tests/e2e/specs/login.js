describe("Test login page", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });
  it("Visits login page", () => {
    cy.visit("/");
    cy.contains("h1", "Login");
  });
  it("Test reset button", () => {
    cy.get('[data-test="email"]').type("Hello world!");
    cy.get('[data-test="password"]').type("12345");
    cy.get('[data-test="reset"]').click();
    cy.get('[data-test="email"]').should("be.empty");
    cy.get('[data-test="password"]').should("be.empty");
  });
  it("Test validation", function () {
    cy.get('[data-test="email"').type("He");
    cy.get('[data-test="email').blur();
    cy.get(".el-form-item__error").should("be.visible");
  });
  it("Test submit form", function () {
    cy.get('[data-test="reset"]').click();
    cy.get('[data-test="email"').type("test@gmail.com");
    cy.get('[data-test="password"').type("12345");
    cy.get('[data-test="submit"]').click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
