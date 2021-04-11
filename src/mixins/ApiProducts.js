import apiConfigs from '../configs/api.configs';

export default {
    data() {
        return {
            productsFromApi: [],
        }
    },
    created() {
        fetch(`${apiConfigs.apiUrl}/products`)
        .then(res => res.json())
        .then((data) => {
            this.productsFromApi = data;
        })
        .catch((err) => console.log(err));
    },
}