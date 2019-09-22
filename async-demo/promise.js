const p = new Promise((resolve, reject) =>
{
    console.log("waiting 2 secs for some async work")
    //kick off some async work
    setTimeout(()=>
    {
        resolve(1); //pending => resolved, fulfilled
        reject(new Error("something went wrong")); //pending => rejected
    }, 2000)
});



p
    .then(result => console.log('Result', result))
    .catch(err => console.log("Error", err.message));