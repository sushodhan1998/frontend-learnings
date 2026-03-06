function fetchPostData() {
    return new Promise((resolve) => {
        setInterval(() => {
            resolve(`Post data fetched succssfully`)
        }, 2000);
    })    
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setInterval(() =>{
            resolve('Comment data fetched successfully')
        },1000);
    });
}

async function fetchModelDeatils() {
    
    try { 
       const [commentData, postData] =  await Promise.all([fetchCommentData(),fetchPostData()]);
       console.log(commentData);
       console.log(postData);
    } catch (error) {
        console.log("Fetch failed!!");
        
    }
}

fetchModelDeatils();