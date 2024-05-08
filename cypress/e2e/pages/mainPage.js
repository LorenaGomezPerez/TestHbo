export class MainPage {
  
    //añadir quitar las cookies

	seeHboMenuHamburguer() {
		cy.get('.hamburger-box').should('exist').and('be.visible');
	  }

	
	  seeHboLogo() {
		cy.get('.navbar-brand > img').should('exist').and('be.visible');
	  }

	
	seeSubscriptionButton() {
		cy.get('#page15534-band651898-Button651902').should('exist').and('be.visible');
	}

	

	


}


	  
	  