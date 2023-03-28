let carts = []
function addToCart(product) {
    carts.push(product)
    alert('Đã thêm vào giỏ hàng')
    localStorage.setItem('carts', JSON.stringify(carts))
}

function displayResults() {
    console.log(localStorage.getItem('carts'))
    const carts = JSON.parse(localStorage.getItem('carts'))
    let total = 0
    for (let i = 0; i < carts.length; i++) {
        const cart = carts[i];
        total += cart.price
    }
    document.getElementById('total-price').innerHTML = total

}

// class cart{
//
//     id
//     name
//     price
//     img
//
//     constructor(id,name,price,img) {
//         this.id= id
//         this.name = name
//         this.price = price
//         this.img = img
//     }
//
//     getId(){
//         return this.id
//     }
//     getName(){
//         return this.name
//     }
//     getPrice(){
//         return this.price
//     }
//     getImg(){
//         return this.name
//     }
// }
