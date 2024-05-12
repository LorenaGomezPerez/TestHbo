export class MainPage {

	 
    // seeHboMenuHamburguer() {
	// 	cy.get('.hamburger-box').should('exist').and('be.visible');
	//   }

	
	// seeHboLogo() {
	// 	cy.get('.navbar-brand > img').should('exist').and('be.visible');
	//   }

	
	// seeSubscriptionButton() {
	// 	cy.get('#page15534-band651898-Button651902').should('exist').and('be.visible');
	// }

	 //Scenario: Perform actions on the HBO website

	seeSessionButton(contain,text) {
		cy.get('.justify-content-end.d-none > .secondary-cta > .sc-pGacB').should(contain, text);
		
	}

	clickSessionButton() {
		cy.get('.justify-content-end.d-none > .secondary-cta > .sc-pGacB').click();
		cy.wait(3000);
		
	}

	visitLoginPage() {
		cy.url("https://play.hbomax.com/signIn").should('include', '/signIn');
	}

	loginTitle(contain,text) {
		cy.get('[data-testid="SignInTitle"]').should(contain, text);
	}
	


}


	  
	  