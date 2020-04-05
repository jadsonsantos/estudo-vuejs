Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: false,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' },
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

app.seen = true;
app.todos.push({ text: 'New item' })