<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">New Product</h4>
                        <form class="forms-sample" @submit.prevent="storeProduct()">
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
    data() {
        return {
            form: {
                name: '',
                price: '',
                cost: '',
                vat: '',
            }
        }
    },
    methods: {
        storeProduct() {
            console.log("here")
            API.post('/api/auth/product/store', this.form)
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