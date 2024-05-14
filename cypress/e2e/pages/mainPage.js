
const subscriptionButton = "page15534-band651898-Button651902";
const loginButton = "ce__CallToAction__button ce__CallToAction__submitButton";



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

	clickSearchButton() {
		cy.get('[data-testid="SearchButton"] > .r-uia4a0').click();
		
	}

	

	//Scenario: type in a login input

	inputLoginMail() {
		cy.get('[data-testid="EmailTextInput"]').should('be.visible').type('lorenagomezperez@gmail.com').should('have.value', 'lorenagomezperez@gmail.com');
		
	
	}

	inputLoginPassword(userPassword) {
		cy.get('[data-testid="PasswordTextInput"]').should('be.empty').type(userPassword).should('have.value', userPassword);
		
    }

	clickLoginButton() {
		cy.get(loginButton).click();
	}

}


	  
	  