export {getElementById, getForm, cercaID}

const cercaID = (event) => {
    let currentElement = event.target
    while (currentElement && !currentElement.classList.contains('card')) {
            currentElement = currentElement.parentNode
    }
    return currentElement
  }
const getElementById = (id) => {
    return document.getElementById(id)
}

const getForm = () => {
    
    let name = getElementById('name').value
    let description = getElementById('description').value
    let brand = getElementById('brand').value
    let imgUrl = getElementById('imgUrl').value
    let price = getElementById('price').value

    let form = {
        name: `${name}`,
        description:`${description}`,
        brand:`${brand}`,
        imageUrl:`${imgUrl}`,
        price: `${price}`
    }
    return form
}



