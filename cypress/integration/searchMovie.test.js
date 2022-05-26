import { useLink } from 'vue-router'

/**
 * 검색(메인) 페이지로 접근 후,
 * 영화 제목을 frozen으로 표시 개수를 30개로 입력,
 * Apply 버튼을 클릭해 영화 목록을 검색
 * 영화 목록 30개가 출력
 * 영화 목록에서 Frozen II을 선택
 * 영화 상세 정보 페이지로 이동
 * 상세 정보 페이지에서 정보를 확인할수 있다.
 */
describe('영화 검색(Frozen II', () => {
  it('검색 페이지로 접근', () => {
    cy.visit('/')
    cy.get('header .nav-link.active').contains('Search')
  })
  it('영화를 검색', () => {
    cy.get('input.form-control').type('frozen')
    cy.get('select.form-select:nth-child(2)').select('30')
    cy.get('button.btn').contains('Apply').click()
    cy.wait(2000)
    cy.get('.movie').should('have.length', 30)
  })
  it('Frozen II 영화아이템을 선택', () => {
    cy.get('.movie .title').contains('Frozen II').click()
  })
  it('영화의 상세정보를 확인', () => {
    cy.url().should('include', '/movie/tt4520988')
    cy.wait(1000)
    cy.get('header .nav-link.active').contains('Movie')
    cy.get('.title').contains('Frozen II')
  })
})
