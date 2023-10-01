var sprak;

function setLanguage(l){
	sessionStorage.setItem('sprak', l);
	window.location.reload();
}

$(window).on('load',function(){
	var sprak = sessionStorage.getItem('sprak');
	if (sprak==null){
		sprak = 'fr';
	}
	const hide = document.querySelectorAll(`div.lang:not(#${sprak})`);
	for (var i=0; i<hide.length; i++){
		hide[i].style.display = 'none';
	}
	/*const show = document.getElementById(`${sprak}`);
	console.log(show);
	for (var i=0; i<show.length; i++){
		show[i].style.display = 'block';
	}
	console.log(show);*/
	/*const hide = document.querySelectorAll(`div.lang:not(#${sprak})`);
	for (var i=0; i<hide.length; i++){
		hide[i].style.display = 'none';
	}*/
	var flag = document.getElementById(`l_${sprak}`).getElementsByTagName("img")[0];
	flag.style.border="2px solid green";
});


