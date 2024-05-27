const filterButtons = document.querySelectorAll('.filter-button');
const filterItems = document.querySelectorAll('.block__item');
 
 function filterItemsByCategory() {
     const filter = this.getAttribute('data-filter'); // Получаем фильтр из data-атрибута нажатой кнопки
 
     filterItems.forEach(item => {
         if (filter === 'all' || item.classList.contains(filter)) {
             item.classList.remove('hidden');
         } else {
             item.classList.add('hidden');
         }
     });
 }
 

 filterButtons.forEach(button => button.addEventListener('click', filterItemsByCategory));