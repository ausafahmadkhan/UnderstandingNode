//  console.log("Before")
//  setTimeout(() =>
//  {
//      console.log("Reading a user from db")
//  }, 2000)
//  console.log("After")

console.log("Before")

//Promise Based approach
// getUser(1)
//     .then(user => getRepository(user.name))
//     .then(repo => console.log("Repo", repo))
//     .catch(err => console.log(err.message))
    
displayRepos();
console.log("After")

//Async and Await approach
async function displayRepos()
{
    try
    {
        const  user = await getUser(1);
        const repos = await getRepository(user.name);
        console.log("Repos", repos)
    }
    catch(error)
    {
        console.log(error.message)
    }
}
function getUser(id)
{  
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Reading a user from the db");
            resolve({id : id, name : "Ausaf"});
            reject(new Error("something went wrong fetching user details"));
        }, 2000);
    })
}

function getRepository(userName)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Getting the repo details");
            resolve({userName : userName, repos : ["repo1", "repo2", "repo3"]})
            reject(new Error("something went wrong fetching repo details"))
        }, 2000)
    })
}
