function checkoutModule()
{
    this.productPrice = element(by.tagName("tbody")).element(by.css("tr:nth-child(1)")).element(by.css("td:nth-child(4) strong"));
    this.productPriceTwo =element(by.tagName("tbody")).element(by.css("tr:nth-child(2)")).element(by.css("td:nth-child(4) strong"));
this.totalPrice = element(by.css("tr:nth-child(3) td h3 strong")); 

this.proCount = function()
{
return element.all(by.id("exampleInputEmail1")).count();
};

this.remCount = function(){
 return element.all(by.buttonText("Remove")).count();

};

this.removeButton = element(by.buttonText("Remove"));
this.continueShopping = element(by.buttonText(" Continue Shopping"));
this.homePage = element(by.cssContainingText("h1", "Shop Name"));
}
module.exports =new checkoutModule();