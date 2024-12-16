describe('template spec', () => {
  it('sign up success', () => {
    cy.visit('http://localhost:5173/')
    cy.visit('http://localhost:5173/sign-up')
    cy.window().then((window) => {
      window.localStorage.setItem('users', JSON.stringify([{userId:1,userName:"User 1",userEmail:"user1@formsapp.com",userPassword:"123456"}]));
    });
    cy.reload(); 
    cy.get('#signUpIcon')
    cy.get('#signUpEmail').type('sinem.alageyik@formsapp.com')
    cy.get('#signUpFullName').type(' Sinem Alageyik Ada')
    cy.get('#signUpPassword').type('123456')
    cy.get('#signUpConfirmPassword').type('123456')
    cy.get('#signUpAccountInfoText')
    cy.get('#signUpSignInButton')
    cy.get('#signUpButton').click()
    cy.wait(1000)
  })
  it('sign up fail because user exist', () => {
    cy.visit('http://localhost:5173/')
    cy.visit('http://localhost:5173/sign-up')
    cy.window().then((window) => {
      window.localStorage.setItem('users', JSON.stringify([{userId:1,userName:"Sinem Alageyik Ada",userEmail:"sinem.alageyik@formsapp.com",userPassword:"123456"}]));
    });
    cy.reload(); 
    cy.get('#signUpIcon')
    cy.get('#signUpEmail').type('sinem.alageyik@formsapp.com')
    cy.get('#signUpFullName').type(' Sinem Alageyik Ada')
    cy.get('#signUpPassword').type('123456')
    cy.get('#signUpConfirmPassword').type('123456')
    cy.get('#signUpAccountInfoText')
    cy.get('#signUpSignInButton')
    cy.get('#signUpButton').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('This email used before');
    });
  })
})