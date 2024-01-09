

describe('gorsel karsilastirma', () => {
    beforeEach(async () => {
        await browser.url('https://www.enuygun.com/mevduat/');
        await browser.maximizeWindow();

    });

    // it('button', async () => {
    //     const element = await $('[data-testid="landingHeadLine-find-deposit-find-deposit-interest__button"]');
    //     await element.waitForDisplayed({ timeout: 10000 });


    //     expect(await browser.checkElement(element, 'current',{})).toEqual(95);

    // });

    // it('input alani', async () => {
    //     const element = await $('[class="DepositInterestHeroInputs_MultipleInputDiv__HMqBW"]');
    //     await element.waitForDisplayed({ timeout: 10000 });


    //     expect(await browser.checkElement(element, 'input',{})).toEqual(95);

    // });

    // it('tablo', async () => {
    //     const element = await $('[data-testid="landingPopularDepositCalculatorTable__table__carousel"]');
    //     await element.waitForDisplayed({ timeout: 10000 });


    //     expect(await browser.checkElement(element, 'tablo',{})).toEqual(95);

    // });

    it('oguz', async () => {
        const element = await $('[class="DepositInterestHeroInputs_MultipleInputDiv__HMqBW"]');
        await element.waitForDisplayed({ timeout: 10000 });


        expect(await browser.checkElement(element, 'tablo',{})).toEqual(50);

    });


});
