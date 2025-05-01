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

  // set không tắt khi test chạy xong

  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    storageState: "auth.json",
  });
  const page = await context.newPage();

  await page.goto(
    "https://kpcos.roomspots.click/consultant/903d1eaa-deb9-4757-8eeb-dfcecb78506a/new-quotation",
    { waitUntil: "networkidle" } // Đợi tải xong
  );
  await page
    .getByRole("button", { name: "collapsed Công tác chuẩn bị" })
    .click();
  await page.locator(".btn").first().click();
  await page.getByRole("button", { name: "Close" }).click();

  await page.locator(".btn").first().click();
  await page
    .getByRole("row", { name: "Atman HP-12000 (60W)-Sủi Oxi" })
    .locator("a")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.locator(".btn").first().click();
  // await page.getByText("2", { exact: true }).click();
  // await page.getByText("3", { exact: true }).click();
  // await page.getByText("4", { exact: true }).click();
  // await page.getByText("5", { exact: true }).click();
  // await page.getByText("1", { exact: true }).click();

  // await page.locator(".btn").first().click();
  // await page
  //   .getByRole("row", { name: "Atman HP-12000 (60W)-Sủi Oxi" })
  //   .locator("a")
  //   .click();
  await page.getByText("2", { exact: true }).click();
  await page.getByText("3", { exact: true }).click();
  await page.getByText("4", { exact: true }).click();
  await page
    .getByRole("row", { name: "Van chia khí 6 cổng Chia khí" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Ống dây khí 8mm 5m Dẫn khí t" })
    .locator("a")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.locator("button:nth-child(2)").first().click();
  await page
    .getByRole("row", { name: "Đo đạc và làm dấu chuẩn bị Đá" })
    .locator("a")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page
    .getByRole("row", { name: "Atman HP-12000 (60W)-Sủi Oxi" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Atman HP-12000 (60W)-Sủi Oxi" })
    .getByRole("spinbutton")
    .first()
    .fill("01000000");
  await page
    .getByRole("row", { name: "Van chia khí 6 cổng Chia khí" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Van chia khí 6 cổng Chia khí" })
    .getByRole("spinbutton")
    .first()
    .fill("0200000");
  await page
    .getByRole("row", { name: "Ống dây khí 8mm 5m Dẫn khí t" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .fill("249995");
  await page.getByRole("button", { name: "collapsed Khung hồ" }).click();
  await page.locator("div:nth-child(5) > .my-2 > button").first().click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.locator("div:nth-child(5) > .my-2 > button:nth-child(2)").click();
  await page
    .getByRole("row", { name: "Đào đất tạo hình hồ Đào đất" })
    .getByRole("cell")
    .nth(2)
    .click();
  await page
    .getByRole("row", { name: "Thi công định hình khuôn hồ." })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Thi công đáy hồ Thi công đáy" })
    .locator("a")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("button", { name: "collapsed Hệ thống bơm" }).click();
  await page.locator("div:nth-child(6) > .my-2 > button").first().click();
  await page
    .getByLabel("Thêm thiết bị")
    .getByText("1", { exact: true })
    .click();
  await page
    .getByLabel("Thêm thiết bị")
    .getByText("2", { exact: true })
    .click();
  await page
    .getByLabel("Thêm thiết bị")
    .getByText("3", { exact: true })
    .click();
  await page.getByText("4", { exact: true }).click();
  await page
    .getByRole("row", { name: "Máy lọc trống tự động Thiết b" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Bơm Atman HAS-20 (125W) Bơm" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Bơm phụ Jebao Bơm phụ hỗ trợ" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Jmat lọc Vật liệu lọc thô Thêm" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Bioball Vật liệu lọc sinh học" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Chổi lọc Lọc thô ngăn rác Thêm" })
    .locator("div")
    .nth(1)
    .click();
  await page
    .getByLabel("Thêm thiết bị")
    .getByText("1", { exact: true })
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page
    .getByRole("row", { name: "Máy lọc trống tự động Thiết b" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Máy lọc trống tự động Thiết b" })
    .getByRole("spinbutton")
    .first()
    .fill("012000000");
  await page
    .getByRole("row", { name: "Bơm Atman HAS-20 (125W) Bơm" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Bơm Atman HAS-20 (125W) Bơm" })
    .getByRole("spinbutton")
    .first()
    .fill("02200000");
  await page
    .getByRole("row", { name: "Bơm phụ Jebao Bơm phụ hỗ trợ" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Bơm phụ Jebao Bơm phụ hỗ trợ" })
    .getByRole("spinbutton")
    .first()
    .fill("01500000");
  await page
    .getByRole("row", { name: "Jmat lọc Vật liệu lọc thô 0 1" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Jmat lọc Vật liệu lọc thô 0 1" })
    .getByRole("spinbutton")
    .first()
    .fill("0150000");
  await page
    .getByRole("row", { name: "Jmat lọc Vật liệu lọc thô 0 1" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Jmat lọc Vật liệu lọc thô" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("05");
  await page
    .getByRole("row", { name: "Bioball Vật liệu lọc sinh học" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Bioball Vật liệu lọc sinh học" })
    .getByRole("spinbutton")
    .first()
    .fill("0300000");
  await page
    .getByRole("row", { name: "Bioball Vật liệu lọc sinh học" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Bioball Vật liệu lọc sinh học" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("02");
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .click();
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .fill("0100000");
  await page
    .getByRole("row", { name: "Chổi lọc Lọc thô ngăn rác 0 1" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Chổi lọc Lọc thô ngăn rác" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("04");
  await page.locator("div:nth-child(6) > .my-2 > button:nth-child(2)").click();
  await page
    .getByRole("row", { name: "Thi công hệ thống lọc. Thi cô" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Lắp đặt hệ thống nước Lắp ống" })
    .getByRole("cell")
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("button", { name: "collapsed Hệ thống điện" }).click();
  await page.locator("div:nth-child(7) > .my-2 > button").first().click();
  await page
    .getByLabel("Thêm thiết bị")
    .getByText("2", { exact: true })
    .click();
  await page
    .getByLabel("Thêm thiết bị")
    .getByText("3", { exact: true })
    .click();
  await page.getByText("4", { exact: true }).click();
  await page
    .getByRole("row", { name: "Tủ điện chống nước Tủ điện bả" })
    .locator("a")
    .click();
  await page.getByText("5", { exact: true }).click();
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .locator("div")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Timer hẹn giờ điện Tự động đi" })
    .locator("a")
    .click();
  await page.getByRole("button", { name: "Close" }).click();
  await page
    .getByRole("row", { name: "Tủ điện chống nước Tủ điện bả" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Tủ điện chống nước Tủ điện bả" })
    .getByRole("spinbutton")
    .first()
    .fill("01000000");
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .getByRole("spinbutton")
    .first()
    .fill("0200000");
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("02");
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .getByRole("spinbutton")
    .first()
    .fill("0500000");
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("02");
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Ổ cắm ngoài trời Chống nước" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("02");
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Đèn LED âm nước Trang trí hồ" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("02");
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .click();
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .fill("0250000");
  await page.getByRole("button", { name: "collapsed Bồn chứa nước" }).click();
  await page.locator("div:nth-child(8) > .my-2 > button").first().click();
  await page.getByText("4", { exact: true }).click();
  await page.getByText("5", { exact: true }).click();
  await page
    .getByRole("row", { name: "Van xả đáy phi 60 Thoát nước" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Ống PVC D60 5m Ống dẫn nước" })
    .locator("a")
    .click();
  await page.getByLabel("Thêm thiết bị").getByText("1").click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.locator("div:nth-child(8) > .my-2 > button:nth-child(2)").click();

  await page.getByLabel("Thêm dịch vụ").getByText("1").click();
  await page.getByRole("button", { name: "Close" }).click();

  await page.locator("div:nth-child(8) > .my-2 > button:nth-child(2)").click();
  await page.getByLabel("Thêm dịch vụ").getByText("2", { exact: true }).click();
  await page
    .getByRole("row", { name: "Thi công bồn chứa nước Đổ bê" })
    .locator("a")
    .click();
  await page.getByLabel("Thêm dịch vụ").getByText("1").click();
  await page.getByRole("button", { name: "Close" }).click();
  await page
    .getByRole("row", { name: "Van xả đáy phi 60 Thoát nước" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Van xả đáy phi 60 Thoát nước" })
    .getByRole("spinbutton")
    .first()
    .fill("0150000");
  await page
    .getByRole("row", { name: "Ống PVC D60 5m Ống dẫn nước" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .fill("299997");
  await page.getByRole("button", { name: "collapsed Cảnh quan" }).click();
  await page.locator("div:nth-child(9) > .my-2 > button").first().click();
  await page.getByText("5", { exact: true }).click();
  await page
    .getByRole("row", { name: "Đèn trang trí sân vườn Chiếu" })
    .locator("a")
    .click();
  await page
    .getByRole("row", { name: "Lưới chắn cá Chống cá nhảy ra" })
    .getByRole("cell")
    .nth(2)
    .click();
  await page.getByLabel("Thêm thiết bị").getByText("1").click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.locator("div:nth-child(9) > .my-2 > button").first().click();
  await page.getByText("5", { exact: true }).click();
  await page
    .getByRole("row", { name: "Lưới chắn cá Chống cá nhảy ra" })
    .locator("a")
    .click();
  await page.getByLabel("Thêm thiết bị").getByText("1").click();
  await page.getByRole("button", { name: "Close" }).click();
  await page
    .getByRole("row", { name: "Đèn trang trí sân vườn Chiếu" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("row", { name: "Đèn trang trí sân vườn Chiếu" })
    .getByRole("spinbutton")
    .first()
    .fill("0400000");
  await page
    .getByRole("row", { name: "Lưới chắn cá Chống cá nhảy ra" })
    .getByRole("spinbutton")
    .first()
    .click();
  await page
    .getByRole("cell", { name: "0", exact: true })
    .getByRole("spinbutton")
    .fill("0300000");
  await page
    .getByRole("row", { name: "Đèn trang trí sân vườn Chiếu" })
    .getByRole("spinbutton")
    .nth(1)
    .click();
  await page
    .getByRole("row", { name: "Đèn trang trí sân vườn Chiếu" })
    .getByRole("spinbutton")
    .nth(1)
    .fill("02");
  await page.locator("div:nth-child(9) > .my-2 > button:nth-child(2)").click();
  await page.getByLabel("Thêm dịch vụ").getByText("3").click();
  await page
    .getByRole("row", { name: "Trang trí cảnh quan Trồng cây" })
    .locator("a")
    .click();
  await page.getByLabel("Thêm dịch vụ").getByText("1").click();
  await page.getByRole("button", { name: "Close" }).click();

  await new Promise(() => {});
});
