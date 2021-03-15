import Vue from 'vue';

Vue.filter('formatPrice', (value) => {
    return `${value} €`;
});

Vue.filter('formatPriceDecimal', (value) => {
    return value.toFixed(2);
});