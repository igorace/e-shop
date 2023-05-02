describe("My cart", () => {
  it("checks My Cart Page", () => {
    cy.visit("http://localhost:3000/cart");
    cy.title("My cart");
    cy.contains("My cart");
    cy.contains("Your cart is empty!");
    cy.contains("Go back").click();

    //Add to cart one item
    cy.get('[data-test="addToCart-62863b689c1bcb9946a0c8ad"]').click();
    cy.contains("My cart (items: 1)").should("be.visible").click();

    cy.contains("Items: 1").should("be.visible");
    cy.contains("Total amount: 1").should("be.visible");
    cy.contains("Total price: $3").should("be.visible");
  });
});
