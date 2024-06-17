// async and await

async function fetchData(){
    try{
        let data= await fetch("https://jsonplaceholder.typicode.com/todos");// dummyjson
        let maindata= await data.json();
        console.log(maindata.id);
        console.log(maindata.userId);
        // console.log(maindata);
        // console.log(maindata.title);
        // console.log(maindata.category);
        maindata.forEach(element => {
            console.log(element.id);
            console.log(element.title);
        });
    }
    catch(e){
        console.log("error message" + e.message);
    }
}
fetchData();
