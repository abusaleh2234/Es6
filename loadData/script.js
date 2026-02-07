

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
    // const everyData 
    data.forEach(res => {
        console.log(res);
        
    });
}