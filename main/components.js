export {createCard};

const createCard = (post) => {

    var row = document.getElementById("row-card");
    var col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";
    var card = document.createElement("div");
    card.className = "card";
    card.id = `${post._id}`
    card.style.width = "w-100";
    var img = document.createElement("img");
    img.src = `${post.imageUrl}`;
    img.className = "card-img-top";
    img.alt = "img";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body bg-secondary";
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = `${post.name}`;
    var cardBrand = document.createElement("h6");
    cardBrand.className = "card-title"
    cardBrand.textContent = `${post.brand}`
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = `${post.description}`;
    var cardPrice = document.createElement("p");
    cardPrice.className = "card-text";
    cardPrice.textContent = `Price: ${post.price}`;
    

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardBrand);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);

    
}