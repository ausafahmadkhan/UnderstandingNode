async function notifyCustomer()
{
    try
    {
        const cust = await getCustomer(1);
        console.log("Customer", cust);
        const topMovies = await getTopMovies(cust.isGold);
        console.log("Top Movies", topMovies);
        const mail = await sendEmail(cust.email);
        console.log(mail);
    }
    catch(err)
    {
        console.log(err.message);
    }
}

function getCustomer(id)
{
    return new Promise((resolve, reject) =>
    {
        console.log("Getting Customer details from db");
        setTimeout(() =>
        {
            resolve({id : id, name : "Ausaf", isGold : true, email : "abc@gmail.com"});
            reject(new Error("Could not get user from db"));
        }, 2000);
    })
}

function getTopMovies(isGold)
{
    if (isGold)
    {
        return new Promise((resolve, reject) =>
        {
            console.log("Getting Top Movies");
            setTimeout(() =>
            {
                resolve(["movie1", "movie2"]);
                reject(new Error("Could not get top movies"));
            }, 2000);
        })
    }
}

function sendEmail(email)
{
    return new Promise((resolve, reject) =>
    {
        console.log(`sending email to ${email}...`);
        setTimeout(() =>
        {
            resolve("Email sent!")
            reject(new Error("Could not send email."));
        }, 2000);

    })
}

notifyCustomer();