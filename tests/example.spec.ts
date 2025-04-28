import { test, expect } from "@playwright/test";
import { chromium } from "playwright";

// test("login and save session", async ({ page, context }) => {
//   await page.goto("https://kpcos.roomspots.click/", {
//     waitUntil: "networkidle",
//     timeout: 60000, // Tăng timeout lên 60s
//   });
//   await page.getByRole("button", { name: "Đăng nhập" }).click();
//   await page.getByRole("textbox", { name: "Email" }).fill("tuvan1@gmail.com");
//   await page.getByRole("textbox", { name: "Password" }).fill("1");
//   await page.getByRole("button", { name: "Đăng nhập" }).click();

//   await expect(page).toHaveURL(/consultant/);
//   await context.storageState({ path: "auth.json" });
// });

test("fill quotation", async () => {
  test.setTimeout(0); //// Tắt timeout cho test này
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    storageState: "auth.json",
  });
  const page = await context.newPage();

  await page.goto(
    "https://kpcos.roomspots.click/consultant/19bb10a5-b364-48c5-8887-e983c1062344/new-quotation",
    { waitUntil: "networkidle" } // Đợi tải xong
  );

  // Các bước tiếp theo...
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
  await page.getByRole("spinbutton").first().fill("010000");
  await page.getByRole("spinbutton").nth(1).fill("0");
  await page.getByRole("button", { name: "Xem trước" }).click();
  await page
    .locator("div:nth-child(4) > .ant-modal-root > .ant-modal-wrap")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
});
