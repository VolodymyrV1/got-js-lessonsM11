/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - y query string
 * - у хедерах
 * 
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

// const API_KEY = "43173775-fc7269b10cca3a5d436001063";
// const list = document.querySelector(".list")

// const params = new URLSearchParams({
//     key: API_KEY,
//     q: "roses red"
// })


//Варіант 1
// fetch(`https://pixabay.com/api/?${params}`)
//     .then((data) => {
//         if (!data.ok) {
//             throw new Error(data.statusText)
//         }

//         return data.json();
//     })
//     .then((data) => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data.hits))
        
//     })
//     .catch((error) => {
//         console.log("catch", error);
        
//     })

// function createMarkup(arr) {
//     return arr.map(({ previewURL, tags, id }) => `
//     <li data-id="${id}">
//         <img src="${previewURL}" alt="${tags}" width="300" />
//     </li>
//     `).join("");
// }


//Варіант через headers
// fetch(`https://pixabay.com/api/`, {
//     headers: {
//         Authorization: `Bearer lalala`
//     }

// })