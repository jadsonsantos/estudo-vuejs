var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        onSale: true,
        inventory: 0,
        details: ['80% cotton', '20% poliester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'assets/vmSocks-green.jpg',
                variantQuantity: 0
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'assets/vmSocks-blue.png',
                variantQuantity: 10
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
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
});