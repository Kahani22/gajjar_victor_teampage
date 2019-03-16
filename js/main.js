(() => {

	console.log("Javascript is linked up");

	let buttonRayn	= document.querySelector('.buttonRayn');
		lightboxRayn	= document.querySelector('.contentRayn');
		closeRayn	= document.querySelector('#closeRayn');

		function openLightboxRayn() {
			lightboxRayn.classList.add('Lightbox1-on');
		}

		function closeLightboxRayn() {
			lightboxRayn.classList.remove('Lightbox1-on');
		}

		buttonRayn.addEventListener('click', openLightboxRayn);
		closeRayn.addEventListener('click', closeLightboxRayn);

})();