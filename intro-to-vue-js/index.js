Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText" />
            </div>
            <div class="product-info">
                <div class="cart">
                    <p>Cart {{ cart }}</p>
                </div>
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else
                    :class="{ outOfStock: !inStock }">Out of Stock
                </p>
                <p>{{ sale }}</p>
                <a v-bind:href="link">{{ product }}</a>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>
                <div class="color-box" 
                        v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        :style="{ backgroundColor: variant.variantColor }"
                        @mouseover="updateProduct(index)"
                        >
                </div>
                <button @click="removeFromCart">Remove Cart</button>
                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                        >Add to Cart
                </button>
            </div>
        </div>
    `,
    data() {
        return {
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
        }
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        removeFromCart: function() {
            this.cart -= 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        }
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
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
                return this.brand + ' ' + this.product + ' are not on sale'
        }
    }
})

var app = new Vue({
    el: '#app'
});