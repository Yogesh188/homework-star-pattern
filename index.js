var readlineSync = require('readline-sync');
var UserInputNumber = readlineSync.question("Enter number for loop ");


for(var i=0; i<UserInputNumber;i++)
{
msg="";
 for(var j=0;j<=i;j++)
   {
    msg=msg+"*"
    }
  console.log(msg)
}
