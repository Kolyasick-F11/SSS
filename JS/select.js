
// Полифилл для медота forEach для NodeList.Для Internet Explorer.
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg.this[i], i, this);
		}
	};
}


document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

	// Переменные.
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownItem = dropDownList.querySelectorAll('.dropdown__item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input');

	// Клик по кнопке. Открыть/Закрыть list =================================================== ;
	dropDownBtn.addEventListener('click', function () {
		dropDownList.classList.toggle('dropdown__list--visible');
		this.classList.add('dropdown__button--active');
	});

	// Выбораем элемент из списка, выбра значение текса и оставляем фокус. =================================================== ;
	dropDownItem.forEach(function (listItem) {
		listItem.addEventListener('click', function (event) {
			event.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			// dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
			dropDownBtn.classList.remove('dropdown__button--active');
		})
	});

	// Клик снаружи дропдауна. Закрыть дропдаун.
	document.addEventListener('click', function (event) {
		if (event.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрываем дропдаун.
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Tab' || event.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});



// // Переменные.
// const dropDownBtn = document.querySelector('.dropdown__button');
// const dropDownList = document.querySelector('.dropdown__list');
// const dropDownItem = dropDownList.querySelectorAll('.dropdown__item');
// const dropDownInput = document.querySelector('.dropdown__input');

// // Клик по кнопке. Открыть/Закрыть list =================================================== ;
// dropDownBtn.addEventListener('click', function () {
// 	dropDownList.classList.toggle('dropdown__list--visible');
// 	this.classList.add('dropdown__button--active');
// });

// // Выбораем элемент из списка, выбра значение текса и оставляем фокус. =================================================== ;
// dropDownItem.forEach(function (listItem) {
// 	listItem.addEventListener('click', function (event) {
// 		event.stopPropagation();
// 		dropDownBtn.innerText = this.innerText;
// 		// dropDownBtn.focus();
// 		dropDownInput.value = this.dataset.value;
// 		dropDownList.classList.remove('dropdown__list--visible');
// 		dropDownBtn.classList.remove('dropdown__button--active');
// 	})
// });

// // Клик снаружи дропдауна. Закрыть дропдаун.
// document.addEventListener('click', function (event) {
// 	if (event.target !== dropDownBtn) {
// 		dropDownBtn.classList.remove('dropdown__button--active');
// 		dropDownList.classList.remove('dropdown__list--visible');
// 	}
// });

// // Нажатие на Tab или Escape. Закрываем дропдаун.
// document.addEventListener('keydown', function (event) {
// 	if (event.key === 'Tab' || event.key === 'Escape') {
// 		dropDownBtn.classList.remove('dropdown__button--active');
// 		dropDownList.classList.remove('dropdown__list--visible');
// 	}
// });