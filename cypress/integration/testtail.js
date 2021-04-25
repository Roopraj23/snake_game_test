describe('The work rightarrow', function () {
    it('work rightarrow', function () {
    cy.visit('/index.html');

    cy.get('canvas')

    cy.get('body').type('{downarrow}')
    cy.get('body').type('{rightarrow}{rightarrow}')
    cy.get('body').type('{uparrow}')
   

    cy.contains('Score:');
    })
})