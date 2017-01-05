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

function* eachItem(arr) {
    for(var i=0; i< arr.length; i++) {
        yield arr[i];
    }
}

var vowels = eachItem(['a', 'e', 'i', 'o', 'u']);

var abcs = setInterval(function() {
    var vowel = vowels.next();
    if(vowel.done) {
        clearInterval(abcs);
        console.log('Now I know my vowels');
    } else {
      console.log(vowel.value);  
    }
}, 1000);

