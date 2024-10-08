Feature("Google Search");

Scenario("Search for CodeceptJS on Google", ({ I }) => {
	I.amOnPage("https://www.google.com"); // Googleにアクセス
	I.fillField("q", "CodeceptJS"); // 検索ボックスに入力
	I.pressKey("Enter"); // Enterキーを押す
	I.wait(1); // 1秒待つ
	I.see("CodeceptJS"); // 検索結果にCodeceptJSが表示されることを確認
});
