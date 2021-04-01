// class defination
class A
{
    //properties
    //constructor
    constructor()
    {

    }
    
    //methods
    funA()
    {
        console.log("hello funA");
    }
}
class B extends A
{

    //properties
    //constructor
    constructor()
    {
        super();
    }
    
    
    //methods
      funB()
      {

        console.log("hello funB");
      }
}//class ending
// create an object
let r = new B();
// calling methods
 r.funA();
 r.funB();
