
var post = function () {
	var self = this;
	self.userId = "";
	self.id = "";
	self.title = "";
	self.body = "";
};

function agregarPost(post) {
	var row = "<div>"
		+'<h1 class="w3-text-teal">'+post.title+"</h1>"
		+ "<div>" + post.body + "</div>"
		+'<button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>' 
		+'<button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>' 
		+"</div>"

	//$("table tbody").append(row);
	$("div").append(row);
}


$(document).ready(function () {

	var root = 'https://jsonplaceholder.typicode.com';

	$.ajax({
		url: root + '/posts',
		method: 'GET'
	}).then(function (data) {


		$.each(data, function (i, p) {
			agregarPost(p);

		});

		//$("#titulo").text(data);
	});

});

