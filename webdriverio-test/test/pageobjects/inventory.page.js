import loginPage from './loginPage.js'
class InventoryPage {
    
   

    get menuButton() {
        return $('#react-burger-menu-btn');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    get productSortDropdown() {
        return $('[class="product_sort_container"]');
    }
    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }
    get addToCartButton2() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get addToCartButton3() {
        return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    
    get cartButton() {
        return $('[class="shopping_cart_link"]');
    }

    get twitterIcon() {
        return $('[href="https://twitter.com/saucelabs"]');
    }

    get facebookIcon() {
        return $('[href="https://www.facebook.com/saucelabs"]');
    }

    get linkedinIcon() {
        return $('[href="https://www.linkedin.com/company/sauce-labs/"]');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    get finishButton() {
        return $('#finish');
    }

    get backHomeButton() {
        return $('#back-to-products');
    }

    get removeButton() {
        return $('#remove-sauce-labs-backpack')
    }

    get continueShoppingBtn() {
        return $('#continue-shopping')
    }

    get cancelButton() {
        return $('#cancel')
    }

    open() {
        loginPage.open();
        loginPage.login('standard_user', 'secret_sauce');
        
    }

    sortProductsBy(option) {
        
        this.productSortDropdown.selectByVisibleText(option);
    }
    addProductToCart() {
        this.addToCartButton.click();
    
    }
       
addtwoProductsToCart() {
    this.addToCartButton.click();
    this.addToCartButton2.click();
}

addThirdProductToCart() {
    this.addToCartButton3.scrollIntoView();
    this.addToCartButton3.click();
}

    openCart() {
        this.cartButton.click();
    }
    async footerLinks() {
        const mainTab = await browser.getWindowHandle();
        await this.twitterIcon.click();
        await browser.pause(2000);
        await browser.switchToWindow(mainTab);
        await browser.pause(2000);
        await this.facebookIcon.click();
        await browser.pause(2000);
        await browser.switchToWindow(mainTab);
        await browser.pause(2000);
        await this.linkedinIcon.click();
        await browser.pause(2000);
    }
        
       startCheckout() {
        this.checkoutButton.click();
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.postalCodeInput.setValue(postalCode);
    }

    continueCheckout() {
        this.continueButton.click();
    }

    finishCheckout() {
        this.finishButton.click();
    }

    navigateBackHome() {
        this.backHomeButton.click();
    }

    async logout() {
        const menuButton = this.menuButton;
        const logoutButton = this.logoutButton;

        await menuButton.click();
        await browser.pause(3000); // Опціональна затримка
        await logoutButton.click();
        await browser.pause(3000); // Опціональна затримка
    }
   removeProduct() {
       this.removeButton.click();
   }
   continueShopping() {
    this.continueShoppingBtn.click();
   }
   
   cancelCheckout() {
       this.cancelButton.click();
   }
}


export default new InventoryPage();
