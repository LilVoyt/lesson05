// const arr = [3, 5, 7];
// const res = arr.reduce((a, b) => a + b, 0);
// console.log(res);

// const arr = [3, 5, 7, 2];
// const min = arr.reduce((a, b) => a < b ? a : b);
// console.log(min);

// console.log(document);
// console.dir(document);
// console.dir(document.forms);
// console.dir(document.forms[0]);
// console.dir(document.forms.root-form);//error
// console.dir(document.forms['root-form']);
// console.dir(document.forms.rootForm);

// const buttons = document.getElementsByTagName("button");
// console.log(buttons);
// for (const b of buttons) {
//   b.addEventListener('dblclick', () => {
//       console.log('!!!');
//   })
// }


// const firstImg = document.getElementById("firstImg");
// firstImg.addEventListener('click', () => {
//   // firstImg.src = "https://rus.team/images/article/6601/avatar_4x3.webp?actual=1602944020";
//   firstImg.style.opacity = '1';
//   // console.log(firstImg.style.visibility);
//   console.log('tetst');
// })
// firstImg.onclick = () => {
//   console.log('test');
// }

// const form = document.forms.rootForm;
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // console.log(e);
//   // console.dir(e.target);
//   // console.dir(e.target.elements);
//   // console.dir(e.target.elements.fullName);
//   // console.dir(e.target.elements['login']);
//   console.dir(e.target.elements.fullName.defaultValue);
//   console.dir(e.target.elements.fullName.value);
// })

// console.log(document.links);
// const [link] = document.links;
// link.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('link!!!');
// })


//1: при натисканні на кнопку "send" додати значення з поля введення в масив
//2: при натисканні на кнопку "show" відобразити значення масиву в консолі
//3: лише у випадку, якщо значення не є порожнім
//(не може бути пробілів або інших пробільних знаків) додати до масиву
//5: очистити поле введення після збереження даних
//6: відобразити всі повідомлення у списку (ul)
// const messages = [];
// const form = document.forms.rootForm;
// const btnShowArray = document.getElementById('btnShowArray');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const v = e.target.elements.message.value.trim();
//   if (v !== "") {
//     messages.push(v);
//     const li = document.createElement('li');
//     li.innerText = v;
//     listMessages.append(li);
//   }
//   // e.target.elements.message.value = "";
//   e.target.reset();
// });
// btnShowArray.addEventListener('click', () => {
//   console.log(messages);
// })

//!синхронність
// console.log(1);
// console.log(2);
// console.log(3);

// let count = 0;
// function func() {
//   console.log('work' + ++count);
// }
// func();
// func();
// func();

// const btnClick = document.getElementById('btnClick');
// btnClick.addEventListener('click', (e) => {
//   console.log('connect to server...');
//   while (true) {

//   }
// })

//!eventloop и асинхронність
// console.log('start');
// setTimeout(function one() { console.log("one"); }, 0);
// setTimeout(function two() { console.log("two"); }, 0);
// setTimeout(function three() { console.log("three"); }, 0);
// for (let i = 0; i < 10; i++) {
//   console.log('work');
// }
// console.log('finish');

// function work() {
//   console.log('work...');
// }
// console.log('start');
// main(work);
// console.log('finish');
// function main(func) {
//   func();
// }

//!promise
// console.log(1);//синхронний
// const promise = new Promise((resolve, reject) => {
//   console.log(2);//синхронний
// });
// console.log(3);//синхронний
// console.log(promise);


const inputElement = document.getElementById("input");
const inputElementText = inputElement.placeholder;

inputElement.addEventListener("focus", function (e) {
    inputElement.placeholder = "";
});

inputElement.addEventListener("blur", function (e) {
    inputElement.placeholder = inputElementText; 
});

let arr = [];

let selectedArr = [];

const button = document.getElementById("btnClick");

button.addEventListener("click", () => {
    const inputValue = inputElement.value;
    arr.push(inputValue); 
    const ul = document.getElementById('list');
    let li = document.createElement('li');
    const button = document.createElement("button"); 
    button.addEventListener('click', () => {
        li.remove();
    })
    button.textContent = "Click me";
    li.textContent = inputElement.value;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            li.style.color = 'red';
            selectedArr.push(li.textContent); 
        } else {
            li.style.color = '';
            const index = selectedArr.indexOf(li);
            if (index !== -1) {
                selectedArr.splice(index, 1);
            }
        }
        console.log(selectedArr);
    })
    li.appendChild(button);
    li.appendChild(checkbox);
    ul.appendChild(li);
    inputElement.value = "";
});


const show = document.getElementById('btnShow');

show.addEventListener('click', () =>{
    const inputValue = inputElement.value;
    inputElement.value = "";
    console.log(inputValue);
})


