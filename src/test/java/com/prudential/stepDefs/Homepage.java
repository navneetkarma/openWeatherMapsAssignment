/**
 * 
 */
package com.prudential.stepDefs;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import com.prudential.runner.TestRunner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author Navneet
 *
 */

// This is step definition file where logic for the feature file is written
public class Homepage {
	
	Properties prop = new Properties();
	WebDriver driver = TestRunner.driver;
	
	public Homepage() throws IOException {
		// Load property file
		InputStream inp = new FileInputStream("./src/test/resources/config.properties");
		prop.load(inp);
	}

	@Given("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
		driver.get(prop.getProperty("baseUrl"));
	}
	
	@When("^click the sign up link$")
	public void click_signup_link() throws Throwable {
		driver.findElement(By.xpath("//a[@href = '//home.openweathermap.org/users/sign_up' and contains(text() , 'Sign Up')]")).click();
	}
	
	@Then("^the title of the page is Members$")
	public void title_assertion() throws Throwable {
		String status = driver.getTitle();
		Assert.assertEquals(status, "Members");
	}
	
	@Then("^verify that the \"(.*)\" is found on the screen$")
	public void tabs_presence(String arg1) throws Throwable {
		boolean status = driver.findElement(By.xpath("//a[contains(text() , '" + arg1 + "')]")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@When("^click the Maps tab$")
	public void click_maps_tab() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text() , 'Maps')]")).click();
	}
	
	@Then("^verify the presence of sub menus of Maps tab$")
	public void verify_submenus_map() throws Throwable {
		String status1 = driver.findElement(By.xpath("//a[contains(text() , 'Maps')]//following-sibling::ul//li[1]//a")).getText();
		Assert.assertEquals(status1, "Weather maps");
		String status2 = driver.findElement(By.xpath("//a[contains(text() , 'Maps')]//following-sibling::ul//li[2]//a")).getText();
		Assert.assertEquals(status2, "Current satellite maps");
		String status3 = driver.findElement(By.xpath("//a[contains(text() , 'Maps')]//following-sibling::ul//li[3]//a")).getText();
		Assert.assertEquals(status3, "Beautiful places");
	}
	
	@Then("^verify that Support Center element is present$")
	public void supportCenter_presence() throws Throwable {
		boolean status = driver.findElement(By.xpath("//a[@href = '//openweathermap.desk.com/']//span[text()='Support Center']")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@Then("^verify that Sign In element is present$")
	public void signIn_presence() throws Throwable {
		boolean status = driver.findElement(By.xpath("//a[@href = '//home.openweathermap.org/users/sign_in' and text() = ' Sign In']")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@Then("^verify that Sign Up element is present$")
	public void signOut_presence() throws Throwable {
		boolean status = driver.findElement(By.xpath("//a[@href = '//home.openweathermap.org/users/sign_up' and contains(text() , 'Sign Up')]")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@Then("^verify that Search button element is present$")
	public void searchButton_presence() throws Throwable {
		boolean status = driver.findElement(By.xpath("//button[@type = 'submit' and text() = ' Search']")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@Then("^verify that label in search box is Your City Name$")
	public void text_in_search_box() throws Throwable {
		String status = driver.findElement(By.xpath("//label[@class= 'sr-only']//following-sibling::input")).getAttribute("placeholder");
		Assert.assertEquals(status, "Your city name");
	}
	
	@Then("^verify that search box element is present$")
	public void searchBox_presence() throws Throwable {
		boolean status = driver.findElement(By.xpath("//label[@class= 'sr-only']//following-sibling::input")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@Then("^verify that Current location text element is present$")
	public void currentLocation_presence() throws Throwable {
		boolean status = driver.findElement(By.xpath("//button[@type= 'button' and contains(text() ,'Current location')]")).isDisplayed();
		Assert.assertEquals(status, true);
	}
	
	@Then("^enter invalid text in the city search box$")
	public void enter_invalid_city() throws Throwable {
		driver.findElement(By.xpath("//label[@class= 'sr-only']//following-sibling::input")).sendKeys("invalidentry");
	}
	
	@Then("^enter valid text \"(.*)\" in the city search box$")
	public void enter_valid_city(String args1) throws Throwable {
		driver.findElement(By.xpath("//label[@class= 'sr-only']//following-sibling::input")).sendKeys(args1);
	}
	
	@Then("^validate the coordinate \"(.*)\" of the searched city$")
	public void validate_coordinate(String args1) throws Throwable {
		String status = driver.findElement(By.xpath("//p[text()='Geo coords ']//a")).getText();
		Assert.assertEquals(status, args1);
	}
	
	@Then("^click the search button$")
	public void click_search_btn() throws Throwable {
		driver.findElement(By.xpath("//button[@type = 'submit' and text() = ' Search']")).click();
	}
	
	@Then("^validate that no record is found for invalid text$")
	public void check_no_record() throws Throwable {
		String str = driver.findElement(By.xpath("//div[@role= 'alert']")).getText();
		boolean status = str.contains("Not found");
		Assert.assertEquals(status, true);
	}
}
