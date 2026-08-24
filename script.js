document.getElementById("admissionForm").addEventListener("submit", function(event){
	event.preventDefault();
	
	let name= document.getElementById(studentName).value;
	let gender= document.getElementById("gender").value;
	let studentClass= document.getElementById("class").value;
	let parent= document.getElementById("parentName").value;
	let phone= document.getElementById("phone"). value;
	let agree= document.getElementByI("agree").value;

	if(name== ""){
		alert("Please enter students name");
		return;
	}
	if(gender== ""){
		alert("Please select gender");
		return;
	}	
	if(studentClass== ""){
		alert("Please select class");
		return;
	}
	if(parent== ""){
		alert("please enter parents name");
		return;
	} 
	if(phone== ""){
		alert("Please enter phone");
		return;
	}
	if(!agree)
		alert("Please confirm the information provided");
		return;
	
	alert("Admission Application Submitted Successfully!");
	
	document.getElementById("admissionForm").reset();
}
); 