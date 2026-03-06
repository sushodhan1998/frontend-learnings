function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let flag = true;
            if(flag)
                resolve("Data fetched successfully");
            else
                reject("Failed to fetch the datat");
        },3000);
    })
}

fetchData()
    .then((data) => console.log(data))
    .catch((error)=> console.log(error));