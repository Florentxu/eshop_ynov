export default {
    methods: {
        // quand vous insérez dans le local storage => stringifier
        // le panier sera un tableau d'objet 
        addToCart(product) {
            //Ajouter au panier
            //créer un objet avec les information du produit sans oublier de rajouter un qty à 1
            //insérer cet objet dans le localstorage // localstorage.setItem('cart');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let productToAdd = {
                qty: 1,
                _id: product._id,
                title: product.title,
                price: product.price,
                img: product.img
            };

            let indexOfExistingProduct = cart.findIndex(
                (el) => el._id === productToAdd._id
            )

            if (indexOfExistingProduct !== -1) {
                cart[indexOfExistingProduct].qty += 1
            } else {
                cart.push(productToAdd);
                console.log(cart, "cart before stringify");
            }
            let cartToSend = JSON.stringify(cart);
            console.log(cartToSend);

            localStorage.setItem('cart', cartToSend);
        },
        removeItemCart(product) {
            //Récuperer le panier localStorage.getItem + parser
            // Le modifer
            // le réinserer local

            let cart = JSON.parse(localStorage.getItem('cart'));
            const filteredCart = cart.filter((item) => {
                return item._id !== product._id;
            });
            localStorage.setItem('cart', JSON.stringify(filteredCart));
        },
        clearCart() {
            localStorage.removeItem('cart');
        },
        removeOneQty(product) {
            let productToAdd = {
                qty: 1,
                _id: product._id,
                title: product.title,
                price: product.price,
                img: product.img
            };
            let cart = JSON.parse(localStorage.getItem('cart'));
            let indexOfExistingProduct = cart.findIndex(
                (el) => el._id === productToAdd._id
            )
            if (indexOfExistingProduct !== -1) {

                if (cart[indexOfExistingProduct].qty > 1) {
                    cart[indexOfExistingProduct].qty -= 1
                    // } else {
                    //     supprimer le produit
                    //     cart = cart.filter((item) => {
                    //         return item._id !== product._id;
                    //     });
                }
            }
            let cartToSend = JSON.stringify(cart);
            // console.log(cartToSend);
            localStorage.setItem('cart', cartToSend);

        },
        addOneQty(product) {
            let productToAdd = {
                qty: 1,
                _id: product._id,
                title: product.title,
                price: product.price,
                img: product.img
            };
            let cart = JSON.parse(localStorage.getItem('cart'));
            let indexOfExistingProduct = cart.findIndex(
                (el) => el._id === productToAdd._id
            )

            if (indexOfExistingProduct !== -1) {
                cart[indexOfExistingProduct].qty += 1
            }
            let cartToSend = JSON.stringify(cart);
            console.log(cartToSend);

            localStorage.setItem('cart', cartToSend);
        },
        getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        },
        getCartTotal(cart) {
            // Montant total a payer

            let total = cart.reduce((total,item) => total + (item.qty * item.price), 0);
            return total;

        },
        getCartCount(cart) {
            // Nombre de qty dans le panier
            // let cart = JSON.parse(localStorage.getItem('cart'))
            // const totalQty = (accumulateur, quantity) => accumulateur + quantity.qty ;
            // return console.log("Qty de cart" ,cart.reduce(totalQty, 0));
            let total = cart.reduce((total,item) => total + item.qty, 0);
            return total;
        }
    }
}