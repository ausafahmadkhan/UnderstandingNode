// const p1 = Promise.resolve(1);
// const p2 = Promise.reject(new Error("Rejected Promise"));
// p1.then(result => console.log(result))
// p2.catch(err => console.log(err.message))


//Parallel Promises

const p3 = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve({task : "Async 1"})
        reject(new Error("something went wrong"))
    }, 2000)
})

const p4 = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve({task : "Async 2"})
        reject(new Error("something went wrong"))
    }, 2000)
})

Promise.all([p3, p4])
    .then(res => console.log("Result", res))
    .catch(err => console.log(err.message))

Promise.race([p3, p4])
    .then(res => console.log("Result", res))
    .catch(err => console.log(err.message))