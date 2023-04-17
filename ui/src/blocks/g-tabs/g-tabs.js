"use strict";
o2.gTabs =
{
	open(instance, tabId)
	{
		this.activateTab(instance);
		const tabsContainer = instance.closest('._tabs-container');
		tabsContainer.querySelector('.open').classList.remove('open');
		tabsContainer.querySelector(`[data-tab="${tabId}"]`).classList.add('open');
	},
	activateTab(activeTab)
	{
		const tablinks = activeTab.closest('._tabs-container').getElementsByClassName('_tab');
		for (let i = 0; i < tablinks.length; i++)
		{
			tablinks[i].classList.remove('active');
		}
		activeTab.classList.add('active');
	}
};