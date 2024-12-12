import SignIn from '../sign-in.vue'

describe('<SignIn />', () => {
  it('renders', () => {
    cy.mount(SignIn)
    cy.get('#signInIcon')
    cy.get('#signInEmail').type('sinem.alageyik@formsapp.com')
    cy.get('#signInPassword').type('123456')
    cy.get('#signInForgotPassword')
    cy.get('#signInButton')
    cy.get('#signInAccountInfo')
    cy.get('#signUpButton')
  })
})