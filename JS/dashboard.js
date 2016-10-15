$(document).ready( function(){
	var showDialog = document.getElementById('showDialog');
	var infoModal = document.getElementById('infoModal');
	//To display  information modal window 
	showDialog.addEventListener('click', function(e) {
		infoModal.showModal();
	});
	//To close information modal window 
	var modalClose = document.getElementById('modalClose');
	modalClose.addEventListener('click', function(e) {
		infoModal.close();
	});

});