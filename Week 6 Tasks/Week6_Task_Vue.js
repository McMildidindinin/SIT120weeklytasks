Vue.component('global', {
    template: '<div>A Global Component</div>',
});

var component1 = {
    template: '<div><global></global>A Nested Component</div>',
}


var app = new Vue({
    el: '#app',
    data: {
        text: 'Hello vue.',
    }
});