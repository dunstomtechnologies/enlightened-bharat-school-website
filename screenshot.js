import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const targetDir = "/Users/sanjanakesharwani/.gemini/antigravity/brain/53980df9-f2e4-4543-b03c-61902f027e77/screenshots";
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
if (!fs.existsSync(chromePath)) {
  console.error("Google Chrome not found at " + chromePath);
  process.exit(1);
}

const pages = [
  { name: "home", url: "http://localhost:5173/" },
  { name: "about", url: "http://localhost:5173/about" },
  { name: "academics", url: "http://localhost:5173/academics" }
];

const sections = [
  { name: "future_students", url: "http://localhost:5173/", selector: "#future-students" },
  { name: "parent_trust", url: "http://localhost:5173/", selector: "#parent-trust" },
  { name: "founders", url: "http://localhost:5173/about", selector: "#founders" },
  { name: "learning_cycle", url: "http://localhost:5173/academics", selector: "#learning-cycle" },
  { name: "age_journey", url: "http://localhost:5173/academics", selector: "#age-journey" },
  { name: "goal_dashboard", url: "http://localhost:5173/academics", selector: "#goal-dashboard" }
];

async function capture() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  // 1. Capture Full Page Views (Desktop & Mobile)
  for (const item of pages) {
    console.log(`Processing page: ${item.name} at ${item.url}`);

    // Desktop
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
    await page.goto(item.url, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    const desktopPath = path.join(targetDir, `${item.name}_desktop.png`);
    await page.screenshot({ path: desktopPath, fullPage: true });
    console.log(`Saved desktop view to: ${desktopPath}`);

    // Mobile
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true });
    await page.goto(item.url, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    const mobilePath = path.join(targetDir, `${item.name}_mobile.png`);
    await page.screenshot({ path: mobilePath, fullPage: true });
    console.log(`Saved mobile view to: ${mobilePath}`);
  }

  // 2. Capture Specific Sections
  console.log("Processing individual sections...");
  for (const sec of sections) {
    console.log(`Capturing section ${sec.name} from ${sec.url}...`);
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2, isMobile: false });
    await page.goto(sec.url, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    const element = await page.$(sec.selector);
    if (element) {
      const sectionPath = path.join(targetDir, `sec_${sec.name}.png`);
      await element.screenshot({ path: sectionPath });
      console.log(`Saved section to: ${sectionPath}`);
    } else {
      console.warn(`Warning: Selector ${sec.selector} not found on ${sec.url}`);
    }
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

capture().catch(err => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
