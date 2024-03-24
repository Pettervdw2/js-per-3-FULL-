console.log("Het Werkt!");

const cardContainer = document.querySelector('.card-container');


//fetch json 
fetch('http://localhost:3000/yeezy')
    .then(data => data.json())
    .then(yeezy => showYeezy(yeezy))

function showYeezy(yeezy) {
    console.log(yeezy);
    let htmlCode = '';
    for (let i = 0; i < yeezy.length; i++) {
        const adidasYeezy = yeezy[i];
        htmlCode += createCard(adidasYeezy)
    }
    cardContainer.innerHTML = htmlCode;
}

//functie aangemaakt om de informatie uit de json in html te zetten op een pagina
function createCard(shoe) {
    const card = `
 <div class="card">
    <h2 class="title">${shoe.title}</h2>
<a href="${shoe.page}">
    <img src="${shoe.imageUrl}" />
</a> 
    <p class="description">${shoe.description}</p>
    <button class="price">${shoe.price}</button>
    <p class="sizes">${shoe.sizes}</p>
 </div>
`;
    return card;
}
