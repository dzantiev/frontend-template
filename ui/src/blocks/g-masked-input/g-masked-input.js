import IMask from 'imask';

"use strict";
o2.innputMask =
{
	init()
	{
		let maskedInputs = document.querySelectorAll('._phone-mask');
		let maskOptions = {
			mask: '+{7}(000)000-00-00'
		};

		let masks = [];

		for(let i = 0; i < maskedInputs.length; i++)
			masks[i] = IMask(maskedInputs[i], maskOptions);
	}
};