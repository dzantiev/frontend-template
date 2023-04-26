o2.gYamap =
{
	init()
	{
		if (document.querySelector('#yamap'))
			window.addEventListener('load', () => ymaps.ready(this.initYamap));
	},
	initYamap()
	{
		const myMap = new ymaps.Map('yamap', {
			center: [43.02, 44.68],
			zoom: 12
		});

		myMap.geoObjects.add(new ymaps.Placemark([43.029347, 44.677649], {
			balloonContent: 'Супер команда разработчиков <strong>O2</strong>'
		}, {
			preset: 'islands#icon',
			iconColor: '#FF00FF'
		}));
	}
};
