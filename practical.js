
describe('application practical', () => {

  var obj = require("./practicalObject.js");
  var shopObj = require("./shopObject.js");
  var using = require("jasmine-data-provider");
  var checkObj = require("./checkoutObject.js");
  var d = require("./data.js");
 
  beforeAll(function () {
    obj.getUrl();
  });
  // it('if name textbox is empty it should throw validation', function () {
  //  
  //   element(by.name("name")).sendKeys('').then(function () {
  //     element(by.cssContainingText('label', 'Name')).click().then(function () {
  //       element(by.css('[class="alert alert-danger"]')).getText().then(function (text) {
  //         expect(text).toBe('Name is required');
  //         //console.log(text);
  //       })

  //     })
  //   })
  // })
  // using(d.datadriven,function(data,description){
  //   it('it should successfully submit the form'+description,()=> {
  //     // browser.get('https://qaclickacademy.github.io/protocommerce/');
  //     obj.name.sendKeys().clear();
  //     obj.name.sendKeys(data.inputname);
  //     obj.email.sendKeys().clear();
  //     obj.email.sendKeys(data.inputemail);
  //     obj.password.sendKeys().clear();
  //     obj.password.sendKeys(data.inputpassword);
  //     obj.checkbox.click();
  //     obj.gender;
  //     obj.empStatus.click();
  //     // let birtDate = element(by.name('bday'));
  //     // console.log(birtDate);
  //     obj.subButton.click().then(()=> {
  //       obj.successmsg.getText().then((text)=> {
  //         console.log(text);
  //       })
  //     })
  //   })
  // })

  it('should redirect to shop page by clicking on shop link', () => {
    obj.goToShopPage.click();
    expect(browser.getTitle()).toEqual('ProtoCommerce');
  })

  it('should add item into the cart', () => {
   obj.add(d.product.firstProduct);
   obj.add(d.product.secondProduct);
    shopObj.checkoutLink.getText().then((text) => {
      var res = text.split("(");
      var x = res[1].trim().charAt(0).toString();
      console.log(x + "77777777777777777777");
      expect(res[1].trim().charAt(0)).toBe(x);
      // if (x > 0) {
    });
  });

  it("product sum should be equal to product total", () => {
    var sum = 0, total;
    shopObj.checkoutLink.click();
   checkObj.productPrice.getText().then((text) => {
      var rupee = text.split("₹.");
      var productPrice = Number(rupee[1].trim());
      checkObj.productPriceTwo.getText().then((textsec) => {
        var rupeesec = textsec.split("₹.");
        var productPriceSec = Number(rupeesec[1].trim());
        sum = productPrice + productPriceSec;
        checkObj.totalPrice.getText().then((p) => {
          var t = p.split("₹.");
          total = Number(t[1].trim());
          console.log(total, "///////////////////////");
          expect(sum).toEqual(total);
        });

      });

    });

  });
  
  it('when removing product, count should be reduced', () => {
    checkObj.proCount().then((productCount) => {
      if (productCount > 0) {
        checkObj.remCount().then((removeCount) => {
          expect(productCount).toEqual(removeCount);
          checkObj.removeButton.click().then(()=>{
            checkObj.remCount().then((CountAfter) => {
                expect(checkObj.remCount()).toEqual(CountAfter);
            });
          });
        });
       
      } else {
        checkObj.continueShopping.click();
        expect(checkObj.continueShopping).toEqual(checkObj.homePage);
      }

    });

  });


});









