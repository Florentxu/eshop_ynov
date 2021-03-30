export default {
    methods: {
        addToWishList(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let productToAdd = {
                qty: 1,
                _id: product._id,
                title: product.title,
                price: product.price,
                img: product.img
            };

            let indexOfExistingProduct = wishlist.findIndex(
                (el) => el._id === productToAdd._id
            )
            if (indexOfExistingProduct !== -1) {
                wishlist[indexOfExistingProduct].qty += 1
            } else {
                wishlist.push(productToAdd);
                console.log(wishlist, "wishlist before stringify");
            }
            let wishListToSend = JSON.stringify(wishlist);
            console.log(wishListToSend);

            localStorage.setItem('wishlist', wishListToSend);
        },
        removeItemWishList(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist'));
            const filteredWishList = wishlist.filter((item) => {
                return item._id !== product._id;
            });
            localStorage.setItem('wishlist', JSON.stringify(filteredWishList));
        },
        clearWishList() {
            localStorage.removeItem('wishlist');    
        },
        getWishList() {
            return JSON.parse(localStorage.getItem('wishlist'));
        }
    }
}