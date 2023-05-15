// import './vendors/jquery.maskedinput.min.js';
import IMask from 'imask';

"use strict";
o2.innputMask =
{
	init()
	{
		// $('._phone-mask').mask('+7(999)999-99-99',{autoclear: false});
		let maskedInputs = document.querySelectorAll('._phone-mask');
		let maskOptions = {
			mask: '+{7}(000)000-00-00'
		};

		let masks = [];

		for(let i = 0; i < maskedInputs.length; i++)
		{
			masks[i] = IMask(maskedInputs[i], maskOptions);
			console.log(masks[i]);
		}
	}
};