import {airtime} from "../fixtures/selectors.js";
describe('template spec', () => {
  beforeEach(function () {
    cy.visit('https://9mobile.com.ng/')
  });

  it('I should be to buy airtime', () => {
 cy.get(airtime.airtimeBtn).click ()
 cy.get(airtime.phonenmberBtn).type('08094538828')
 cy.get(airtime.amountBtn).type('500')
 cy.get(airtime.emailfield).type('titilolamia@yahoo.com')
 cy.get(airtime.buyBtn).click()
})



})