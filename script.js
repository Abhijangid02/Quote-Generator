let quote = document.getElementById("quote-content")
let authorName= document.getElementById("author-name")

const api_url = "https://api.quotable.io/random"

async function getQuote(url){
    const response = await fetch(url)
    var data = await response.json()
    // console.log(data);
    quote.innerHTML = data.content
    authorName.innerHTML = data.author
}

getQuote(api_url)

function post(){
    window.open("https://www.linkedin.com/in/abhijangid/overlay/create-post/")
}

// function twiter(){
//     window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML  +"---- by "+authorName.innerHTML , "Tweet window" ,"width=600, hight=300" , )
// }