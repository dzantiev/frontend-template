o2.gSelect =
{
	/**
	 * ссылка на обработчик клика вне блока
	 */
	outListeners: [],

	/**
	 * Открывает нужную выпадашку
	 */
	open(select)
	{
		this.close();
		select.classList.add('g-select--opened');
		let listner = o2.clickOutside(select, () =>
		{
			this.close();
		});
		this.outListeners.push(listner);
	},

	/**
	 * Закрывает все выпадашки
	 */
	close()
	{
		const selects = document.querySelectorAll('._select');
		for (let i = 0; i < selects.length; i++)
			selects[i].classList.remove('g-select--opened');

		for(let listner of this.outListeners)
			document.removeEventListener('click', listner);
		this.outListeners = [];
	},

	/**
	 * открытие/закрытие списка
	 */
	toggle(instance)
	{
		const select = instance.closest('._select');

		if (!select.classList.contains('g-select--opened'))
			this.open(select);
		else
			this.close();
	},

	/**
	 * устанавливаем название выбранного города
	 * которое просто выводится
	 */
	setName(select,name)
	{
		select.querySelector('._selected-text').innerText = name;
	},

	/**
	 * устанавливаем значение выбранного элемента которые передеаются в форму
	 */
	setSelectedValue(select,selectedValue)
	{
		select.querySelector('._selected-value').value = selectedValue;
	},

	/**
	 * выбор города в шапке
	 */
	selecttItem(instance)
	{
		const select = instance.closest('._select');
		select.classList.remove('error');
		const options = select.querySelectorAll('._option');

		for (let i = 0; i < options.length; i++)
			options[i].classList.remove('g-select__item--active');

		instance.classList.add('g-select__item--active');
		const name = instance.innerText;
		const selectedValue = instance.dataset.value;

		this.setName(select,name);
		this.setSelectedValue(select,selectedValue);
		this.close();
	}
};