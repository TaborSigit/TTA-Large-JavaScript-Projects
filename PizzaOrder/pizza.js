function getReceipt () {
    var text1 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1); 
};

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if(meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = runningTotal + meatTotal;
    // console.log("total selected meat items: "+meatCount);
	// console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	// console.log("meat text1: "+text1);
    // console.log("Purchase Total: "+"$"+runningTotal+".00");
    getVeggies(runningTotal, text1);
}; 

function getVeggies(runningTotal, text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        if(veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            text1 = text1+veggieArray[k].value+"<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount -1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = runningTotal + veggieTotal;
    getCheese(runningTotal, text1);
};

function getCheese(runningTotal, text1) {
    var cheeseTotal = 0;
    var selectedCheese = [];
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var j=0; j < cheeseArray.length; j++) {
        if (cheeseArray[j].checked) {
            selectedCheese = cheeseArray[j].value;
        }
        if (selectedCheese === "Extra cheese") {
            cheeseTotal = 3;
        }
    }
    text1 = text1+selectedCheese+"<br>";
    runningTotal = (runningTotal + cheeseTotal);
    getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
    }
    getCrust(runningTotal,text1)
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

// This code clears the form selections to their defaults and then sets the 
// corresponding div's CSS opacity to 0, effectively hiding it from view.
function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};


