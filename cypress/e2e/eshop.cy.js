import {eshop} from "../fixtures/selectors.js";
describe('template spec', () => {
  beforeEach(function () {
    cy.visit('https://9mobile.com.ng/')
  });

  it('I should be to click on eshop', () => {
cy.get(eshop.eshopBtn).click ()
cy.wait(7000)
cy.get(eshop.wirelesss). click ()
cy.get(eshop.mifi).click()
cy.wait(7000)
cy.get(eshop.cartBtn).click()
cy.wait(5000)
cy.get(eshop.dropdown).type('ikeja')
cy.get(eshop.sunday).click()

})


});