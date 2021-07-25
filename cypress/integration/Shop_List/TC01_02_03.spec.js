describe('Login, Create and Edit Shopping List', function () {

    // Sign in Operation (SignIn() Function in support/commands.js)
    before(function(){
        cy.SignIn()
    })

    //Creating the shopping list
    it('Create List', function () {
        cy.get('.createButton > ._2abd6af1').should('be.visible').click()
        cy.get('[type="text"]').type('Rays_List')
        cy.get('input[type="submit"][value = "Submit"]').click()
        cy.title('eq', 'Dat Shopping List - Rays List')
        cy.contains('Shopping List').click()
                 
    })

    // Editing the shopping list. Exiting the page and coming back to check if edited list is intact. 
    it('Edit List', function () {
        cy.wait(5000)
        cy.contains('Rays_List').click()
        cy.get('#addItem > form:nth-child(1) > input:nth-child(1)', {timeout: 20000}).type('Milk')
        cy.get('#addItem.addGroceryItem form input._2abd6af1', {timeout:20000}).click()
        cy.get('ul > :nth-child(1)').click()
        cy.get('ul > :nth-child(2)').click()
        cy.get('ul > :nth-child(5)').click()
        cy.wait(5000)
        cy.contains('Milk')
        cy.contains('Shopping List').click()
        cy.wait(5000)
        cy.contains('Rays_List').click()
        cy.wait(5000)
        cy.contains('Milk')
       
    })

    // After the test, delete test shopping list
    after(() => {
        cy.get('a.delete').click()

    })
 })