//cashe variable
let bill = document.getElementById("bill"),
    servQuality = document.getElementById("serv-quality"),
    numOfPeople = document.getElementById("people-num"),
    button      = document.getElementById("calculate"),
    form        = document.getElementById("tipForm"),
    result= document.getElementById("result");
    
 
//make a class 
class Tip {
	constructor(bill,servQuality,numOfPeople){
		this.bill = bill;
		this.servQuality = servQuality;
		this.numOfPeople = numOfPeople;
		}
	
// method for calculate the value
calculate(){

	let value = (this.bill/this.numOfPeople)*this.servQuality;
	value = Math.round(value*100)/100;
	return value;
}
 
// method wich making check on input
 checkInput(){
	if (bill.value=="" || numOfPeople.value=="") {
		window.alert("please enter your data");
		result.style.display="none";
	}
	else if (bill.value <= 0 || numOfPeople.value <= 0){
		window.alert("please enter posive number or num greater than zero");
		result.style.display="none";
	}
		else {
		this.calculate()
		result.style.display = "block";
}
}
	//clear data
	clearData(){
		bill.value = " " ;
		numOfPeople.value = " " ;
	}
};
// to display the result
form.addEventListener("submit" , function(e){
e.preventDefault();
let calculator = new Tip(bill.value,numOfPeople.value,servQuality.value);
calculator.checkInput();
let showData = result;
let temp = "";
temp+= `<h3> the amount is` + calculator.calculate()+ `$</h3>`;
showData.innerHTML =temp;
});

resetBtn.addEventListener("click" , function(e) {
	e.preventDefault();
	//reset data
	form.reset();
	result.style.display = "none";



});
