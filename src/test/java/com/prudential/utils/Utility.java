/**
 * 
 */
package com.prudential.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * @author Navneet
 *
 */
public class Utility {
	Properties prop = new Properties();

	public WebDriver initialize(WebDriver driver2) throws IOException {
		// Load property file
		InputStream inp = new FileInputStream("./src/test/resources/config.properties");
		prop.load(inp);

		// Find operation system of testing machine and store in variable OS
		String OS = System.getProperty("os.name").toLowerCase();

		// Set your driver on the basis of your machine OS
		if (OS.contains("lin")) 
		{
			if(prop.getProperty("browser").equals("chromeDriver"))
			{
				System.setProperty("webdriver.chromer.driver", "./src/test/resources/chromedriverLinux");
				driver2 = new ChromeDriver();				
			} else if(prop.getProperty("browser").equals("geckoDriver"))
			{
				System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/geckoDriver/geckodriver-v0.24.0-win64.exe");
				driver2 = new FirefoxDriver();
			}
		} else if (OS.contains("win")) 
		{
			if(prop.getProperty("browser").equals("chromeDriver"))
			{
				try {
					System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chromeDriver/chromedriver_v71-73_win.exe");
					driver2 = new ChromeDriver();
				} catch (Exception e1) {
					try {
						System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chromeDriver/chromedriver_v73_win.exe");
						driver2 = new ChromeDriver();
					} catch (Exception e2) {
						System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chromeDriver/chromedriver_v74_win.exe");
						driver2 = new ChromeDriver();
					}
				}
			} else if(prop.getProperty("browser").equals("geckoDriver"))
			{
				try {
					System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/geckoDriver/geckodriver-v0.24.0-win64.exe");
					driver2 = new FirefoxDriver();
				} catch (Exception e1) {
					try {
						System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/geckoDriver/geckodriver-v0.24.0-win32.exe");
						driver2 = new FirefoxDriver();
					} catch (Exception e2) {
						try {
							System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/geckoDriver/geckodriver-v0.23.0-win64.exe");
							driver2 = new FirefoxDriver();
						} catch (Exception e3) {
							System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/geckoDriver/geckodriver-v0.23.0-win32.exe");
							driver2 = new FirefoxDriver();
						}
					}
				}
			}
		} else if (OS.contains("mac")) 
		{
			if(prop.getProperty("browser").equals("chromeDriver"))
			{
				System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriverMac");
				driver2 = new ChromeDriver();				
			} else if(prop.getProperty("browser").equals("geckoDriver"))
			{
				System.setProperty("webdriver.gecko.driver", "./src/test/resources/drivers/geckoDriver/geckodriver-v0.24.0-win64.exe");
				driver2 = new FirefoxDriver();
			}
		}

		// Implicit wait of 15 seconds
		driver2.manage().timeouts().implicitlyWait(Integer.valueOf(prop.getProperty("implicitTimeOut")), TimeUnit.SECONDS);

		// Maximize your window
		driver2.manage().window().maximize();

		return driver2;
	}
}
