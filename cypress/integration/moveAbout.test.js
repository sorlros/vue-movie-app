/**
 * 메인 페이지로 접근
 * Header About 내비게이션 버튼을 클릭
 * About 페이지에서 정보를 확인
 * Movie 페이지로 이동
 * Header 사용자 로고를 클릭
 * 다시 About 페이지에서 정보를 확인
 */

describe('About 페이지로 이동', () => {
  it('메인 페이지로 접근', () => {
    cy.visit('/')
    cy.get('header .nav-link.active').contains('Search')
  })
  it('About 페이지로 이동', () => {
    cy.get('header .nav-link').contains('About').click()
    cy.url().should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active').contains('About')
    cy.get('.name').contains('SORLROS')
  })
  it('영화 상세 페이지로 이동', () => {
    cy.get('header .nav-link').contains('Movie').click()
    cy.url().should('include', '/movie')
  })
  it('About 페이지로 이동', () => {
    cy.get('header .user').click()
    cy.url().should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active').contains('About')
    cy.get('.name').contains('SORLROS')
  })
})
