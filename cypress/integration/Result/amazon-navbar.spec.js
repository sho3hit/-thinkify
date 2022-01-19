/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.in')
  })

  it('Check the translation of nav-bar', () => {
    cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click();
 

  })
  
})
