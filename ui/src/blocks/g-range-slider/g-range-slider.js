import noUiSlider from 'nouislider';

o2.gRangeSlider =
{
	init()
	{
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
			const minSibling = this.target.nextElementSibling;
			if (minSibling && minSibling.classList.contains('_min'))
			{
				minSibling.dispatchEvent(new Event('change'));
				console.log(minSibling.classList.contains('_min'));
			}
		}
		else
		{
			const maxSibling = this.target.nextElementSibling;
			if (maxSibling && maxSibling.classList.contains('._max'))
			{
				maxSibling.dispatchEvent(new Event('change'));
			}
		}
	},
	update(values)
	{
		let slider = this.target.closest('._range-slider-wrap');

		let firstValue = o2.gRangeSlider.format.from(values[0].toString());
		slider.querySelector('._min').value = firstValue;
		slider.querySelector('._label-to').innerHTML = values[0];


		let from = o2.gRangeSlider.format.to(this.options.range.min);
		slider.querySelector('._label-from').innerHTML = from;

		if(values.length > 1)
		{
			let secondVal = o2.gRangeSlider.format.from(values[1].toString());
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