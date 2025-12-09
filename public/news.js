const api_key="444e15e3709b4ff18cca7e5139fafe09";
const url="https://newsapi.org/v2/everything?q=";       //api loaded

window.addEventListener('load',fetcher('India'));
async function fetcher(query){
    const info=await fetch(`${url}${query}&apiKey=${api_key}`);
    const news_data=await info.json();
    console.log(news_data);
    bindData(news_data.articles);
}
function bindData(articles){
    const container=document.getElementById('art');
    const temp=document.getElementById('template-card');
    container.innerHTML="";                     //remove the previous data
    articles.forEach(article=>{
        if(!article.urlToImage)return;
            if(!article.title)return;
                if(!article.description)return;
            const more_box=temp.content.cloneNode(true);
            container.appendChild(more_box);
            fillData(more_box,article);
       
    })
}
function fillData(more_box, article) {
    let new_image = more_box.querySelector('.news_img');
    let newTittle = more_box.querySelector('.news_tittle');
    let newInfo = more_box.querySelector('.news_info');

    new_image.src = article.urlToImage;
    newTittle.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
    newInfo.innerHTML = article.description;
}
