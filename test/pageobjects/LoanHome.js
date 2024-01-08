class LoanHome {


    get element() {
        return $('[data-testid="tabs"]');
    }

    async open() {
        await browser.url('https://www.enuygun.com/kredi');
        browser.maximizeWindow();
    }

    async checkElementDisplay() {
        console.log('Element görünür olmasını bekliyor...');
        await this.element.waitForDisplayed({ timeout: 50000 });
        console.log('Element görünür hale geldi.');

        // console.log('Element var mı?', await this.element.isExisting());
        // console.log('Element görünür mü?', await this.element.isDisplayed());
    }

    async applyVisualRegression() {
        console.log("****************************");
        const comparisonResults = await browser.checkElement($('[data-testid="tabs"]'), 'temp', {
    
            // Ek seçenekler burada belirtilebilir
        });
    
        console.log(comparisonResults + ",______________________-------------------------________________");
        console.log(`Farklılık Yüzdesi: ${comparisonResults.misMatchPercentage}%`);
        return comparisonResults;
    }
}

module.exports = new LoanHome();