o2.gPopup =
{
	outListener:false,
	open(contentClass)
	{
		this.removeListner();
		this.close();
		const popupHtml = document.querySelector(`.${contentClass}`);
		const overlay = document.querySelector('._overlay');
		overlay.classList.add('open');
		overlay.insertAdjacentHTML('afterbegin', popupHtml.innerHTML);
		document.body.style.overflow = 'hidden';
		this.setEscEvent();
		const popup = overlay.querySelector('._popup-content');
		const self = this;
		setTimeout(function()
		{
			self.outListener = o2.clickOutside(popup, () =>
			{
				self.close();
			});
		},10);
	},
	close()
	{
		document.querySelector('._overlay').classList.remove('open');
		document.querySelector('._overlay').innerHTML = '';
		document.body.style.overflow = 'auto';
		this.removeListner();
	},
	removeListner()
	{
		if(this.outListener)
			document.removeEventListener('click', this.outListener);
		this.outListener = false;
	},
	escEvent:false,
	setEscEvent()
	{
		if(this.escEvent) return false;
		const self = this;
		document.onkeydown = function(evt)
		{
			evt = evt || window.event;
			if (evt.keyCode == 27)
				self.close();
		};
		this.escEvent = true;
	},
};