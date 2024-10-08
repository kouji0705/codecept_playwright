import { setHeadlessWhen } from "@codeceptjs/configure";

setHeadlessWhen(false); // ヘッドレスモードを切り替える

export const config = {
	// tests: "./*_test.ts",
	output: "./output",
	helpers: {
		Playwright: {
			url: "https://www.google.com",
			show: true,
			browser: "chromium",
		},
	},
	gherkin: {
		features: "./features/*.feature", // Featureファイルの場所
		steps: ["./steps_file.ts"], // ステップ定義ファイルの場所
	},
	include: {
		I: "./steps_file.ts", // steps_fileを含める
	},
	bootstrap: null,
	mocha: {},
	name: "codecept_playwright_project",
	plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
	},
	typescript: true, // TypeScriptを有効化
};
