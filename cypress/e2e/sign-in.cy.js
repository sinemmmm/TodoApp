describe('template spec', () => {
  it('sign in success', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#signInIcon')
    cy.get('#signInEmail').type('sinem.alageyik@formsapp.com')
    cy.get('#signInPassword').type('123456')
    cy.get('#signInForgotPassword')
    cy.get('#signInAccountInfo')
    cy.get('#signUpButton')
    cy.get('#signInButton').click()
    cy.wait(1000)
  })
})
describe('template spec', () => {
  it('sign in fail because email field emty', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#signInIcon')
    cy.get('#signInEmail')
    cy.get('#signInPassword').type('123456')
    cy.get('#signInForgotPassword')
    cy.get('#signInAccountInfo')
    cy.get('#signUpButton')
    cy.get('#signInButton').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Bu email kayıtlı değil veya bilgileri yanlış girildi');
    });
  })
})
describe('template spec', () => {
  it('sign in fail because password field emty', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#signInIcon')
    cy.get('#signInEmail').type('sinem.alageyik@formsapp.com')
    cy.get('#signInPassword')
    cy.get('#signInForgotPassword')
    cy.get('#signInAccountInfo')
    cy.get('#signUpButton')
    cy.get('#signInButton').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Bu email kayıtlı değil veya bilgileri yanlış girildi');
    });
  })
})