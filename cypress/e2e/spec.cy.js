describe('template spec', () => {
  it('passes', () => {
    const username = Cypress.env('VITE_USERNAME')
    const password = Cypress.env('VITE_PASSWORD')

    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="usernameInput"]').type(username)
    cy.get('[data-cy="passwordInput"]').type(password)
    cy.get('[data-cy="loginButton"]').click()

    cy.contains('Login successful')
  })
})