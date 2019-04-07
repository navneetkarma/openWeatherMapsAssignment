@SmokeTest
Feature: City Validation Feature 
	Validate the positive and negative test cases on the search of city

Scenario: Perform negative test case on the search of city
	Given user is on homepage
	When enter invalid text in the city search box
	And click the search button
	Then validate that no record is found for invalid text

Scenario Outline: Perform postive test case where searched city coordinate is validated
	Given user is on homepage
	When enter valid text "<City>" in the city search box
	And click the search button
	Then validate the coordinate "<Coordinate>" of the searched city
	Examples: 
	| City | Coordinate |
	| Mumbai, IN | [19.0144, 72.8479] |
	| Delhi, IN | [28.6517, 77.2219] |
	| Kolkata, IN | [22.5677, 88.3476] |
	| Bengaluru, IN | [12.9791, 77.5913] |
	| Chennai, IN | [13.0878, 80.2785] |
	| Hyderabad, IN | [17.3616, 78.4747] |
	| Pune, IN | [18.5203, 73.8543] |