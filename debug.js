import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('PAGE ERROR LOG:', msg.text());
      }
    });
    page.on('pageerror', error => console.log('PAGE EXCEPTION:', error.message));
    
    console.log('Visiting http://localhost:5174...');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 10000 });
    
    await browser.close();
    console.log('Done.');
  } catch (err) {
    console.error('SCRIPT ERROR:', err);
  }
})();
