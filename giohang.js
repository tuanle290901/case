
function addToCart(product) {
    const carts = JSON.parse(localStorage.getItem('carts')) || []
    carts.push(product)
    alert('Đã thêm vào giỏ hàng')

    localStorage.setItem('carts', JSON.stringify(carts))
}


/** Xóa giỏ hàng */
function delToCart(product) {
    let result = confirm('Bạn có chắc chắn muốn xóa khỏi giỏ hàng không')
    if ( result === true){
        const mycarts = JSON.parse(localStorage.getItem('carts'))
        const index = mycarts.indexOf(product)
        mycarts.splice(index,1)
        localStorage.setItem('carts', JSON.stringify(mycarts))
        window.location.reload()
    }

}


