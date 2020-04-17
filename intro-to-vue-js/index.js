var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        onSale: true,
        inStock: true,
        inventory: 5,
        details: ['80% cotton', '20% poliester', 'Gender-neutral'],
        altText: 'A pair of socks',
        link: 'https://www.vuemastery.com/'
    }
});