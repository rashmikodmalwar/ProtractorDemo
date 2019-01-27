describe('application client',function(){
    it('open calculator page',function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");	
        element(by.id('confirmbtn')).click();
        browser.switchTo().alert().accept();
    })
})