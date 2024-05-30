import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputSearchBox() {
        return $('#twotabsearchtextbox');
    }

    public get btnSearch() {
        return $('input[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search using searchText and password
     */
    public async searchOnHomePage(searchText: string) {
        await this.inputSearchBox.setValue(searchText);
        await this.btnSearch.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('home');
    }
}

export default new HomePage();
