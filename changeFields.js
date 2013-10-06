/*
Object student_info: the information about one student. Currently the information is predefined; however, in reality, this object should be obtained from the server using ajax. Note that the values in student_info should correspond to the actual values in the HTML page. For example, the value of "sex", rather than being "male" or "m", should be "0", since the value in the HTML page for "male" is "0".
	key: the attributes of the student;
	value: the value in the HTML page corresponding to the attribute.
*/

var student_info = {
	"first_name": "TestFirstName", 
	"last_name": "TestLastName",
	"age": 33,
	"citizenship": "China",
	"permanent_resident": "China",
	"country_of_birth": "China",
	"has_used_other_names": "1",
	"sex": "1",
	"birth_month": "1",
	"cell_phone_number": 11,
	"alternate_phone_number": 22,
	"email": "test@test.edu",
	"home_address": "",
	"zip_code": "",
	"is_mailing_address_same_as_home_address": true,
	"mailing_address": "",
	//"effective_date_for_mailing_address": "",
	"academic_intereste": 1,
	"carreer_interest": "",
	"need_fa": true,
	"need_scholarship": true,
	"full_time_student": true,
	"need_degree":true,
	"need_campus_housing": true,
	"highest_degree": "",
	"nationality": "",
	"years_living_in_US": 1,
	"birth_city": ""
	//etc
};

/*
Function replaceAt: replaces the "*" in a string with some substitution.
Inputs:
	index: index of the "*".
	string: the string.
	substitution: the string to replace "*".
Outputs:
	the string after replacement.
*/


function replaceAt(index, string, substitution){
	return string.substr(0,index) + substitution + string.substr(index+1);
};


/*
Function changeField: sets the value of the selected element to value.
Inputs:
	field_info: an object that stores the information of all fields in the web page.
	student_info: an object that stores the information of the student.
Outputs:
	none.
*/

function changeField(field_info, student_info){
	var container = field_info.container;
	var selector = field_info.selector;

	if (selector.indexOf("*")>-1){
		selector = replaceAt(selector.indexOf("*"), selector, student_info[field_info.value]);
	}

	var type = field_info.type;
	if (type == 'replace') {
		var value = student_info[field_info.value];
		var obj = $(container).children(selector).first();
		obj.val(value);
	}
	else{
		if (type == 'click'){
			//var injectedCode = '$("#month_ques_181_chzn").children("a.chzn-single").first().trigger("mousedown")';
			var injectedCode = '$("' + container + '").find("' + selector + '").first().trigger("click")';

		}
		else if (type == 'mousedown'){
			var injectedCode = '$("' + container + '").find("' + selector + '").first().trigger("mousedown")';
		}
		else if (type == 'mouseup'){
			var injectedCode = '$("' + container + '").find("' + selector + '").first().trigger("mouseup")';
		}

		var script = document.createElement('script');
		script.appendChild(document.createTextNode('('+ injectedCode +')();'));
		(document.body || document.head || document.documentElement).appendChild(script);
	}

};

/*
Function changeFields: change the values of the fields in the page.
Inputs:
	fields_info & student_info: the objects defined above.
Outputs:
	none.
*/

function changeFields(fields_info, student_info){
	
	for (index = 0;index < fields_info.length; index++){
		changeField(fields_info[index], student_info);
	}

};

changeFields(fields_info, student_info);
