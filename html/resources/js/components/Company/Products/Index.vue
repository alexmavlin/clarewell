<template>
    <div>
        <div class="row">
            <div class="col-md-10 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title mb-0">Products</p>
                            <router-link :to="{ name: 'products.create' }" type="button"
                                class="btn btn-info">Add</router-link>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in products">
                                        <td>
                                            <router-link class="table-link" :to="{ name: 'products.show', params: { id: product.id } }">
                                                {{ product.name }}
                                            </router-link>
                                        </td>
                                        <td class="font-weight-bold">
                                            <router-link class="table-link" :to="{ name: 'products.show', params: { id: product.id } }">
                                                ${{ product.price }}
                                            </router-link>
                                        </td>
                                        <td><router-link class="table-link" :to="{ name: 'products.show', params: { id: product.id } }">
                                                {{ product.item_code }}
                                            </router-link>
                                        </td>
                                        <td class="font-weight-medium">
                                            <router-link class="table-link" :to="{ name: 'products.show', params: { id: product.id } }">
                                                <div class="badge badge-success">Available</div>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../../api'
export default {
    created() {
        this.getProducts()
    },
    data() {
        return {
            products: {},
        }
    },
    methods: {
        getProducts() {
            API.get('/api/auth/product/index')
                .then(res => {
                    this.products = res.data
                    console.log(this.products)
                })
        }
    }
}
</script>

<style>
.table-link{
    text-decoration: none;
    color: #000;
}
</style>