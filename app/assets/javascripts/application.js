// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require s3_direct_upload
//= require_tree .

$(function() {
	$('#s3_uploader').S3Uploader({
		remove_completed_progress_bar: false,
		progress_bar_target: $('#uploads_container')
	});
	
	$('#s3_uploader').bind('s3_upload_failed', function(e, content) {
		return alert(content.filename + ' failed to upload. Error: ' + content.error_thrown);
	});

	// $('#s3_uploader').bind('s3_upload_complete', function(e, content) {
	// 	window.location.replace("/view");
	// });
});