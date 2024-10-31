import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
// await page.goto('https://developer.chrome.com/');
// await page.goto('https://www.codesprint.ninja/');

// Set screen size.
// await page.setViewport({ width: 1920, height: 1080 });

// Type into search box.
// await page.locator('.devsite-search-field').fill('automate beyond recorder');

// // Wait and click on first result.
// await page.locator('.devsite-result-item-link').click();
let x=0;



let shorter = async (inUrl,fg) => {
    await page.goto(inUrl);
    
    // Set screen size.
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ path: `screenshot${x}.png` });
    x++;
    let links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));
    if(fg>0){
        for (let link of links) {
            console.log(link)
            await shorter(link,fg-1);
        }
    }

}
    


// await page.screenshot({ path: 'screenshot.png' });

// page.$$('a').forEach((el) => {
//     console.log(el.href);
//     shorter(el.href);
// })


// let links = await page.$$eval('a', anchors=>anchors.map(anchor=>anchor.href));

// let links = await page.$$('a');

// console.log(links);
// console.log(typeof links);
// console.log(links.length);

let Url = 'https://www.codesprint.ninja/';


let flg = 5;
await shorter(Url,flg);
// Locate the full title with a unique string.
// const textSelector = await page
//     .locator('text/Customize and automate')
//     .waitHandle();
// const fullTitle = await textSelector?.evaluate(el => el.textContent);

// Print the full title.
// console.log('The title of this blog post is "%s".', fullTitle);
console.log('Screenshot saved as screenshot.png');

await browser.close();

