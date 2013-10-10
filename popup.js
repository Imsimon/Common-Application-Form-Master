$(function(){

	/*
	The main function
	*/
	function main() {
		/*
		Do something here to check if there's anything in chrome.storage, so that the page will remain the same from last time.
		*/
		$('#fill-the-form').attr('disabled', 'disabled');
		$('#LoadingPicture').hide();
		chrome.tabs.query({'active':true, 'lastFocusedWindow':true}, function(tabs) {
			var url = tabs[0].url;
			if (url.indexOf('www.commonapp.org')>-1){
				$('#fill-the-form').removeAttr('disabled');
			};
		});
	}


	/*
	Event handlers
	*/


	//7
	function FetchAllStudentInfossyncSuccess(r){
		chrome.storage.local.set(r,function(){
			console.log('success');
		});
	}
	
	//5
	function FetchConselorStudentsByClazzsyncSuccess(r)
	{
		$('#notification-board').children('h3').remove();
		$('#class-list').empty();
		
		
		// studentDatas is an array
		var studentDatas = r.studentDatas;
		var length = studentDatas.length;
		if (length > 0){
			$('#notification-board').prepend('<h3>Student List:</h3>');
			for (var i=0; i<length; i++){
				$('#student-list').append('<tr align="center" id ="'+ studentDatas[i].id +'"><td><a id = "'+ studentDatas[i].id +'" href = "#">'+ studentDatas[i].fname.toString() + studentDatas[i].lname.toString() +'</a></td></tr>');
				
			}
		}
		else{
			$('#notification-board').prepend('<h3>Sorry, no students available.</h3>');
		}
	}

	//3
	function fetchConselorClazzssyncSuccess(r)
	{
		//classDatas is an array			
		var clazzDatas = r.clazzDatas;
		var length = clazzDatas.length;
		if (length >0){
			$('#notification-board').prepend('<h3>Class List:</h3>');
			for (var i=0; i<length; i++){
				$('#class-list').append('<tr align="center" id ="'+ clazzDatas[i].id +'"><td><a id = "'+clazzDatas[i].id +'" href = "#">'+ (i+1).toString() +'</a></td></tr>');
			}
		}
		else{
			$('#notification-board').prepend('<h3>Sorry, no class available.</h3>');
		}
	}
	
	//2
	function fetchUserIDsyncSuccess(r)
	{
		request = new RequestManager();	
		data = {id: r.id, schoolid: r.schoolid};

		chrome.storage.local.set({schoolid: r.schoolid}, function(){
			console.log('Now school id');
		});

		request.FetchConselorClazzssync(Obj2str(data),fetchConselorClazzssyncSuccess, error);
	}
	
	// 1
	function loginSuccess(r) {
		request = new RequestManager();	
		data = {id: "0", schoolid: "0"};
		request.FetchUserIDsync(Obj2str(data),fetchUserIDsyncSuccess,error);
	}
	
	function error() {
		alert('not success');
	}

/*
	$(document).ajaxStart(function(){
		$('#LoadingPicture').show();
	}).ajaxComplete(function(){
		$('#LoadingPicture').hide();
	});
*/

	//6
	$('#student-list').on('click','a',function(e){
		request = new RequestManager();
		e.preventDefault();
		var studentId = $(this).attr('id');
		chrome.storage.local.get("schoolid", function(obj){
			schoolId = obj.schoolid;
			data = {id: studentId, schoolid: schoolId};
			request.FetchAllStudentInfossync(Obj2str(data), FetchAllStudentInfossyncSuccess, error);
			
		});
	});

	//4
	$('#class-list').on('click','a',function(e){
		request = new RequestManager();
		e.preventDefault();

		// Whether or not classID should be stored in local storage is a problem.
		var classId = $(this).attr('id');
		chrome.storage.local.get("schoolid", function(obj){
			schoolId = obj.schoolid;
			data = {id: classId, schoolid: schoolId};
			request.FetchConselorStudentsByClazzsync(Obj2str(data), FetchConselorStudentsByClazzsyncSuccess, error);
			
		});
	});
	
	$('#fill-the-form').click(function() {
		chrome.tabs.executeScript(null, {file: "fields_info.js"});
		chrome.tabs.executeScript(null, {file: "changeFields.js"});
	});

	$('#login').click(function(e) {
		e.preventDefault();
		request = new RequestManager();	
		var userName = $("input[type='text'][name='userName']").val();
		var password = hex_md5($("input[type='password'][name='password']").val());
		var data = {loginname: userName, loginpwd: password};
		
		request.Loginsync(Obj2str(data), loginSuccess, error);
	});

	main();

});
