
describe("Page object Mechanism", function() {
  var obj= require("./jsobjectsdemo.js");
  var using=require('jasmine-data-provider');
  var d=require("./data.js"); //declare require to cache onject from data.js scripts

        beforeEach(function(){
          obj.getURL();  });
          //desc stores sub-object name. for every iteration one dataset is picked
        using(d.Datadriven, function (data, firstinput) {
          it("Testing calc functionality", function() {
            /*browser.get("https://google.com")  - should throw error , website is non-angular& */
            browser.get("https://juliemr.github.io/protractor-demo/");
            
            obj.firstinput.sendKeys("data.firstinput");
            obj.secondinput.sendKeys("data.secondinput")
            obj.goButton.click(); //tagname[:attribute=''value']
        
            expect(obj.result.getText()).toBe("data.result");
           obj.result.getText().then(function(text){ 
             console.log(text);
             browser.sleep(4000);
          })
            }); //element is an object exposed by protractor to identify elements on the DOM/
            });
 
  });
 

