import ProfileScreen from '../profile-screen.vue'

describe('<ProfileScreen />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProfileScreen)
    cy.get('#profileScreenHeaderTitle')
    cy.get('#profileScreenHeaderIcon')
    cy.get('#profileScreenIcon')
    cy.get('#userInfoContainer')
    cy.get('#userFullNameLabel')
    cy.get('#userFullName')
    cy.get('#userEmailLabel')
    cy.get('#userEmail')
    cy.get('#profileScreenLogoutRouter')
    cy.get('#profileScreenLogout').click()

  })
})