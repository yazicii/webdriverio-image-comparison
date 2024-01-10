

describe('image comp', () => {
    beforeEach(async () => {
        await browser.url('https://www.enuygun.com/mevduat/');
        await browser.maximizeWindow();

    });

    it('search form submit button', async () => {
        const element = await $('[data-testid="landingHeadLine-find-deposit-find-deposit-interest__button"]');
        await element.waitForDisplayed({ timeout: 10000 });


        expect(await browser.checkElement(element, 'depositBtn',{})).toBeGreaterThanOrEqual(85);

    });

    it('search form amount input', async () => {
        const element = await $('[class="DepositInterestHeroInputs_MultipleInputDiv__HMqBW"]');
        await element.waitForDisplayed({ timeout: 10000 });


        expect(await browser.checkElement(element, 'amountInput',{})).toBeGreaterThanOrEqual(85);

    });

    it('popular deposit calculator table', async () => {
        const element = await $('[data-testid="landingPopularDepositCalculatorTable__table__carousel"]');
        await element.waitForDisplayed({ timeout: 10000 });


        expect(await browser.checkElement(element, 'table',{})).toBeGreaterThanOrEqual(85);

    });

      it('email subscription', async () => {
          const element = await $('[data-testid="emailSubscriptionSection"]');
          await element.waitForDisplayed({ timeout: 10000 });


          expect(await browser.checkElement(element, 'email',{})).toBeGreaterThanOrEqual(85);

      });


});
