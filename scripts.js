//Make a form that can capture and store employees; First Name, Last Name, Employee Number, Title, Last Review Score, and Salary. 
//Store that information in an object.

//need to create a click handler that will take the data and convert it to a object

						// var newEl, newText, position;
						// //Capture the position of insertion into the DOM
						// position = document.getElementById('content');


$(document).ready (function(){
	var $form = $('#empInfo');
	var $FirstName= $('#FirstName');
	var $LastName= $('#LastName');
	var $EmployeeNumber= $('#EmployeeNumber');
	var $Title = $('#Title');
	var $Rating= $('#Rating');
	var $Salary= $('#Salary');
	var $content= $("#content");


					// var form =  document.getElementById('empInfo')
					// var employeeList =[]
					// var employee = {} 

	$form.on("submit", function(e){
		e.preventDefault();
		var employee = new Employee (
			$FirstName.val(),
			$LastName.val(),
			$EmployeeNumber.val(),
			$Title.val(),
			$Rating.val(),
			$Salary.val()
			);
		appendEmployee(employee);	
	});



							// $( "#empInfo" ).on('click', function( event ) {
							// 	event.preventDefault();
							// 	var elements = this.elements;
							// 	employee.firstName = elements.firstName.value;
							// 	employee.lastName = elements.lastName.value;
							// 	employee.empNum = elements.employeeNumber.value;
							// 	employee.title = elements.title.value;
							// 	employee.rating = elements.rating.value;
							// 	employee.salary = elements.salary.value;
						 //        appendEmployee();
	 var Employee = function(firstName, lastName, empNum, title, rating, salary) {
	 	this.firstName = firstName;
	 	this.lastName = lastName;
	 	console.log(this.lastName);
	 	this.employeeNumber = empNum;
	 	this.title = title;
	 	this.rating = rating;
	 	this.salary = salary	
	 };			 

							// function createButton(){
							// 	var remBtn = document.createElement("button");
							// 	var t = document.createTextNode("Remove");
							// 	remBtn.appendChild(t);
							// 	newEl.appendChild(remBtn);	
							// };	
	function appendEmployee(emp){
		var $li = $('<li>');

		console.log(emp.rating);
		$li.attr('class', "c" + emp.rating);
		$li.text(
			emp.firstName + ' ' + 
			emp.lastName + ', ' + 
			emp.employeeNumber + ', ' + 
			emp.title + ', ' + 
			emp.rating + ' ' + 
			emp.salary
			);

		var $button = $('<button>');
		$button.text('Delete');
		$button.attr('class','js-delete');
		//$button.attr('id', emp.empNum);

		$li.append($button);

		$content.append($li);
	};

	$content.on('click', '.js-delete', function(e){
		
		e.preventDefault();
		$(this).parent().remove();
	});
	

							// function ratingColor(obj){
							// switch (obj.lastReviewScore){
							// 	case 5:
							// 	$(this).addClass("five");
							// 	case 4:
							// 	$(this).addClass("four");
							// 	case 3:
							// 	$(this).addClass("three");
							// 	case 2:
							// 	$(this).addClass("two");
							// 	case 1:
							// 	$(this).addClass("one");
							// 	default:
							// 	$(this).addClass("other");
							// };

						 	// 	var newEl = document.createElement("li");
						  //   	var newText = document.createTextNode(employee.fname+ " " +employee.lname+ ", "+employee.title+": #"+employee.eeNumber+ ", review: "+employee.lastReviewScore+", salary: " +employee.salary);
								// newEl.appendChild(newText);
								// var position = document.getElementById("content");
								// position.appendChild(newEl);

							// createButton();
							// ratingColor(employee);
							// $('<input type="button" value="Remove">').attr('id','remBtn').appendTo('this.li');


						})


//for(var i = 0; i < employees.length; i++){
  //newEl = document.createElement('li') + " " + remBtn;
  //newText = document.createTextNode(employees[i]);
  //newEl.appendChild(newText);
  //position.appendChild(newEl);
  //console.log (employees[i]);
//};









//Then, with that information captured, construct a list (UL) that populates with the most current employee information. 
//Meaning that there should be a full list of employees represented on the screen.

//Not only should the employee information be present, but also add a 'remove' button grouped next to each employee’s information. 
//Clicking that button should remove that specific employee.

//In the review score section, make sure to put some sort of color indicator based on their review. 
//The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor.

//The system need not persist when the page refresh. Meaning that a page refresh will reload the entire screen.