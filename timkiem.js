const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function() {
    const searchString = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchString);
    });
    renderProducts(filteredProducts);
});

function renderProducts(products) {
    const table = document.createElement("table");
    const row = document.createElement("tr");
    row.classList.add('tr')

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const idCell = document.createElement("td");
        const divCol = document.createElement('div')
        divCol.classList.add('product')
        idCell.appendChild(divCol)
        const image = document.createElement('img')
        image.src = product.img
        const name = document.createElement('h2')
        name.textContent = product.name
        const price = document.createElement('p')
        price.textContent = product.price
        price.classList.add('price')
        const button = document.createElement('button')
        button.textContent = 'Thêm vào giỏ hàng'
        divCol.appendChild(image)
        divCol.appendChild(name)
        divCol.appendChild(price)
        divCol.appendChild(button)
        button.onclick = function () {
            addToCart(product);
        };
        row.appendChild(idCell);
    }
    table.appendChild(row)
    productTable.innerHTML = '';
    productTable.appendChild(table);
}