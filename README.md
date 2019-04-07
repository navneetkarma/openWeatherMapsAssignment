# openWeatherMap-testing

Read Me,

Prerequisite:
1. Before executing the test cases make sure chrome or firefox browser is installed.
2. Maven and Java is installed
3. JDK version 1.8.0 is set in the environment variable.

Framework:
1. For BDD (Behavior Driven Development), cucumber Gherkin language is used
2. Cucumber is integrated with Java, testNg and Selenium
3. Feature files maintained in ./src/test/java/com/prudential/homepage package
4. Step defination files in ./src/test/java/com/prudential/stepDefs package
5. Automatically checking the operating system and setting up the browser driver, launching browser, implicit wait, maximize window is done is Utility.java class kept is ./src/test/java/com/prudential/utils package

Configuration:
1. baseUrl, implicitTimeOut, browser is read from config.properties file kept in ./src/test/resources/ folder. User can any time change these values.
2. chrome Drivers for linux, mac, windows operation system are kept in ./src/test/resources/drivers/chromeDriver folder.
3. gecko Drivers for linux, mac, windows operation system are kept in ./src/test/resources/drivers/geckoDriver folder.

Testing Scenario:
1. CityValidation.feature (Positive and negative test cases on the search functionality is written)
2. ValidationImpInfo.feature (Presence of title, tabs, sub menu, important links are validated)

Execution:
1. From eclipse: After download import the project in eclipse, either run testng.xml as TestNG suite or run TestRunner.java as TestNG Test from ./src/test/java/com/prudential/runner package
2. From command line: Go to the project path and execute the command mvn test

Reporting:
1. Cucumber report is generated in the path ./target/cucumber-reports/cucumber-pretty/ folder index.html
2. Test NG report is generated in the path ./test-output/index.html