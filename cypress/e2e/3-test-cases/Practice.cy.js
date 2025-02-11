describe("Tracalorie - Meal Tracking", () => {
    it.only("add item successfully", () => {
        cy.visit("https://practice.expandtesting.com/tracalorie");
      
        
        const array = [
          { name: "somtum", calories: 130 },
          { name: "pad thai", calories: 250 },
          { name: "green curry", calories: 200 },
          { name: "fried rice", calories: 300 },
          { name: "spring rolls", calories: 150 }
        ];
      
        let i;
        for (i = 0; i < array.length; i++) {
          const element = array[i];

      
          cy.get("#item-name").type(element.name);
          cy.get("#item-calories").type(element.calories);
      
          cy.get(".add-btn").click();
      
          cy.get(".collection").should("contain", element.name);
          cy.get(".collection").should("contain", element.calories);
        }
      });

  it("delete item successfully", () => {
    cy.visit("https://practice.expandtesting.com/tracalorie");

    cy.get("#item-name").type("Pad Thai");
    cy.get("#item-calories").type("400");
    cy.get(".add-btn").click();

    cy.get(".edit-item").click();
    cy.wait(1000);
    cy.get(".delete-btn").click();
    cy.get(".center-align").contains("Total Calories: 0");
  });

  it("Edit Calories successfully", () => {
    cy.visit("https://practice.expandtesting.com/tracalorie");

    cy.get("#item-name").type("Pad Thai");
    cy.get("#item-calories").type("400");
    cy.get(".add-btn").click();
    cy.get(".edit-item").click();
    cy.wait(1000);
    cy.get("#item-name").clear()
    cy.get("#item-name").type("Pad Thai Gung");
    cy.get("#item-calories").clear()
    cy.get("#item-calories").type("1500");
    cy.get('.update-btn').click();
    cy.wait(1000);


  });
});
