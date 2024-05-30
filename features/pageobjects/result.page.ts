import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get resultPageMessage() {
        return $('.a-color-state.a-text-bold');
    }
}

export default new ResultPage();
