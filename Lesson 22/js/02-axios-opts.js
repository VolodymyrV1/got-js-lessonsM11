/*
* Промісифікація:
* - Проблема доступу до результату проміса з колбеком
* - Функція, яка повертає проміс
*/


// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0.5) {
//             onSuccess(`Ваше замовлення ${dish}`);
//             return;
//         }

//         onError("Закінчилися продукти")
//     }, 1000)

// }


// makeOrder(
//     "пиріжок",
//     (str) => {
//     console.log("onSucces", str);
//     },
//     (lalala) => {
//         console.log("onError", lalala);
        
//     }
// )

//=================

// const makeOrder = (dish) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();


//         setTimeout(() => {
//             console.log(random);
//             if(random > 0.5) {
//               resolve(`Ваше замовлення ${dish}`)
//             }

//             reject("Закінчилися продукти");
//         }, 1000)
//     })
// }

// makeOrder("пиріжок")
//     .then(res => {
//         console.log("then", res);        
//     })
//     .catch(error => {
//         console.log("catch", error);        
//     });
// ;
    







/*
* Промісифікація "синхронних функцій"
* - Promise.resolve()
* - Promise.reject()
*/


// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random();
//     console.log(random);

//         if(random > 0.5) {
//             onSuccess(`Ваше замовлення ${dish}`);
//             return;
//         }

//         onError("Закінчилися продукти")
// }


// makeOrder(
//     "пиріжок",
//     (str) => {
//     console.log("onSucces", str);
//     },
//     (lalala) => {
//         console.log("onError", lalala);        
//     }
// )


//=============


// const makeOrder = (dish) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();

//             console.log(random);
//             if(random > 0.5) {
//               resolve(`Ваше замовлення ${dish}`)
//             }

//             reject("Закінчилися продукти");
//     })
// }

// makeOrder("пиріжок")
//     .then(res => {
//         console.log("then", res);        
//     })
//     .catch(error => {
//         console.log("catch", error);        
//     });
// ;
    



//======== Приклад для синхронних але краще то що вище
// const makeOrder = (dish) => {
//     const random = Math.random();

//     if(random > 0.5) {
//         return Promise.resolve(`Ваше замовлення ${dish}`);
//     }
//     return Promise.reject("Закінчилися продукти")
// }

// makeOrder("пиріжок")
//     .then(res => {
//         console.log("then", res);        
//     })
//     .catch(error => {
//         console.log("catch", error);        
//     });
// ;



// ------------------------------- Promise.all Promise.race

// const startTime = Date.now();

// const res1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;


//             resolve({ title: "first", time: deltaTime })

//         }, 3000)
//     })
// }

// const res2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;


//             resolve({ title: "second", time: deltaTime })

//         }, 1000)
//     })
// }

// const res3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;


//             resolve({ title: "third", time: deltaTime })

//         }, 5000)
//     })
// }

// Promise.all([res1(), res2(), res3()])
//     .then(data => {
//         console.log(data);
        
//     })
//     .catch(error => {
//         console.log("catch", error);
        
//     })

// Promise.race([res1(), res2(), res3()])
//     .then(data => {
//         console.log("then", data);
        
//     })
//     .catch(error => {
//         console.log("catch", error);
        
//     })