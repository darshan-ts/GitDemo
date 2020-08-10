var a=4;
var b=["hello","world",4,"goodbye"];
console.log(b.length + " is the length of the array");

for(var i=0;i<b.length;i++)
	{
	console.log(b[i]);
	
	}


var c=new Array();

c[0]="goodbye";
	c[1]="4";
		c[2]="world";
			c[3]="hello";
				c[4]="bad";
// length-1 will be maximum size of index
				
				console.log(c.length + " is the length of the array called c");

				for(var i=0;i<c.length;i++)
					{
					console.log(c[i]);
					}

				
console.log("Printing the array values in reverse order");
for(var j=c.length-1;j>=0;j--)
	{
	console.log(c[j]);
	}



