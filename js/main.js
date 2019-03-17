(() => {

	console.log("Javascript is linked up");

	let buttonRayn	= document.querySelector('.buttonRayn');
		lightboxRayn	= document.querySelector('.contentRayn');
		closeRayn	= document.querySelector('#closeRayn');
        buttonKahani	= document.querySelector('.buttonKahani');
		lightboxKahani	= document.querySelector('.contentKahani');
		closeKahani	= document.querySelector('#closeKahani');

		function openLightboxRayn() {
			lightboxRayn.classList.add('Lightbox1-on');
		}

		function openLightboxKahani() {
			lightboxKahani.classList.add('Lightbox1-on');
		}

		function closeLightboxRayn() {
			lightboxRayn.classList.remove('Lightbox1-on');
		}
		function closeLightboxKahani() {
			lightboxKahani.classList.remove('Lightbox1-on');
		}

		buttonRayn.addEventListener('click', openLightboxRayn);
		closeRayn.addEventListener('click', closeLightboxRayn);
		buttonKahani.addEventListener('click', openLightboxKahani);
		closeKahani.addEventListener('click', closeLightboxKahani);
	
})();




		
		
		
