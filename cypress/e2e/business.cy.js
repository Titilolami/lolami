import {business} from "../fixtures/selectors.js";
describe('template spec', () => {
  beforeEach(function () {
    cy.visit('https://9mobile.com.ng/')
  });

  it('I should be to click on eshop', () => {
    cy.get(business.businessBtn).click()
  })
})