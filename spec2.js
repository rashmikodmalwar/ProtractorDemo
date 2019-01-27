import { element, protractor } from "protractor";

describe('application client',function(){
it('open calculator page',function(){
    browser.get("http://posse.com/");	
        })

        it('Search Places',function(){
            element(by.model('userInputQuery')).sendKeys('park');
          browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys('London')).perform();
          browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
          browser.actions().sendKeys(protractor.Key.ENTER).perform();

        })
    })