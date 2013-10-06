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

	function fetchConselorClazzssyncSuccess(r)
	{
		alert(r);
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
