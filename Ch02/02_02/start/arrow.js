var studentList = students =>  console.log(students);

studentList(["Joe", "Cindy", "Jeanne"]);

var person = {
    first: "Doug",
    actions: ['bike', 'hike', 'ski', 'surf'],
    printActions: function() {
        var _this = this;
        this.actions.forEach(function(action) {
           var str = _this.first + " likes to " + action;
            console.log(str);
        });
    }, 
    passions: ['art', 'history'],
    printPassions: function() {
        this.passions.forEach(function(passion) {
           var str = this.first + " is passionate about " + passion;
            console.log(str);
        }.bind(this));
    },
    cars: ['BMW', 'Audi'],
    printCars() {
        this.cars.forEach( car => {
           var str = this.first + " owns a " + car;
           console.log(str);
        });
    }
    
}

person.printActions();
person.printPassions();
person.printCars();