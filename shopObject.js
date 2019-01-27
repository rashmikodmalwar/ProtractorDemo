function ShopLinkModule() {

    this.checkoutLink = element(by.partialLinkText('Checkout'));
   
};
module.exports = new ShopLinkModule();