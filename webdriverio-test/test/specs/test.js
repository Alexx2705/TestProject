
import loginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventory.page.js';


describe('My Login application', () => {

/*Test Case 1, Valid Login*/

    xit('should login with valid credentials', async () => {
    await loginPage.open()

    await loginPage.login('standard_user', 'secret_sauce')
    await browser.pause(3000);
    })


    /*Test Case 2, Login with invalid password*/

xit('should try login with invalid password', async () => {
    await loginPage.open()

    await loginPage.login('standard_user', 'secret')
    await browser.pause(3000);
    })

/*Test Case 3, Login with invalid login*/

xit('should try login with invalid login', async () => {
    await loginPage.open()

    await loginPage.login('standard', 'secret_sauce')
    await browser.pause(3000);
    })
});

describe('Inventory page', () => {

    before(() => {
        InventoryPage.open();
    });


    /* Test Case 4, Logout */

xit('should logout', async () => {

await InventoryPage.logout();
await browser.pause(3000);
})

/* Test Case 5, Saving the card after logout */

xit('should save the card after logout', async () => {
    
    await InventoryPage.addProductToCart();
    await InventoryPage.logout();
    await loginPage.login('standard_user', 'secret_sauce');
    await browser.pause(3000);
    await InventoryPage.cartButton.waitForClickable();
    await InventoryPage.openCart();
    await browser.pause(3000);

});

/* Test Case 6, Sorting */

xit('should verify sorting options', async () => {
    
    const sortingOptions = [
        'Price (low to high)',
        'Price (high to low)',
        'Name (A to Z)',
        'Name (Z to A)'
    ];

    for (const option of sortingOptions) {
        
        await InventoryPage.sortProductsBy(option);
        await browser.pause(3000);
    }
});

/* Test Case 7, Footer Links */

xit('should test footer links', async () => {
  await InventoryPage.footerLinks();
});

/* Test Case 8, Valid Checkout */

xit('should test checkout', async () => {
await InventoryPage.addProductToCart();
await browser.pause(2000);
await InventoryPage.openCart();
await browser.pause(3000);
await InventoryPage.startCheckout();
await browser.pause(3000);
await InventoryPage.fillCheckoutForm('Andrew', 'Muzychuk', '33018');
await browser.pause(3000);
await InventoryPage.continueCheckout();
await browser.pause(2000);
await InventoryPage.finishCheckout();
await browser.pause(2000);
await InventoryPage.navigateBackHome();
await browser.pause(2000);
});

/* Test Case 9, Checkout without products */

xit('should test checkout without products', async () => {
await browser.pause(2000);
await InventoryPage.openCart();
await browser.pause(2000);
await InventoryPage.startCheckout();
await browser.pause(2000);
});

/* My Test Cases */

/* Test Case 10, Removing the product from the card */

it('should remove the product from the card', async () => {

await browser.pause(2000);
await InventoryPage.addtwoProductsToCart();
await browser.pause(2000);
await InventoryPage.openCart();
await browser.pause(2000);
await InventoryPage.removeProduct();
await browser.pause(2000);
});


/* Test Case 11, Checking return buttons */

xit('should test return buttons', async () => {
   
    await browser.pause(2000);
    await InventoryPage.addtwoProductsToCart();
    await browser.pause(2000);
    await InventoryPage.openCart();
    await browser.pause(2000);
    await InventoryPage.continueShopping();
    await browser.pause(2000);
    await InventoryPage.addThirdProductToCart();
    await browser.pause(2000);
    await InventoryPage.openCart();
    await browser.pause(2000);
    await InventoryPage.startCheckout();
    await browser.pause(2000);
    await InventoryPage.cancelCheckout();
    await browser.pause(2000);
    
});  
});
