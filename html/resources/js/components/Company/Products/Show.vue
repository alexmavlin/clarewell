<template>
    <div>
        <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h4 class="card-title">{{ product.name }}</h4>
                        <div class="d-flex">
                            <router-link :to="{ name: 'products.edit', params: { id: product.id } }" type="button"
                                class="btn btn-info mr-2">Edit</router-link>
                            <button @click.prevent="deleteFunction()" type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <p class="card-description">
                        Item code: {{ product.item_code }}
                    </p>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Price:</td>
                                    <td>£{{ product.price }}</td>
                                </tr>
                                <tr>
                                    <td>Cost:</td>
                                    <td>£{{ product.cost }}</td>
                                </tr>
                                <tr>
                                    <td>VAT tax rate:</td>
                                    <td>{{ product.vat }}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../../api'
import Swal from 'sweetalert2'

export default {
    created() {
        this.getProductData()
    },
    data() {
        return {
            product: {},
        }
    },
    methods: {
        getProductData() {
            console.log(this.$route.params.id)
            let id = this.$route.params.id
            api.get('/api/auth/product/' + id)
                .then(res => {
                    this.product = res.data
                    console.log(this.product)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteFunction() {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    api.delete('/api/auth/product/' + this.product.id)
                        .then(res => {
                            Swal.fire(
                                'Deleted!',
                                'Product "' + this.product.name + '" has been deleted.',
                                'success'
                            )
                            this.$router.push({name: 'products.index'})
                        })
                        .catch(err => {
                            console.log(err)
                            console.log(err.response)
                        })
                }
            })
        }
    }
}
</script>