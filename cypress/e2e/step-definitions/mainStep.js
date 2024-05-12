import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage";

let mainPage = new MainPage();


// When('I should see the navigation menu', () => {
// 	mainPage.seeHboMenuHamburguer();
//   });

// When("I should see the HBO logo", () => {
// 	mainPage.seeHboLogo();
//   });

// Then('I should see the subscription button', ()=>{
// 	mainPage.seeSubscriptionButton();
//  });

 //Scenario: Perform actions on the HBO website

When ('I see the page the button should {string} the text {string}', (contain,text) => {
	mainPage.seeSessionButton(contain,text);
  });

When ('I should click on the login button', () => {
	mainPage.clickSessionButton();
});

When ('I should be redirected to the login page', () => {
	mainPage.visitLoginPage();
});

Then ('I see the title should {string} the text {string}', (contain,text) => {
	mainPage.loginTitle(contain, text);

});








