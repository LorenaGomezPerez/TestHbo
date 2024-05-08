
Feature: Main Page Tests

Background: visit the page and decline the cookies
  Given I visit "https://www.hbomax.com/es/es"
  //añadir quitar las cookies


Scenario: visit the HBO main page

  Given I should see the navigation menu
  When I should see the HBO logo
  Then I should see the subscription button
  