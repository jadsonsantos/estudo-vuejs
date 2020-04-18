var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        image: './assets/vmSocks-green.jpg',
        onSale: true,
        inStock: false,
        inventory: 0,
        details: ['80% cotton', '20% poliester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'assets/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'assets/vmSocks-blue.png'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
        altText: 'A pair of socks',
        link: 'https://www.vuemastery.com/'
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    },
});