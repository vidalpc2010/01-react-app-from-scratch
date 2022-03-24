class Human{
    constructor(){
        this.gender='Male';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{

    // ES6 Initialize a property in a class
    constructor(){
        super();
        this.gender='Female';
        this.name='Max';
    }

    // ES7 Modern way to initialize a property in a class is simplily declare the property and not use a constructor and the keyword this, as the follow example
    // gender = 'Female';
    // name = 'Max';


    printName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printGender;
person.printName;










































class Human{
    constructor(){
        this.gender = 'male';           
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name='Max';
        this.gender='female';
    }

    printName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printName;
person.printGender;
