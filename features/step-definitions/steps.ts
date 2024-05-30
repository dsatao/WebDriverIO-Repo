import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page.js';
import ResultPage from '../pageobjects/result.page.js';

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I search with (.*) on home page$/, async (searchText) => {
    await HomePage.searchOnHomePage(searchText)
});

Then(/^I should see a result page with (.*)$/, async (message) => {
    await expect(ResultPage.resultPageMessage).toBeExisting();
    await expect(ResultPage.resultPageMessage).toHaveTextContaining(message);
});

