

const loadData =() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}



const postData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data))
}

const displayPost = (data) => {
    // console.log(data);

    const postUl = document.getElementById("postContainer")
    console.log(postUl);
    
    // const everyData 
    data.forEach(res => {
        // console.log(res);

        const li = document.createElement("li")
        li.innerText = res.title

        postUl.appendChild(li)
    });
}
// const displayPost = (data) => {
    // for (let i = 0; i < data.length; i++) {
    //     const element = data[i];
    //     console.log(element);
    // }

//     for (const everyData of data) {
//         console.log(everyData);
//     }
// }