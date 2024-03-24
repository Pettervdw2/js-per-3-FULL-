console.log("Het Werkt!");

const cardContainer = document.querySelector('.card-container');


//fetch json 
  fetch('http://localhost:3000/test')
    .then(data => data.json())
    .then(test => showTest(test))

function showTest(test) {
    console.log(test);
    let htmlCode = '';
    for (let i = 0; i < test.length; i++) {
        const test1 = test[i];
        htmlCode += createCard(test1)
    }
    cardContainer.innerHTML = htmlCode;
}

function createCard(test) {
    const card = `
 <div class="cards">
    <h2 class="title">${test.title}</h2>
    <img src="${test.imageUrl}" />
    <p class="description">${test.description}</p>
    <p class="price">${test.price}</p>
    <p class="sizes">${test.sizes}</p>
 </div>
`;
    return card;
}
