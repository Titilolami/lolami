import {datainternet} from "../fixtures/selectors.js";
describe('template spec', () => {
  beforeEach(function () {
    cy.visit('https://9mobile.com.ng/')
  });

  it('I should be to buy airtime', () => {
cy.get(datainternet.datainternet).click()
cy.get(datainternet.buyBtn).click()

  })

  
})