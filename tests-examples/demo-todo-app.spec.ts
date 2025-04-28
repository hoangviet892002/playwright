import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://kpcos.roomspots.click/consultant/19bb10a5-b364-48c5-8887-e983c1062344/new-quotation"
  );
  await page.locator(".btn").first().click();
  await page
    .getByRole("row", { name: "Atman HP-12000 (60W)-Sủi Oxi" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Baoyu BY-F12000 (80W) Baoyu" })
    .locator("a")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("spinbutton").first().click();
  await page.getByRole("spinbutton").first().fill("010000");
  await page.getByRole("spinbutton").nth(1).click();
  await page.getByRole("spinbutton").nth(1).fill("0");
  await page.getByRole("button", { name: "Xem trước" }).click();
  await page
    .locator("div:nth-child(4) > .ant-modal-root > .ant-modal-wrap")
    .click();
  await page.getByRole("button", { name: "Close" }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();
