/*
* - Метод запиту
* - Fetch API
* - URL запиту
* - Вкладка Network
* - Обробка відповіді response (404 з fetch)
*
* https://jsonplaceholder.typicode.com/todos
 */


// const list = document.querySelector(".todo-list");

// const lalala = new URLSearchParams({
//     _limit: 7,
//     _page: 2
// });


// Простий, без винесення в функцію
// fetch(`https://jsonplaceholder.typicode.com/todos?${lalala}`)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("Ooooops lalala");
//         }
        
//         return res.json();
//     })
//     .then(data => {
//         console.log("then", data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data))
//     })
//     .catch((error) => {
//         console.log("catch", error);
//     })





// function createMarkup(arr) {
//     return arr.map(({ id, title, completed }) => `
//         <li class="list-item" data-id="${id}">
//             <input type="checkbox" ${completed && "checked"} />
//             <p>${title}</p>
//         </li>
//         `).join("");
// }



/**
 * Всередині функції запит, зовні обробка
 */

// function fetchData(url) {
//     return fetch(url)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error(res.status)
//             }
//             return res.json()
//         })
// }

// fetchData(`https://jsonplaceholder.typicode.com/todos?${lalala}`)
//     .then(data => {
//         list.insertAdjacentHTML("beforeend", createMarkup(data))
//     })
//     .catch(error => {
//         console.log("catch", error);
        
//     })


// fetchData(`https://jsonplaceholder.typicode.com/posts`)
//     .then(data => {
//         console.log("posts", data);
//     })
//     .catch(error => {
//         console.log("catch", error);
        
//     })