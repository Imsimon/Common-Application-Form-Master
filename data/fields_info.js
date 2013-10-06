/*
Array fields_info: an array of field_info objects.
	Object field_info:
		container: the id of the container question;
		selector: the id of the field that needs to be changed;
		type: type of change. There are only 4 types of changes for now: replace, click, mouseup, mousedown.
		value: the keys in student_info object.
IMPORTANT:
	if the id of the selector contains some value in student_info, please change that value to "*". The program will recognize the "*" sign and change it to the corresponding value stored in student_info. In this way, we can avoid duplicating codes. Please look at one of the field_infos below where "container" = "#container_ques_181".
*/

var fields_info = [
	{
		"container": "#container_ques_173",
		"selector": "#text_ques_173",
		"type": "replace",
		"value": "first_name"
	},

	{
		"container": "#container_ques_175",
		"selector": "#text_ques_175",
		"type": "replace",
		"value": "last_name"
	},
	
	//below is an example that part of the selector is changed to "*". Please look at the documentation above.	
	{
		"container": "#container_ques_181",
		"selector": "#month_ques_181_chzn_o_*",
		"type": "mouseup",
		"value":"birth_month"
	}

];
