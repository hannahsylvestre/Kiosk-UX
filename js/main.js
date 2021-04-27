if( document.body.classList.contains('page-size') ){

	const form = document.querySelector('.page-size form');
	const list = form.querySelectorAll('[name=options]');
	const submit = document.querySelector('[type="submit"]');

	list.forEach(enableButton);
	function enableButton(l){
	  l.addEventListener('click',function(){
	    submit.disabled = false;
	  })
	}

	form.addEventListener('submit',function(e){
	  e.preventDefault();
	  console.log('hit');
	  location.href = 'page-base.html';
	})

}