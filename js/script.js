const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');
const delDialog = document.querySelector('#delDialog');
const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');

myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('p');
    // element.classList - add or delete classes for element
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;

    // Add button for delete element of list
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('dbtn');
    deleteButton.textContent = 'Удалить';

    // Delete element of list
    deleteButton.addEventListener('click', () => {
        // parent.removeChild(element) удаляет указанный элемент из родителя
        delDialog.show();
        yesBtn.addEventListener('click', () => {
            nameInput.value = '';
            list.removeChild(newItem);
            delDialog.close();
        })
        noBtn.addEventListener('click', () => {
            delDialog.close();
        })
    })

    // Добавить кнопку в элемент списка
    // Метод parent.appendChild(element) позволяет вставить в конец элемента (parent) 
    // Какой-либо другой элемент
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

})
