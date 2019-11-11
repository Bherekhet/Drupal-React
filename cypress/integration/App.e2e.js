describe('App E2E', () => {
    it('should have an anchor tag', () => {
      cy.visit('/');
      cy.get('nav a:first')
        .should('have.text', 'Recipe Magazine');
    });
  });