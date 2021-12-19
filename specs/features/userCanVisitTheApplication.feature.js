describe('User visits the application url', () => {
  it('is expecting to see a header', () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Address Book");
  });
});