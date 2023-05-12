import noUiSlider from 'nouislider';

o2.gRangeSlider =
{
	init()
	{
		// $('._range-slider').each((index, element) =>
		// {
		// 	const dataParams = $(element).data();
		// 	let start = $(element).data('start');
		// 	let connect = [true,false];
		// 	if(typeof start == 'string')
		// 	{
		// 		start = start.split(',');
		// 		connect = true;
		// 	}

		// 	const slider = noUiSlider.create(element,{
		// 		start    : start,
		// 		connect  : connect,
		// 		tooltips : true,
		// 		format   : this.format,
		// 		step     : 1,
		// 		range    : {'min': dataParams.min, 'max': dataParams.max }
		// 	});

		// 	slider.on('set', this.set);
		// 	slider.on('update', this.update);
		// });

		const sliders = document.querySelectorAll('._range-slider');

		sliders.forEach((element) =>
		{

			const dataParams = element.dataset;
			let start = element.dataset.start;
			let connect = [true, false];
			if (typeof start === 'string')
			{
				start = start.split(',');
				connect = true;
			}

			const slider = noUiSlider.create(element,{
				start    : start,
				connect  : connect,
				tooltips : true,
				format   : this.format,
				step     : 1,
				range    : {'min': +dataParams.min, 'max': +dataParams.max }
			});

			slider.on('set', this.set);
			slider.on('update', this.update);
		});
	},
	set(values, handle)
	{
		if (handle == 0)
		{
			// $(this.target).siblings('._min').trigger('change');
			const minSibling = this.target.nextElementSibling;
			if (minSibling && minSibling.classList.contains('_min'))
			{
				minSibling.dispatchEvent(new Event('change'));
				console.log(minSibling.classList.contains('_min'));
			}
		}
		else
		{
			// $(this.target).siblings('._max').trigger('change');
			const maxSibling = this.target.nextElementSibling;
			if (maxSibling && maxSibling.classList.contains('._max'))
			{
				maxSibling.dispatchEvent(new Event('change'));
			}
		}
	},
	update(values)
	{
		// let $slider = $(this.target).parents('._range-slider-wrap');
		let slider = this.target.closest('._range-slider-wrap');

		let firstValue = o2.gRangeSlider.format.from(values[0].toString());
		// $slider.find('._min').val(firstValue);
		// $slider.find('._label-to').html(values[0]);
		slider.querySelector('._min').value = firstValue;
		slider.querySelector('._label-to').innerHTML = values[0];


		let from = o2.gRangeSlider.format.to(this.options.range.min);
		// $slider.find('._label-from').html(from);
		slider.querySelector('._label-from').innerHTML = from;

		if(values.length > 1)
		{
			let secondVal = o2.gRangeSlider.format.from(values[1].toString());
			// $slider.find('._max').val(secondVal);
			// $slider.find('._label-from').html(values[0]);
			// $slider.find('._label-to').html(values[1]);
			slider.querySelector('._max').value = secondVal;
			slider.querySelector('._label-from').innerHTML = values[0];
			slider.querySelector('._label-to').innerHTML = values[1];
		}
	},
	format:
	{
		to(number)
		{
			number = Math.round(number);
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		},
		from(stringNumber)
		{
			return Number(stringNumber.replace(/[ ,\-]+/, ''));
		}
	}
};