/**
 * 
 */
package com.prudential.runner;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.prudential.utils.Utility;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

/**
 * @author Navneet
 *
 */

@CucumberOptions(
		features = "src/test/java/com/prudential/homepage",
		glue = {"com.prudential.stepDefs"},
		tags = {"@SmokeTest"},
		monochrome = true,
		format = {"pretty", "html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json",
				"rerun:target/cucumber-reports/re-run.txt" })
public class TestRunner {
	public static WebDriver driver;
	private TestNGCucumberRunner testRunner;
	
	@BeforeSuite
	public void setUP() throws IOException
	{
		Utility utils = new Utility();
		// Environment set up before running the test case
		driver = utils.initialize(driver);
		testRunner = new TestNGCucumberRunner(TestRunner.class);	
	}
	
	// Testing all the feature files in com.prudential.homepage package
	@Test(description="Homepage",dataProvider="features")
	public void homepage(CucumberFeatureWrapper cFeature)
	{
		testRunner.runCucumber(cFeature.getCucumberFeature());
	}
	
	@DataProvider(name="features")
	public Object[][] getFeatures()
	{
		return testRunner.provideFeatures();
	}
	
	@AfterSuite
	public void tearDown()
	{
		driver.quit();
		testRunner.finish();
	}
}
