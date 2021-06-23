import { Builder, Capabilities, By, } from 'selenium-webdriver';

const chromedriver = require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () =>{
    await (await driver).get('http://127.0.0.1:5500/movieList/')
})

test('add and delete movie', async () =>{
    await driver.findElement(By.xpath('(//input)')).click();
    await driver.findElement(By.xpath('(//input)')).sendKeys('Rocky Horror Picture Show\n');
    await driver.findElement(By.xpath('(//button)')).click()
    // await driver.findElement(By.id("x")).click()
    await driver.sleep(5000);
    await driver.findElement(By.id("RockyHorrorPictureShow")).click()
})


// afterAll(async () => {
//     await driver.sleep(5000);
//     await (await driver).quit()
// })