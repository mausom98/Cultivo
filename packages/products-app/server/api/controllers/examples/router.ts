import express from 'express';
import controller from './controller'
export default express.Router()

    .post('/manufacturers/', controller.products_createManufacturer)
    .post('/distributors/', controller.products_createDistributor)
    .post('/retailers/', controller.products_createRetailer)
    .post('/customers/', controller.products_createCustomer)
    .get('/manufacturers/', controller.products_getAllManufacturers)
    .get('/distributors/', controller.products_getAllDistributors)
    .get('/retailers/', controller.products_getAllRetailers)
    .get('/customers/', controller.products_getAllCustomers)
    .get('/manufacturers/:id', controller.products_getManufacturerById)
    .get('/distributors/:id', controller.products_getDistributorById)
    .get('/retailers/:id', controller.products_getRetailerById)
    .get('/customers/:id', controller.products_getCustomerById)
    .post('/sendProductsToDistribution', controller.products_sendProductsToDistribution)
    .post('/orderProductsFromDistributor', controller.products_orderProductsFromDistributor)
    .post('/receiveProductsFromDistributor', controller.products_receiveProductsFromDistributor)
    .post('/buyProductsFromRetailer', controller.products_buyProductsFromRetailer)

;
