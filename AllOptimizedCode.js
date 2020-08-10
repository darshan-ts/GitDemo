describe('Protractor All Demo',function(){
	
	function Add(a,b){
		
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);	
		element(by.id("gobutton")).click();
		
	}
	
	it('AllOptimized',function(){
		
		
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		Add(2,3);
		Add(5,8);
		Add(2,5);
		Add(7,3);
		Add(2,9);
		Add(6,9);
		Add(14,56);
		Add(97,9875);
		
		
		
		
		/*element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			
			console.log(text);
	})*/
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			
			console.log(text);
		})
		
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(values){
				console.log(values);
			})
			
		})
		
		element.all(by.repeater("result in memory")).each(function(item)
		{
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				
				console.log(text);
		})
		})
			
		})
		
})

			