

describe('gorsel karsilastirma', () => {
    beforeEach(async () => {
        await browser.url('https://www.enuygun.com/kredi/');
        await browser.maximizeWindow();

    });

    it('Elementin Görsel Karşılaştırması', async () => {
        const element = await $('[data-testid="landingHero-ihtiyac__find-loan__button"]');
        await element.waitForDisplayed({ timeout: 10000 });


        expect(await browser.checkElement(await $('[data-testid="landingHero-ihtiyac__find-loan__button"]'), 'current',{})).toEqual(0);

    });
});
