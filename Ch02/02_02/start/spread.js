var cats = ["Tabby", "Siamese", "Persian"];
        var dogs = ["Golden Retriver", "Pug", "Schnauzer"];
        
        var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"];
        console.log(animals);
        
        function add(x=5, y=7){
            console.log(x+y);
        } 
        //add();
        
        
        function haveFun(activityName="hiking", time=3) {
            console.log(`today I will go ${activityName} for ${time} hours.`);
        }
        haveFun();