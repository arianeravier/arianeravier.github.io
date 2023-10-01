/*var sprak='fr';*/
var sprak;

function setLanguage(l){
	/*localStorage.setItem('sprak', l);*/
	sessionStorage.setItem('sprak', l);
	window.location.reload();
}

$(window).on('load',function(){
	/*var sprak = localStorage.getItem('sprak');*/
	var sprak = sessionStorage.getItem('sprak');
	if (sprak==null){
		sprak = 'fr';
	}
	/*console.log(localStorage.getItem('sprak'));*/
	console.log(`l_${sprak}`);
	const show = document.getElementById(`${sprak}`);
	for (var i=0; i<show.length; i++){
		show[i].style.display = 'block';
	}
	const hide = document.querySelectorAll(`div.lang:not(#${sprak})`);
	for (var i=0; i<hide.length; i++){
		hide[i].style.display = 'none';
	}
	var flag = document.getElementById(`l_${sprak}`).getElementsByTagName("img")[0];
	console.log(flag);
	flag.style.border="2px solid green";
});


