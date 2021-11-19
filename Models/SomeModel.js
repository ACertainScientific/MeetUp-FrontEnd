class SomeModel{
    constructor(param1, param2){
        this.param1 = param1
        this.param2 = param2
    }

    static hello(params) {
        console.log("Hello! " + this.param1)
    }
}

// sample = new SomeModel("123",123)
sample.hello()