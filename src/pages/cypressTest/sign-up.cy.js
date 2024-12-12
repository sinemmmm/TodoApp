import SignUp from '../sign-up.vue'

describe('<SignUp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(SignUp)
    cy.get('#signUpIcon')
    cy.get('#signUpEmail')
    cy.get('#signUpFullName')
    cy.get('#signUpPassword')
    cy.get('#signUpConfirmPassword')
    cy.get('#signUpButton')
    cy.get('#signUpAccountInfoText')
    cy.get('#signUpSignInButton')
  })
})