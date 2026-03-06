function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched Successfully");
            }else{
                reject("Error fetching data");
            }
        }, 3000);
    })
}

fetchData()
    .then((data) => {console.log(data)
        return 'Sush';
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error))