// fog f(g(x)) gof g(f(x))

function decorator() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

class Example {
    @decorator()
    method() {

    }

}