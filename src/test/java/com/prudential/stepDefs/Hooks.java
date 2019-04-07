/**
 * 
 */
package com.prudential.stepDefs;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.prudential.runner.TestRunner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * @author Navneet
 *
 */
public class Hooks extends TestRunner {
	
	// Before starting any scenario beforeScenario method is triggered
	@Before
	public void beforeScenario(){
		System.out.println("------Scenario Started------");
	} 
	
	// After ending the scenario if failure found screenshot is taken and embedded in cucumber report
	@After
	public void afterScenario(Scenario scenario){
		if (scenario.isFailed()) 
		{
			// Take a screenshot...
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
		}
		System.out.println("------------Scenario Ended------------");
	}
}
