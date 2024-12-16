describe('template spec', () => {
  it('change password', () => {
    cy.visit('http://localhost:5173/')
    cy.visit('http://localhost:5173/forgot-password')
    cy.window().then((window) => {
      window.localStorage.setItem('users', JSON.stringify([{userId:0,userName:"Sinem Alageyik",userEmail:"sinem.alageyik@formsapp.com",userPassword:"123456"},{userId:1,userName:"User 1",userEmail:"user1@formsapp.com",userPassword:"123456"}]));
      window.localStorage.setItem('userInfo', JSON.stringify({userId:0,userName:"Sinem Alageyik",userEmail:"sinem.alageyik@formsapp.com",userPassword:"123456", userTodo:[{
        id:0,
        title:"Design Logo", 
        description:"Make logo for the mini project", 
        createdTime:"16 Dec 2024"}]}));
    });
    cy.reload()
    cy.get('#forgotPassword').type('changePassword')
    cy.get('#forgotPasswordConfirmPassword').type('changePassword')
    cy.get('#forgotPasswordButton').click()
  })
})