describe('Create and Edit Shopping List', function () {

    before(function(){
        cy.SignIn()
    })

    it('Create List', function () {
        cy.get('.createButton > ._2abd6af1').should('be.visible').click()
        cy.get('[type="text"]').type('Rays_List')
        cy.get('input[type="submit"][value = "Submit"]').click()
 
    })

    it('Edit List', function () {
        cy.title('eq', 'Dat Shopping List - Rays List')
        cy.get('#addItem > form:nth-child(1) > input:nth-child(1)', {timeout: 30000}).type('Milk')
        cy.get('#addItem.addGroceryItem form input._2abd6af1', {timeout:10000}).click()
        cy.get('ul > :nth-child(1)').click()
        cy.get('ul > :nth-child(2)').click()
        cy.get('ul > :nth-child(5)').click()
          
    })

    after(() => {
        cy.wait(5000)
        cy.get('a.delete').click()
    })
 })