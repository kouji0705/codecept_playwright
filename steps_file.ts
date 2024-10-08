// biome-ignore lint/complexity/useArrowFunction: <explanation>
module.exports = function () {
	return actor({});
};

const { I } = inject();

Given("I am on the Google search page", () => {
	I.amOnPage("https://www.google.com");
});

When("I fill in the search box with {string}", (searchQuery) => {
	I.fillField("q", searchQuery);
});

When("I press Enter", () => {
	I.pressKey("Enter");
});

Then("I see {string} in the results", (text) => {
	I.see(text);
});
