// class defination
class C {
    // properties
    name = "";
    //constructor
    constructor() {
        this.name = "ruchi";
        this.fun4();
    }
    //methods
    fun3(n) {

        console.log(`hello fun3 ${n}`);
    }
    fun4() {

        console.log(`hello fun4 ${this.name}`);
    }

}//class ending
//onject creation
let obj = new C;
//calling methods by objects
obj.fun3("any");
