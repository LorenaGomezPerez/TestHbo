import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage";
import 'cypress-mochawesome-reporter/cucumberSupport';


let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
});

When('I should see the page {string} the text {string}',(contain, text) => {
	commonPage.acceptCookies(contain,text);
  });

When('I click on the OK button should {string} the text {string}', (contain,text) => {
	commonPage.clickAcceptButton(contain,text);
  });


When("I check that the page should {string} the text {string}", (status, text) => {
  commonPage.checkBodyText(status, text);
  // Status accept the values: contain , not.contain
})

Then("I check that the url value contain the text {string}", (urlValue) => {
  commonPage.checkUrlValue(urlValue);
})

Then("I check that the url value not contain the text {string}", (urlValue) => {
  commonPage.checkUrlNotValue(urlValue);
})

Given("I check that the element with data test {string} should have the status {string}", (elementDataTest, status) => {
  commonPage.checkElementStateByDataTest(elementDataTest, status);
})

Given("I check that the element with class {string} should have the content {string}", (className, content) => {
  commonPage.checkContentByClass(className, content);
})

Given("I check that the element with data test {string} should have the value {string}", (elementDataTest, value) => {
  commonPage.checkElementValueByDataTest(elementDataTest, value);
})
