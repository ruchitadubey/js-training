// class defination
class MyClass
{

    //1.properties
     contact={}; //blank object

    //2.constructor
     constructor(y)
     {

        console.log("info");
        this.contact = y;
        this.getContact();

     }
    //3.method
     getContact()
     {

       console.log(this.contact); 
     }

}// class end

// creating object of class

let c = {
   name:"ruchita",
   addr:"neemuch",
   mob:"256773872982",
   email:"bhdchuc@gamil.com"
};
let ob = new MyClass(c);

// call the method using object
//object.member
ob.getContact();
