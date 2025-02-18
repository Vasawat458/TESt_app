describe("Test BMI", () => {
  it("add item successfully", () => {
    cy.visit("https://practice.expandtesting.com/bmi");

    cy.get("#gender").select("Female");

    cy.get("#weight").clear();
    cy.get("#weight").type("70");
    cy.get("#height").clear();
    cy.get("#height").type("175");

    cy.get(".btn-primary").click();

    cy.get("#divResult").should("be.visible");
  });

  it("chang Gender", () => {
    cy.visit("https://practice.expandtesting.com/bmi");

    cy.get("#gender").select("Female");
    cy.get("#gender").select("Male");
    cy.get("#gender").select("Female");
    cy.get("#gender").select("Male");
  });
  it("should show an error message when weight and height are not provided", () => {
    cy.visit("https://practice.expandtesting.com/bmi");

    cy.get("#gender").select("Female");

    cy.get("#weight").clear();
    cy.get("#height").clear();

    cy.get(".btn-primary").click();

    cy.get(".alert-box").should("be.visible");
    cy.get(".alert-box").should(
      "contain",
      "Please provide all the necessary information!×"
    );
  });

  it("clear", () => {
    cy.visit("https://practice.expandtesting.com/bmi");

    cy.get("#gender").select("Female");

    cy.get("#weight").clear();
    cy.get("#weight").type("70");
    cy.get("#height").clear();
    cy.get("#height").type("175");

    cy.get(".btn-primary").click();

    cy.get("#divResult").should("be.visible");
    cy.get(".btn-secondary").click();
    cy.get("#divResult").should("not.be.visible");
  });
});

it("should show an error when weight or height is zero", () => {
  cy.visit("https://practice.expandtesting.com/bmi");

  cy.get("#gender").select("Female");

  cy.get("#weight").clear();
  cy.get("#weight").type("0");
  cy.get("#height").clear();
  cy.get("#height").type("175");

  cy.get(".btn-primary").click();
  cy.get(".alert-box").should("be.visible");
  cy.get(".alert-box").should(
    "contain",
    "Please provide all the necessary information!×"
  );
});
