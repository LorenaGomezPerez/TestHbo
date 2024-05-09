
Feature: Main Page Tests

Background: visit the page and decline the cookies
  Given I visit "https://www.hbomax.com/es/es"
  When I see the page should "contain" the text "Haz clic en Aceptar para dar tu consentimiento"  
  When I should have to click on the OK button
  


Scenario: visit the HBO main page

  Given I should see the navigation menu
  When I should see the HBO logo
  Then I should see the subscription button
  