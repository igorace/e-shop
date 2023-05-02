describe("Products", () => {
  it("checks Products Page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="product-item"]').should("have.length.above", 5);
    cy.wait(50);
    //Add to cart one item
    cy.get('[data-test="addToCart-62863b689c1bcb9946a0c8ad"]').click();
    cy.contains("My cart (items: 1)").should("be.visible");
    // Add second item
    cy.get('[data-test="addToCart-2"]').click();
    cy.contains("My cart (items: 2)").should("be.visible");
    // Add again first item
    //Add to cart one item, items should still be 2
    cy.get('[data-test="addToCart-62863b689c1bcb9946a0c8ad"]').click();
    cy.contains("My cart (items: 2)").should("be.visible");
  });
});
