// array 

let x = [
    20, //integer

    2.5,//float

    'ruchi',// string

    ["dubey"],//array of array

    {mothername: "sudha" },//object

    [    //array of object

      {
         //properties

         sibling: " sudhansh",
         age: 18,
         //methods
         getage:function()
         {

            return this.age;
         }

      },
      {
          father: "rajesh",
          age: 47
          

      }



    ] 



];// ending of array
//console.log(x[1]);
//console.log(x[5][1].father);
console.log(x[5][0].getage());