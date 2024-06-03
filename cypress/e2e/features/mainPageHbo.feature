@intercept
Feature: Main Page Tests

Background: visit the page and decline the cookies
  Given I visit "https://www.hbomax.com/es/es"
  #When I should see the page "contain" the text "Nos preocupamos por tu privacidad"  
  Then I click on the OK button should "contain" the text "Aceptar todo"


@smoke
Scenario: visit the HBO main page

  When I should see the navigation menu
  When I should see the HBO logo
  Then I should see the subscription button


Scenario: click on login button
    When I see the page the button should "contain" the text "INICIA SESIÓN"
    When I click on the login button
    And  I should be redirected to the login page
    And  I see the title should "contain" the text "Iniciar sesión"
	Then I type in the input with data-test-id "EmailTextInput" the text "lorenagomezperez@gmail.com"
	# And  I click the forgotten button
	# Then I should see the title "contain" the text "Restablece tu contraseña"
    # And  I type on the mail input "Correo electrónico" the text "lorenagomezperez@gmail.com"
    # And  I type on the password input "Contraseña" the text "Lore1234Gomez" 
    # Then I click login button should "contain" the text "Iniciar sesión"  
	

# Scenario: Uso de intercept y wait 
#Given I intercept the api call "" with alias "cookies"
#When I visit "https://www.max.com/es/es"
#When I wait 5000 milisecons for the api calls with de alias "cookies"
#Then I click the button should "contain" the text "Aceptar todo"

#Añade más escenarios, prueba a usar el step parametrizado que te he añadido
	
	
    




	
  


  
