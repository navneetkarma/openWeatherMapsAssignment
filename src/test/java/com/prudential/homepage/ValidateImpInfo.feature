@SmokeTest
Feature: Information Feature 
	Verify the important labels and information on the home page

Scenario: Verify that the title of the page when Sign Up link is clicked
	Given user is on homepage
	When click the sign up link
	Then the title of the page is Members

Scenario Outline: Verify that the tabs are available on the home page
	Given user is on homepage
	Then verify that the "<tab>" is found on the screen
	Examples: 
	| tab |
	| Weather |
	| Maps |
	| Guide |
	| API |
	| Price |
	| Partners |
	| Stations |
	| Widgets |
	| Blog |
	
Scenario: Verify the drop down menu when Maps is clicked
	Given user is on homepage
	When click the Maps tab
	Then verify the presence of sub menus of Maps tab
	
Scenario: Verify the presence of other important elements on the homepage
	Given user is on homepage
	Then verify that Support Center element is present
	Then verify that Sign In element is present
	Then verify that Sign Up element is present
	Then verify that Search button element is present
	Then verify that label in search box is Your City Name
	Then verify that search box element is present
	Then verify that Current location text element is present