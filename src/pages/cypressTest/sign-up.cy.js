import SignUp from '../sign-up.vue'

describe('<SignUp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(SignUp)
    cy.get('#signUpIcon')
    cy.get('#signUpEmail').type('sinem.alageyik@formsapp.com')
    cy.get('#signUpFullName').type(' Sinem Alageyik Ada')
    cy.get('#signUpPassword').type('123456')
    cy.get('#signUpConfirmPassword').type('123456')
    cy.get('#signUpButton').click()
    cy.get('#signUpAccountInfoText')
    cy.get('#signUpSignInButton')
  })
})