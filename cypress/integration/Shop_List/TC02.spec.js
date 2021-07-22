describe('Create and Edit Shopping List', function () {
    it('Create List', function () {
        cy.visit('http://localhost:5000')
        cy.title('eq', 'Dat Shopping List')
        cy.location('protocol').should('eq', 'http:')
        cy.get('.createButton > ._2abd6af1').should('be.visible').click()
        cy.get('[type="text"]').type('Rays_List')
        cy.get('input[type="submit"][value = "Submit"]').click()
 
    })

 
})