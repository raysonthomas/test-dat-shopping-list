Cypress.Commands.add("SignIn", () => {
    cy.clearCookies()
    cy.visit('http://localhost:5000')
    cy.title('eq', 'Dat Shopping List')
    cy.location('protocol').should('eq', 'http:')

})