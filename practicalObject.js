function ObjectModule()
{
    this.name = element(by.name('name'));
    this.email = element(by.name('email'));
    this.password = element(by.id('exampleInputPassword1'));
    this.checkbox = element(by.id('exampleCheck1'));
    this.gender = element(by.cssContainingText('option','Female'));
    this.empStatus = element(by.id('inlineRadio2'));
    this.subButton = element(by.buttonText('Submit'));
    this.successmsg  = element(by.css("div[class*='success']"));
    this.goToShopPage = element(by.linkText('Shop'));
    this.getUrl=function()
{
    browser.get('https://qaclickacademy.github.io/protocommerce/');
};

 this.add = function(selectedItem) {
    element.all(by.tagName('app-card')).each((proItem) => {
      proItem.element(by.css("h4 a")).getText().then((product) => {
        if (product == selectedItem) {
          proItem.element(by.buttonText('Add')).click();
        };
      });

    });

  };


};

module.exports = new ObjectModule();
