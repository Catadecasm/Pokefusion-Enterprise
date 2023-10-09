import { Builder, By, Key } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

async function runTestInvalidCredentials() {
  const options = new chrome.Options(); 
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("http://localhost:3000/login"); 
    await driver.findElement(By.id("email")).sendKeys("fake@endava.com");
    await driver.findElement(By.id("password")).sendKeys("fake");

    await driver.findElement(By.id("login-button")).click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const sweetAlertText = await driver
      .findElement(By.id("swal2-html-container"))
      .getText();
    console.log(sweetAlertText);
    if (sweetAlertText == "The email or password is incorrect") {
      console.log("El mensaje de error es correcto.");
    } else {
      console.error("El mensaje de error no coincide con lo esperado.");
    }

  } catch (error) {
    console.error("Error en la prueba:", error);
  } finally {
    await driver.quit();
  }
}

async function runTestLogin() {
  const options = new chrome.Options(); 
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("http://localhost:3000/login"); 

    await driver.findElement(By.id("email")).sendKeys("willy@endava.com");
    await driver.findElement(By.id("password")).sendKeys("endava");

    await driver.findElement(By.id("login-button")).click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const sweetAlertText = await driver
    .findElement(By.id("swal2-html-container"))
    .getText();
    console.log(sweetAlertText);
    if (sweetAlertText == "You have successfully logged in") {
      console.log("El mensaje de error es correcto.");
    } else {
      console.error("El mensaje de error no coincide con lo esperado.");
    }
    await driver.findElement(By.className("swal2-confirm swal2-styled")).click();    
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl === "http://localhost:3000/homepage") {
      console.log("La redirección es correcta.");
    } else {
      console.error("La redirección es incorrecta.");
    }

  } catch (error) {
    console.error("Error en la prueba:", error);
  } finally {
    await driver.quit();
  }
}

async function runTestReapeatLogin() {
  const options = new chrome.Options(); 

  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("http://localhost:3000/login"); 

    await driver.findElement(By.id("email")).sendKeys("willy@endava.com");
    await driver.findElement(By.id("password")).sendKeys("endava");

    await driver.findElement(By.id("login-button")).click();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const sweetAlertText = await driver
    .findElement(By.id("swal2-html-container"))
    .getText();
    console.log(sweetAlertText);
    if (sweetAlertText == "You are already logged in") {
      console.log("El mensaje de error es correcto.");
    } else {
      console.error("El mensaje de error no coincide con lo esperado.");
    }
    await driver.findElement(By.className("swal2-confirm swal2-styled")).click();    
    
  } catch (error) {
    console.error("Error en la prueba:", error);
  } finally {
    await driver.quit();
  }
}

await runTestInvalidCredentials();
await runTestLogin();
await runTestReapeatLogin();
