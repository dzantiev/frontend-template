o2.gInputFile =
{
	fileSelection()
	{

		inputFile = document.querySelector(".g-input-file__file-inp");
		inputFile.addEventListener('change', (event)=>
		{
			const fileList = event.target.files;
			for (i = 0; i < fileList.length; i++)
			{
				const reader = new FileReader();
				if(fileList[i].type === "image/png" || fileList[i].type === "image/jpg" || fileList[i].type === "image/jpeg")
				{
					reader.onload = function(event)
					{
						document.querySelector('.g-input-file__gallery').insertAdjacentHTML('afterbegin', '<div class = "g-input-file__img"><img class = "g-input-file__img-close" src = "../svg/close.svg" onclick = "o2.gInputFile.close(this)"><img class = "g-input-file__img-image" src = "'+event.target.result+'"></div>');
					};
				}
				else
				{
					document.querySelector('.g-input-file__gallery').insertAdjacentHTML('afterbegin', '<div class = "g-input-file__img"><img class = "g-input-file__img-close" src = "../svg/close.svg" onclick = "o2.gInputFile.close(this)"><img class = "g-input-file__img-image" src = "../svg/close.svg"></div>');
				}
				reader.readAsDataURL(fileList.item(i));
			}
		});
	},
	close(instance)
	{
		const touch = instance.closest('.g-input-file__img');
		touch.remove();
	}
};

