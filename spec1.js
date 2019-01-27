describe('application client',function(){
    function CalValue(a,b,c)
    {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
       element.all(by.tagName('option')).each(function(item){
        item.getAttribute("value").then(function(values){    
            if(values==c)
            {
               item.click();
            }
        })
       
        element(by.id("gobutton")).click();
       })
       
    }
	it('open calculator page',function(){
browser.get("http://juliemr.github.io/protractor-demo/");	
	})

	it('It should calculate the value',function(){
        CalValue(4,5,"Multiplication");
        exp
        element.all(by.repeater('result in memory')).each(function(text){
               text.element(by.css('td:nth-child(3)')).getText().then(function(text){
                   console.log(text);
               })
        })
	
		})
	})

	
