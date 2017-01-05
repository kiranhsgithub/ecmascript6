var nameBuilder = function (firstName= "John", purshasePrice=100) {
            var shipping = 5.95;
			console.log(`Hello ${firstName}`);
            console.log(
            `Hi ${firstName}, 

                Thanks for buying from us!
                Purchase Price: $${purshasePrice}
                Shipping      : $${shipping}
                Total         : $${purshasePrice + shipping}
    
        `);
		};

		//nameBuilder();