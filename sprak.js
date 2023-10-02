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
	const show = document.querySelectorAll(`div.${sprak}`);
	console.log(show);
	for (var i=0 ; i<show.length ; i++){
		show[i].style.display = 'inline';
	}
	const navbar_els = document.querySelectorAll(`div.navbar-item.${sprak}`);
	for(let i=0 ; i<navbar_els.length ; i++){
		navbar_els[i].style.display = 'flex';
		navbar_els[i].style.justifyContent = 'space-around';
	}

	var flag = document.getElementById(`l_${sprak}`).getElementsByTagName("img")[0];
	flag.style.border="2px solid green";
});


