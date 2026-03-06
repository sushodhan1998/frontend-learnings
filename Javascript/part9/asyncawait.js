function fetchUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject({name:"chaicode", url: "https://chaicode.com"})
        },3000)
    })
}

async function getUserData() {
    try {
        console.log("fethcing the user data...");
        const userData = await fetchUserData();
        console.log(`User data userData`, userData);

    } catch (error) {
        console.log("Error throw out ", error);
                
    }
}

getUserData();