"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var manufacturer_model_1 = require("./manufacturer.model");
var distributor_model_1 = require("./distributor.model");
var retailer_model_1 = require("./retailer.model");
var customer_model_1 = require("./customer.model");
var convector_rest_api_decorators_1 = require("@worldsibu/convector-rest-api-decorators");
var ProductsController = (function (_super) {
    tslib_1.__extends(ProductsController, _super);
    function ProductsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductsController.prototype.createManufacturer = function (manufacturer) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, manufacturer.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.createDistributor = function (distributor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, distributor.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.createRetailer = function (retailer) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, retailer.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.createCustomer = function (customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, customer.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.getAllManufacturers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var storedManufacturers;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, manufacturer_model_1.Manufacturer.getAll()];
                    case 1:
                        storedManufacturers = _a.sent();
                        return [2, storedManufacturers];
                }
            });
        });
    };
    ProductsController.prototype.getManufacturerById = function (manufacturerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var manufacturer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, manufacturer_model_1.Manufacturer.getOne(manufacturerId)];
                    case 1:
                        manufacturer = _a.sent();
                        return [2, manufacturer];
                }
            });
        });
    };
    ProductsController.prototype.getAllDistributors = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var storedDistributors;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, distributor_model_1.Distributor.getAll()];
                    case 1:
                        storedDistributors = _a.sent();
                        return [2, storedDistributors];
                }
            });
        });
    };
    ProductsController.prototype.getDistributorById = function (distributorId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var distributor;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, distributor_model_1.Distributor.getOne(distributorId)];
                    case 1:
                        distributor = _a.sent();
                        return [2, distributor];
                }
            });
        });
    };
    ProductsController.prototype.getAllRetailers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var storedRetailers;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, retailer_model_1.Retailer.getAll()];
                    case 1:
                        storedRetailers = _a.sent();
                        return [2, storedRetailers];
                }
            });
        });
    };
    ProductsController.prototype.getRetailerById = function (retailerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var retailer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, retailer_model_1.Retailer.getOne(retailerId)];
                    case 1:
                        retailer = _a.sent();
                        return [2, retailer];
                }
            });
        });
    };
    ProductsController.prototype.getAllCustomers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var storedCustomers;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, customer_model_1.Customer.getAll()];
                    case 1:
                        storedCustomers = _a.sent();
                        return [2, storedCustomers];
                }
            });
        });
    };
    ProductsController.prototype.getCustomerById = function (customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var customer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, customer_model_1.Customer.getOne(customerId)];
                    case 1:
                        customer = _a.sent();
                        return [2, customer];
                }
            });
        });
    };
    ProductsController.prototype.getAllModels = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var storedCustomers, storedRetailers, storedDistributors, storedManufacturers;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, customer_model_1.Customer.getAll()];
                    case 1:
                        storedCustomers = _a.sent();
                        console.log(storedCustomers);
                        return [4, retailer_model_1.Retailer.getAll()];
                    case 2:
                        storedRetailers = _a.sent();
                        console.log(storedRetailers);
                        return [4, distributor_model_1.Distributor.getAll()];
                    case 3:
                        storedDistributors = _a.sent();
                        console.log(storedDistributors);
                        return [4, manufacturer_model_1.Manufacturer.getAll()];
                    case 4:
                        storedManufacturers = _a.sent();
                        console.log(storedManufacturers);
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.sendProductsToDistribution = function (manufacturerId, distributorId, sentProducts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var distributor, manufacturer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, distributor_model_1.Distributor.getOne(distributorId)];
                    case 1:
                        distributor = _a.sent();
                        distributor.productsToBeShipped =
                            distributor.productsToBeShipped + sentProducts;
                        return [4, manufacturer_model_1.Manufacturer.getOne(manufacturerId)];
                    case 2:
                        manufacturer = _a.sent();
                        manufacturer.productsAvailable =
                            manufacturer.productsAvailable - sentProducts;
                        return [4, distributor.save()];
                    case 3:
                        _a.sent();
                        return [4, manufacturer.save()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.orderProductsFromDistributor = function (retailerId, distributorId, orderedProducts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var retailer, distributor;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, retailer_model_1.Retailer.getOne(retailerId)];
                    case 1:
                        retailer = _a.sent();
                        retailer.productsOrdered = retailer.productsOrdered + orderedProducts;
                        return [4, distributor_model_1.Distributor.getOne(distributorId)];
                    case 2:
                        distributor = _a.sent();
                        distributor.productsToBeShipped =
                            distributor.productsToBeShipped - orderedProducts;
                        distributor.productsShipped = distributor.productsShipped + orderedProducts;
                        return [4, retailer.save()];
                    case 3:
                        _a.sent();
                        return [4, distributor.save()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.receiveProductsFromDistributor = function (retailerId, distributorId, receivedProducts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var retailer, distributor;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, retailer_model_1.Retailer.getOne(retailerId)];
                    case 1:
                        retailer = _a.sent();
                        retailer.productsAvailable = retailer.productsAvailable + receivedProducts;
                        return [4, distributor_model_1.Distributor.getOne(distributorId)];
                    case 2:
                        distributor = _a.sent();
                        distributor.productsReceived =
                            distributor.productsReceived + receivedProducts;
                        return [4, retailer.save()];
                    case 3:
                        _a.sent();
                        return [4, distributor.save()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductsController.prototype.buyProductsFromRetailer = function (retailerId, customerId, boughtProducts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var retailer, customer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, retailer_model_1.Retailer.getOne(retailerId)];
                    case 1:
                        retailer = _a.sent();
                        retailer.productsAvailable = retailer.productsAvailable - boughtProducts;
                        retailer.productsSold = retailer.productsSold + boughtProducts;
                        return [4, customer_model_1.Customer.getOne(customerId)];
                    case 2:
                        customer = _a.sent();
                        customer.productsBought = customer.productsBought + boughtProducts;
                        return [4, retailer.save()];
                    case 3:
                        _a.sent();
                        return [4, customer.save()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Create("Manufacturer"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(manufacturer_model_1.Manufacturer))
    ], ProductsController.prototype, "createManufacturer", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Create("Distributor"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(distributor_model_1.Distributor))
    ], ProductsController.prototype, "createDistributor", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Create("Retailer"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(retailer_model_1.Retailer))
    ], ProductsController.prototype, "createRetailer", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Create("Customer"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(customer_model_1.Customer))
    ], ProductsController.prototype, "createCustomer", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetAll("Manufacturer"),
        convector_core_1.Invokable()
    ], ProductsController.prototype, "getAllManufacturers", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetById("Manufacturer"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], ProductsController.prototype, "getManufacturerById", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetAll("Distributor"),
        convector_core_1.Invokable()
    ], ProductsController.prototype, "getAllDistributors", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetById("Distributor"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], ProductsController.prototype, "getDistributorById", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetAll("Retailer"),
        convector_core_1.Invokable()
    ], ProductsController.prototype, "getAllRetailers", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetById("Retailer"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], ProductsController.prototype, "getRetailerById", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetAll("Customer"),
        convector_core_1.Invokable()
    ], ProductsController.prototype, "getAllCustomers", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.GetById("Customer"),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], ProductsController.prototype, "getCustomerById", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], ProductsController.prototype, "getAllModels", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Service(),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_1.Param(yup.number()))
    ], ProductsController.prototype, "sendProductsToDistribution", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Service(),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_1.Param(yup.number()))
    ], ProductsController.prototype, "orderProductsFromDistributor", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Service(),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_1.Param(yup.number()))
    ], ProductsController.prototype, "receiveProductsFromDistributor", null);
    tslib_1.__decorate([
        convector_rest_api_decorators_1.Service(),
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_1.Param(yup.number()))
    ], ProductsController.prototype, "buyProductsFromRetailer", null);
    ProductsController = tslib_1.__decorate([
        convector_core_1.Controller("products")
    ], ProductsController);
    return ProductsController;
}(convector_core_1.ConvectorController));
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map