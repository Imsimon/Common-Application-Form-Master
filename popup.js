$(function(){

	/*
	The main function
	*/
	function main() {
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
				console.log(studentDatas[i].id);
				$('#class-list').append('<li id ="'+ i.toString() +'"><a id = "'+studentDatas[i].id +'" href = "#">'+ (i+1).toString() +'</a></li>');
			}
		}
		else{
			$('#notification-board').prepend('<h3>Sorry, no students available.</h3>');
		}
	}

	function fetchConselorClazzssyncSuccess(r)
	{
		//classDatas is an array			
		var clazzDatas = r.clazzDatas;
		var length = clazzDatas.length;
		if (length >0){
			$('#notification-board').prepend('<h3>Class List:</h3>');
			for (var i=0; i<length; i++){
				$('#class-list').append('<li id ="'+ i.toString() +'"><a id = "'+clazzDatas[i].id +'" href = "#">'+ (i+1).toString() +'</a></li>');
			}
		}
		else{
			$('#notification-board').prepend('<h3>Sorry, no class available.</h3>');
		}
	}

	function fetchUserIDsyncSuccess(r)
	{
		request = new RequestManager();	
		data = {id: r.id, schoolid: r.schoolid};
		request.FetchConselorClazzssync(Obj2str(data),fetchConselorClazzssyncSuccess, error);
	}
	
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

	$('#class-list').on('click','a',function(e){
		request = new RequestManager();
		e.preventDefault();
		data = {id: $(this).attr('id'), schoolid: "0"};
		request.FetchConselorStudentsByClazzsync(Obj2str(data), FetchConselorStudentsByClazzsyncSuccess, error);
	});
	
	$('#fill-the-form').click(function() {
		chrome.tabs.executeScript(null, {file: "fields_info.js"});
		chrome.tabs.executeScript(null, {file: "changeFields.js"});
	});

	$('#login').click(function(e) {
		e.preventDefault();
		request = new RequestManager();	
		var userName = $("input[type='text'][name='userName']").val();
		var password = hex_md5($("input[type='text'][name='password']").val());
		var data = {loginname: userName, loginpwd: password};
		
		request.Loginsync(Obj2str(data), loginSuccess, error);
	});

	main();

});
