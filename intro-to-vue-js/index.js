Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})

Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText" />
            </div>

            <div class="product-info">

                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else
                    :class="{ outOfStock: !inStock }">Out of Stock
                </p>
                <p>{{ sale }}</p>
                <a v-bind:href="link">{{ product }}</a>

                <product-details :details="details"></product-details>

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

                <p>Shipping: {{ shipping }}</p>
                <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                    >
                    Add to Cart
                </button>
                <button @click="removeFromCart"
                    >
                Remove Cart
                </button>

                <div>
                    <p v-if="!reviews.length">There are no reviews yet.</p>
                    <ul v-else>
                        <h2>Reviews</h2>
                        <li v-for="(review, index) in reviews" :key="index">
                            <p>{{ review.name }}</p>
                            <p>Rating: {{ review.rating }}</p>
                            <p>{{ review.review }}</p>
                        </li>
                    </ul>
                </div>

                <product-review @review-submited="addReview"></product-review>
            </div>
        </div>
    `,
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
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
            reviews: [],
            altText: 'A pair of socks',
            link: 'https://www.vuemastery.com/'
        }
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        },
        addReview(productReview) {
            this.reviews.push(productReview)
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
                return 2.99
        },
    }
})

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">

            <p class="error" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>

            <p>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="review"></textarea>
            </p>

            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                </select>
            </p>

            <p>
                <input type="submit" value="Submit">  
            </p>
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errros: []
        }
    },
    methods: {
        onSubmit() {
            this.erros = []

            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('review-submited', productReview)
                this.name = null
                this.review = null
                this.rating = null
            } else {
                if (!this.name) this.erros.push('Name required.')
                if (!this.review) this.erros.push('Review required.')
                if (!this.rating) this.erros.push('Rating required.')
            }
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id) {
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    },
});