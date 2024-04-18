//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email");
// console.log(emailRef)
// console.log(emailRef)
// 1. Then

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     response.json().then(data => {
//         console.log(data)
//         emailRef.innerHTML = data.email;
//     })
// })



// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
// });

// 2. Async / Await

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     emailRef.innerHTML = data.name
// }

// main();

// CREATING A PROMISE

const statusRef = document.querySelector(".status");


function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000);

    })
}


async function main() {
    const a = await getSubscriptionStatus();
    statusRef.innerHTML = a;
    
}
main();

// CHALLENGE //

// function getVideo(subscriptionStatus){
//     return new Promise((resolve,reject) => {
//         if (subscriptionStatus === "VIP"){
//             resolve("Show Video")
//         } else if (subscriptionStatus === "FREE") {
//             resolve("Show trailer")
//         } else {
//             reject("No video")
//         }

//     })
// }