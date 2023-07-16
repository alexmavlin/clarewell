<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">New Product</h4>
                        <form class="forms-sample" @submit.prevent="editProduct()">
                            <div class="form-group">
                                <label for="name"><b>Product title*</b></label>
                                <input v-model="form.name" type="text" class="form-control" id="name"
                                    placeholder="Product title">
                            </div>
                            <div class="form-group">
                                <label for="price"><b>Product price*</b></label>
                                <input v-model="form.price" type="number" class="form-control" id="price"
                                    placeholder="Product price">
                            </div>
                            <div class="form-group">
                                <label for="cost">Product cost</label>
                                <input v-model="form.cost" type="number" class="form-control" id="cost"
                                    placeholder="Product cost">
                            </div>
                            <div class="form-group">
                                <label for="vat">VAT Tax</label>
                                <select v-model="form.vat" class="form-control" id="vat">
                                    <option value="" disabled selected>Choose</option>
                                    <option value="0">0%</option>
                                    <option value="5">5%</option>
                                    <option value="10">10%</option>
                                    <option value="15">15%</option>
                                    <option value="20">20%</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary mr-2">Submit</button>
                            <router-link :to="{name: 'products.index'}" class="btn btn-light">Cancel</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../../api'
export default {
    mounted() {
        this.getProductData()
    },
    data() {
        return {
            form: {
                name: '',
                price: '',
                cost: '',
                vat: '',
            },
            product: {}
        }
    },
    methods: {
        getProductData() {
            console.log(this.$route.params.id)
            let id = this.$route.params.id
            API.get('/api/auth/product/' + id)
                .then(res => {
                    this.product = res.data
                    this.form.name = res.data.name
                    this.form.price = res.data.price
                    this.form.cost = res.data.cost
                    this.form.vat = res.data.vat
                    console.log(this.product)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editProduct() {
            API.post('/api/auth/product/' + this.product.id, this.form)
                .then(res => {
                    console.log(this.form)
                    this.$router.push({name: 'products.index'})
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>