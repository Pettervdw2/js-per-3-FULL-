console.log("Het Werkt!");

const cardContainer = document.querySelector('.card-container-yeezy');


//fetch de json 
  fetch('http://localhost:3000/yeezy1')
    .then(data => data.json())
    .then(yeezy1 => showyeezy1(yeezy1))

function showyeezy1(yeezy1) {
    console.log(yeezy1);
    let htmlCode = '';
    for (let i = 0; i < yeezy1.length; i++) {
        const yeezys1 = yeezy1[i];
        htmlCode += createCard(yeezys1)
    }
    cardContainer.innerHTML = htmlCode;
}

//functie aangemaakt om de informatie uit de json in html te zetten op een pagina
function createCard(shoe1) {
    const cards = `
 <div class="cards">
    <h2 class="title">${shoe1.title}</h2>
    <img src="${shoe1.imageUrl}" />
    <p class="description">${shoe1.description}</p>
    <p class="price">${shoe1.price}</p>
    <p class="sizes">${shoe1.sizes}</p>
 </div>
`;
    return cards;
}
