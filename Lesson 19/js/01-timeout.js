/*
 * Метод window.setTimeout(callback, delay, args) 
 */


// console.log("before");


// setTimeout(() => {
//     console.log("timeout-1");
// }, 0);

// setTimeout(() => {
//     console.log("timeout-2");
// }, 0);


// console.log("after");





/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */


// const logger = (time) => {
//     console.log(`Timer ${time}`);
    
// }

// const timerId = setTimeout(logger, 1500, "2s");

// clearTimeout(timerId);




/*
 * Можливість передати параметри для колбеку
 */

// setTimeout(({ name, city }) => {
//     console.log(`${name} from ${city}`);
    

// }, 1000, {name: "Petya", city: "Poltava"});

