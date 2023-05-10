o2.gSpoiler =
{
	spoilerToggle(title, method=null)
	{
		switch (method)
		{
			case 'one':
				this.oneShowSpoiler(title);
				break;
			case 'onlyOne':
				this.onlyOneSpoiler(title);
				break;
			default:
				this.defaultSpoiler(title);
		}
	},
	defaultSpoiler(title)
	{
		title.classList.toggle('g-spoiler__title--active');

		let lists = title.closest('._g-spoiler__item').querySelectorAll('._g-spoiler__list');

		for (let i = 0; i < lists.length; i++)
		{
			if (lists[i].classList.contains('list--active'))
			{
				lists[i].classList.remove('list--active');
				lists[i].style.maxHeight = 0;
			}
			else
			{
				lists[i].classList.add('list--active');
				lists[i].style.maxHeight = lists[i].scrollHeight + 'px';
			}
		}

	},
	oneShowSpoiler(title)
	{
		const gSpoiler = title.closest('._g-spoiler');

		const isActive = title.classList.contains('g-spoiler__title--active');

		gSpoiler.querySelectorAll('._g-spoiler__list')
			.forEach((list) => list.style.maxHeight = 0);

		gSpoiler.querySelectorAll('._g-spoiler__title')
			.forEach((title) => title.classList.remove('g-spoiler__title--active'));

		if (!isActive)
		{
			const closestLists = title.closest('._g-spoiler__item').querySelectorAll('._g-spoiler__list');
			closestLists.forEach((list) => list.style.maxHeight = list.scrollHeight + 'px');
			title.classList.add('g-spoiler__title--active');
		}
	},
	onlyOneSpoiler(title)
	{
		const gSpoiler = title.closest('._g-spoiler');

		gSpoiler.querySelectorAll('._g-spoiler__list')
			.forEach((list) => list.style.maxHeight = 0);

		gSpoiler.querySelectorAll('._g-spoiler__title')
			.forEach((title) => title.classList.remove('g-spoiler__title--active'));

		const closestLists = title.closest('._g-spoiler__item').querySelectorAll('._g-spoiler__list');
		closestLists.forEach((list) => list.style.maxHeight = list.scrollHeight + 'px');
		title.classList.add('g-spoiler__title--active');
	}
};