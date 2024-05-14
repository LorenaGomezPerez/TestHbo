
Feature: Main Page Tests

Background: visit the page and decline the cookies
  Given I visit "https://www.hbomax.com/es/es"
  When I check that the page "contain" the text "Haz clic en Aceptar para dar tu consentimiento"  
  When I should have to click on the OK button


Scenario: visit the HBO main page

  Given I should see the navigation menu
  When I should see the HBO logo
  Then I should see the subscription button


Scenario: click on login button
    Given I see the page the button should "contain" the text "INICIA SESIÓN"
    When  I should click on the login button 
	When  I should be redirected to the login page
    When  I see the title should "contain" the text "Iniciar sesión"

	#primero comprobar que me selecciona ese input
	
	When  I type on the password input "Correo electrónico" the text "lorenagomezperez@gmail.com"
    When  I type on the password input "Contraseña" the text "Lore1234Gomez" 
	Then  I click login button should "contain" the text "Iniciar sesión"  
	

//  Scenario: type in a login input

# Scenario: type in a login input
   #Given I should click on the button search magnifier      
	
	
	
    




	
  


  