$(document).ready( function(){
	var showDialog = document.getElementById('showDialog');
	var infoModal = document.getElementById('infoModal');
	
	//To display  information modal window 
	showDialog.addEventListener('click', function(e) {
		infoModal.showModal();
	});
	//To close information modal window by clicking modal close button
	var modalClose = document.getElementById('modalClose');
	modalClose.addEventListener('click', function(e) {
		infoModal.close();
	});
	
	//To close information modal window by clicking anywhere outside the modal
	window.addEventListener('click', function(e) {
		if (e.target == infoModal) {
			infoModal.close();
		}
	});
});