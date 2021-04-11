import apiConfigs from '../configs/api.configs';

export default {
    data() {
        return {
            categoryArray:[]
        }
    },
    created() {
        fetch(`${apiConfigs.apiUrl}/category`)
            .then((res) => res.json())
            .then((data) => {
                this.categoryArray = data;
            })
            .catch((err) => console.log(err));
    },
}