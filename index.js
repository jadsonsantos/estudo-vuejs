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
    }
});

app.seen = true;
app.todos.push({ text: 'New item' })