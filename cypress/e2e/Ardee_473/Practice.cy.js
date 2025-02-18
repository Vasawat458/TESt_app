describe("Tracalorie - Meal Tracking", () => {
    it("add item successfully", () => {
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
          const fhoon = array[i];

      
          cy.get("#item-name").type(fhoon.name);
          cy.get("#item-calories").type(fhoon.calories);
      
          cy.get(".add-btn").click();
      
          cy.get(".collection").should("contain", fhoon.name);
          cy.get(".collection").should("contain", fhoon.calories);
        }
        cy.get('.total-calories').should("have.text", 1030);
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

  it("only input meal and calories", () => {
    cy.visit("https://practice.expandtesting.com/tracalorie");

    cy.get('#item-name').type("egg")
    cy.get(".add-btn").click();
    cy.get('.total-calories').should('not.have.text', 'egg');
    cy.get('#item-name').clear()

    cy.get('#item-calories').type(200)
    cy.get(".add-btn").click();
    cy.get('.total-calories').should('not.have.text', 200);
    cy.get('#item-calories').clear()
  });


  it("F5 to delete", () => {
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
      const fhoon = array[i];

  
      cy.get("#item-name").type(fhoon.name);
      cy.get("#item-calories").type(fhoon.calories);
  
      cy.get(".add-btn").click();
  
      cy.get(".collection").should("contain", fhoon.name);
      cy.get(".collection").should("contain", fhoon.calories);
    }
    cy.reload()
    cy.get('.center-align').should("have.text","Total Calories: 1030");
  });



  it("iphone-6", () => {
    cy.visit("https://practice.expandtesting.com/tracalorie");
    cy.viewport('iphone-6')
  
  });

  it.only("CAN'T INPUT TEXT IN CAL", () => {
    cy.visit("https://practice.expandtesting.com/tracalorie");
    cy.get("#item-name").type("Pad Thai");
    cy.get("#item-calories").type("Pad Thai");
  
  });

});
