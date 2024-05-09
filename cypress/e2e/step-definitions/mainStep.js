import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage";

let mainPage = new MainPage();



When('I should see the navigation menu', () => {
	mainPage.seeHboMenuHamburguer();
  });

When("I should see the HBO logo", () => {
	mainPage.seeHboLogo();
  });

Then('I should see the subscription button', ()=>{
     mainPage.seeSubscriptionButton();
});

