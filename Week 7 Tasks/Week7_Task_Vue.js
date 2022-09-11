Vue.component('global', {
    template: '<div>A Global Component</div>',
});

var component1 = {
    template: '<div><global></global>Inside a local component. Is this what I am meant to do?</div>',
};


var app = new Vue({
    el: '#app',
    data: {
        text: 'Hello vue.',
    },
    components: {
        component1,
    },
});

new Vue({
    el: 'listcheck',
    data: {
        checkednames: []
    },
});