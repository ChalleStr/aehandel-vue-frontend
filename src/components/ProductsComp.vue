<template>
    <div class="container">
        <h3>Antal produkter: {{ Object.keys(this.productsComp.products).length }}</h3>
        <h3>Högsta pris: {{ maxPrice() }}</h3>
        <h3>Lägsta pris: {{ minPrice() }}</h3>
        <h3>Produkter</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Produktnamn</th>
                    <th scope="col">Id</th>
                    <th scope="col">Pris (SEK inkl. moms)</th>
                    <th scope="col">Lagersaldo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, id) in this.productsComp.products"  v-on:click="sortTable(product)" :key="id">
                    <th scope="row">{{product.artiklar_benamning}}</th>
                    <td>{{product.id}}</td>
                    <td v-if="product.momssats === 25">{{product.pris * 1.25}}</td>
                    <td v-else>{{product.pris * 1.06}}</td>
                    <td v-if=" product.lagersaldo  > 0"> Finns i lager</td>
                    <td v-else> Ej i lager</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
    //let products;

    export default {
        name: 'ProductsComp',
        data() {
            return {
                productsComp: null,
                //productObject: null,
                maxVal: 0,
                minVal: 0,
            };
        },
        methods: {
            maxPrice() {
                let priceArray = [];
                this.productsComp.products.forEach((product) => {
                    priceArray.push(product.pris);
                    });               
                //console.log(priceArray);
                let maxVal = Math.max(...priceArray);
                return maxVal;

            },
            minPrice() {
                let priceArray = [];
                this.productsComp.products.forEach((product) => {
                    priceArray.push(product.pris);
                    });                
                //console.log(priceArray);
                let minVal = Math.min(...priceArray);
                return minVal;
            },
            sortTable(column) {
                this.productsComp.products.sort((a, b) => {
                    if (a[column] > b[column]) {
                        return 1;
                    } else if (a[column] < b[column]) {
                        return -1;
                    }
                    return 0;
                });
            }
        },
        created: function() {
            axios
                .get('http://localhost:1337/')
                .then(res => {
                    this.productsComp = res.data;
                    //products = this.productsComp;
                    //console.log("This is all data:");
                    console.log(typeof(res.data));
/*                    const obj = JSON.parse(this.productsComp);
                   console.log(obj); */
                });
        },
        computed: {
/*             productsSorted() {
                return [...this.productsComp.products].sort((a, b) => { return a.artiklar_benamning.localCompare(b.artiklar_benamning);
                });
            }, */
            columns() {
                if (this.productsComp.products.length == 0) {
                    return [];
                }
                return Object.keys(this.productsComp.products[0]);
            }
        },
    }

        
</script>

<style>
    h3 {
        margin-bottom: 5%;
    }
</style>