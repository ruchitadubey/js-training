//class defination
class A {

    //properties
    x = 10;
    y = 20;
    //constructor
    //method
    Add() {
        console.log("the sum is:-" + (this.x + this.y));

    }
} //class A ending
class B extends A {
    //properties
    r = 30;
    s = 20;
    //constructor
    //method
    Sub() {
        console.log("the subtraction is:-" + (this.r - this.s));


    }

}//class B ending
class C extends B {
    //properties
    m = 10;
    n = 5;
    //constructor
    //method 
    Multi() {
        console.log("multiplication is:-" + (this.m * this.n));
    }

}// class C ending
class D extends C {
    //properties
    d = 50;
    e = 3;
    //constructor
    //method
    Devision() {

        console.log("the devision is:-" + (this.d / this.e));

    }

}// class D ending
class E extends D {
    //properties

    //constructor


    //method
    Myfun2() {
        console.log(`this is class E `);
    }
}// ending 
class F extends E {
    //properties
    fname = "ruchita-";
    lname = "dubey";
    //constructor
    //method
    myName() {

        console.log("i am " + (this.fname + this.lname));
    }

} //end F
class G extends F {

    //properties
    a = 10;
    b = 20;
    c = 30;
    //constructor

    //method
    fadd() {

        console.log("addition is=" + (this.a + this.b + this.c));


    }
}//end
class H extends G{

    //property
    //constructor
    //method
    FunH()
    {
        console.log("class H");
    }
}//end
class I extends H{

    //property
    //constructor
    //method
    FunI()
    {
        console.log("class I");
    }
}//end
class J extends I{

    //property
    //constructor
    //method
    FunJ()
    {
        console.log("class J");
    }
}//end
class K extends J{

    //property
    //constructor
    //method
    FunK()
    {
        console.log("class K");
    }
}//end
class L extends K{

    //property
    //constructor
    //method
    FunL()
    {
        console.log("class L");
    }
}//end
class M extends L{

    //property
    //constructor
    //method
    FunM()
    {
        console.log("class M");
    }
}//end
class N extends M{

    //property
    //constructor
    //method
    FunN()
    {
        console.log("class N");
    }
}//end
class O extends N{

    //property
    //constructor
    //method
    FunO()
    {
        console.log("class O");
    }
}//end
class P extends O{

    //property
    //constructor
    //method
    FunP()
    {
        console.log("class P");
    }
}//end
class Q extends P{

    //property
    //constructor
    //method
    FunQ()
    {
        console.log("class Q");
    }
}//end
class R extends Q{

    //property
    //constructor
    //method
    FunR()
    {
        console.log("class R");
    }
}//end
class S extends R{

    //property
    //constructor
    //method
    FunS()
    {
        console.log("class S");
    }
}//end
class T extends S{

    //property
    //constructor
    //method
    FunT()
    {
        console.log("class T");
    }
}//end
class U extends T{

    //property
    //constructor
    //method
    FunU()
    {
        console.log("class U");
    }
}//end
class V extends U{

    //property
    //constructor
    //method
    FunV()
    {
        console.log("class V");
    }
}//end
class W extends V{

    //property
    //constructor
    //method
    FunW()
    {
        console.log("class W");
    }
}//end
class X extends W{

    //property
    //constructor
    //method
    FunX()
    {
        console.log("class X");
    }
}//end
class Y extends X{

    //property
    //constructor
    //method
    FunY()
    {
        console.log("class Y");
    }
}//end
class Z extends Y{

    //property
    //constructor
    //method
    FunZ()
    {
        console.log("class Z");
    }
}//end

// object creation
let obj = new Z();
obj.fadd();
obj.Add();
obj.Sub();
obj.Multi();
obj.Devision();
obj.Myfun2();
obj.myName();
obj.FunH();
obj.FunI();
obj.FunJ();
obj.FunK();
obj.FunL();
obj.FunM();
obj.FunN();
obj.FunO();
obj.FunP();
obj.FunQ();
obj.FunR();
obj.FunS();
obj.FunT();
obj.FunU();
obj.FunV();
obj.FunW();
obj.FunX();
obj.FunY();
obj.FunZ();



