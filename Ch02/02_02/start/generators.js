function* director() {
    yield "three";
    yield "two";
    yield "one";
    yield "action";
}

printYield = ({ value, done}) => {
    console.log("Value: ", value, ", Done: ", done);
}

var action = director();
printYield(action.next());
printYield(action.next());
printYield(action.next());
printYield(action.next());
printYield(action.next());