<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
/* Requests */
use App\Http\Requests\Company\Products\StoreRequest;
use App\Http\Requests\Company\Products\UpdateRequest;
/* Models */
use App\Models\Clinic\Product;
use App\Models\Clinic\Company;
use App\User;

class ProductController extends Controller
{
    public function index() {
        return User::find(auth()->user()->id)->company_products()->get();
    }
    public function store(StoreRequest $request){
        $data = $request->validated();

        $store_data = [
            'name' => $data['name'],
            'price' => $data['price'],
            'cost' => $data['cost'] ? $data['cost'] : 0,
            'vat' => $data['vat'] ? $data['vat'] : '0',
            'item_code' => bin2hex(random_bytes(5)),
            'stock_level' => '0',
            'company_id' => Company::where('owner_id', auth()->user()->id)->first()->id,
        ];

        Product::create($store_data);

    }

    public function show($id) {
        return Product::find($id);
    }

    public function update(UpdateRequest $request, Product $product) {
        $data = $request->validated();

        $product->update($data);
    }

    public function delete(Product $product) {
        $product->delete();
    }
}
