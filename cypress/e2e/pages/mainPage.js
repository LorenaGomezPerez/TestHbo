
const subscriptionButton = "page15534-band651898-Button651902";
const loginButton = "ce__CallToAction__button ce__CallToAction__submitButton";
const buttonDataTestID = "EmailTextInput";



export class MainPage {

	 
    seeHboMenuHamburguer() {
		cy.get('.hamburger-box').should('exist').and('be.visible');
	  }

	
	seeHboLogo() {
		cy.get('.navbar-brand > img').should('exist').and('be.visible');
	   }

	
	seeSubscriptionButton() {
	 	cy.get(subscriptionButton).should('exist').and('be.visible');
	  }

	 //Scenario: click on login button

	seeSessionButton(contain,text) {
	 	cy.get('.justify-content-end.d-none > .secondary-cta > .sc-pGacB').should(contain, text);
		
	 }

	 clickSessionButton() {
	 	cy.get('.justify-content-end.d-none > .secondary-cta > .sc-pGacB').click();
	 	
		
	 }

	visitLoginPage() {
		cy.url("https://play.hbomax.com/signIn").should('include', '/signIn');
		cy.wait(3000);

	}

	loginTitle(contain,text) {
		cy.get('[data-testid="SignInTitle"]').should(contain, text);
	}

	// clickSearchButton() {
	// 	cy.get('[data-testid="SearchButton"] > .r-uia4a0').click();
		
	// }

	// forgottenAccountButton () {
	// 	cy.get('[data-testid="ForgotPasswordLink"]').click();
	// }

	// forgottenAccountTitle (contain, text) {
	// 	cy.get('#dialogTitle').should('be.visible').and(contain, text);
	// }

	

	//Scenario: type in a login input

	// inputLoginMail(input,text) {
	// 	cy.get('[data-testid="EmailTextInput"]').should('be.visible').type('lorenagomezperez@gmail.com').should('have.value', 'lorenagomezperez@gmail.com');
		
	
	// }

	// inputLoginPassword(input,text) {
	// 	cy.get('[data-testid="PasswordTextInput"]').should('be.empty').type('Lore1234Gomez').should('have.value', 'Lore1234Gomez');
		
    // }

	// clickLoginButton() {
	// 	cy.get(loginButton).click();
	// }

//Podrías probar a usar funciones parametrizadas que hagan el código menos repetitivo, como por ejemplo:
   inputTextOnButtonWithDataTestId(buttonDataTestID, text) {
	cy.get(`[data-testid="${buttonDataTestID}"]`).should('be.visible').type(text).should('have.value', text);
   }

   

/*
Con esta función no solamente puedes sustituir las funciones inputLoginMail y inputLoginPassword además puedes poner el texto que quieras en cada caso, 
voy a añadir el step relacionado en la carpeta de step-definitions fichero mainStep.js
*/
}


	  
	  
