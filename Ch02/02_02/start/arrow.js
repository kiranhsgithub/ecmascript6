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
        this.passions.forEach(function(action) {
           var str = this.first + " is passionate about " + action;
            console.log(str);
        }.bind(this));
    }
    
}

person.printActions();
person.printPassions();