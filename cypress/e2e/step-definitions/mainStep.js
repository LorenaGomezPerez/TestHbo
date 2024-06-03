import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage";
import 'cypress-mochawesome-reporter/cucumberSupport';

let mainPage = new MainPage();

//Visit the HBO main page


When('I should see the navigation menu', () => {
	mainPage.seeHboMenuHamburguer();
  });

When("I should see the HBO logo", () => {
	mainPage.seeHboLogo();
  });

Then('I should see the subscription button', ()=> {
	mainPage.seeSubscriptionButton();
 });



 //Scenario: click on login button

When ('I see the page the button should {string} the text {string}', (contain,text) => {
 	mainPage.seeSessionButton(contain,text);
  });

When ('I click on the login button', () => {
 	mainPage.clickSessionButton();
});

When ('I should be redirected to the login page', () => {
	mainPage.visitLoginPage();
});

When ('I see the title should {string} the text {string}', (contain,text) => {
	mainPage.loginTitle(contain, text);

});

When ('I click the forgotten button',() => {
	mainPage.forgottenAccountButton();

});

Then ('I should see the title {string} the text {string}',() => {
	mainPage.forgottenAccountTitle();
});



 //Scenario: type in a login input

// And ('I type on the mail input {string} the text {string}',(input,text) => {
// 	mainPage.inputLoginMail(input,text);
// });

// And ('I type on the password input {string} the text {string}', (input,text) => {
// 	mainPage.inputLoginPassword(input,text);
// });

// Then ('I click login button should {string} the text {tring}',(contain,text) => {
// 	mainPage.clickLoginButton(contain,text);
// });

// // Este paso parametrizado llama a la función inputTextOnButtonWithDataTestId que permite hacer type en cualquier input de la página que tengas el atributo dataTestID
Then ('I type in the input with data-test-id {string} the text {string}',(inputDataTestID,text) => {
	mainPage.inputTextOnButtonWithDataTestId(inputDataTestID,text);
});

	
		








