import * as yup from "yup";
import { ChaincodeTx } from "@worldsibu/convector-platform-fabric";
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from "@worldsibu/convector-core";

import { Manufacturer } from "./manufacturer.model";
import { Distributor } from "./distributor.model";
import { Retailer } from "./retailer.model";
import { Customer } from "./customer.model";

import {
  GetById,
  GetAll,
  Create,
  Service
} from "@worldsibu/convector-rest-api-decorators";

@Controller("products")
export class ProductsController extends ConvectorController<ChaincodeTx> {
  @Create("Manufacturer")
  @Invokable()
  public async createManufacturer(
    @Param(Manufacturer)
    manufacturer: Manufacturer
  ) {
    await manufacturer.save();
  }

  @Create("Distributor")
  @Invokable()
  public async createDistributor(
    @Param(Distributor)
    distributor: Distributor
  ) {
    await distributor.save();
  }

  @Create("Retailer")
  @Invokable()
  public async createRetailer(
    @Param(Retailer)
    retailer: Retailer
  ) {
    await retailer.save();
  }

  @Create("Customer")
  @Invokable()
  public async createCustomer(
    @Param(Customer)
    customer: Customer
  ) {
    await customer.save();
  }

  @GetAll("Manufacturer")
  @Invokable()
  public async getAllManufacturers() {
    const storedManufacturers = await Manufacturer.getAll<Manufacturer>();
    return storedManufacturers;
  }

  @GetById("Manufacturer")
  @Invokable()
  public async getManufacturerById(
    @Param(yup.string())
    manufacturerId: string
  ) {
    const manufacturer = await Manufacturer.getOne(manufacturerId);
    return manufacturer;
  }

  @GetAll("Distributor")
  @Invokable()
  public async getAllDistributors() {
    const storedDistributors = await Distributor.getAll<Distributor>();
    return storedDistributors;
  }

  @GetById("Distributor")
  @Invokable()
  public async getDistributorById(
    @Param(yup.string())
    distributorId: string
  ) {
    const distributor = await Distributor.getOne(distributorId);
    return distributor;
  }

  @GetAll("Retailer")
  @Invokable()
  public async getAllRetailers() {
    const storedRetailers = await Retailer.getAll<Retailer>();
    return storedRetailers;
  }

  @GetById("Retailer")
  @Invokable()
  public async getRetailerById(
    @Param(yup.string())
    retailerId: string
  ) {
    const retailer = await Retailer.getOne(retailerId);
    return retailer;
  }

  @GetAll("Customer")
  @Invokable()
  public async getAllCustomers() {
    const storedCustomers = await Customer.getAll<Customer>();
    return storedCustomers;
  }

  @GetById("Customer")
  @Invokable()
  public async getCustomerById(
    @Param(yup.string())
    customerId: string
  ) {
    const customer = await Customer.getOne(customerId);
    return customer;
  }

  @Invokable()
  public async getAllModels() {
    const storedCustomers = await Customer.getAll<Customer>();
    console.log(storedCustomers);

    const storedRetailers = await Retailer.getAll<Retailer>();
    console.log(storedRetailers);

    const storedDistributors = await Distributor.getAll<Distributor>();
    console.log(storedDistributors);

    const storedManufacturers = await Manufacturer.getAll<Manufacturer>();
    console.log(storedManufacturers);
  }

  @Service()
  @Invokable()
  public async sendProductsToDistribution(
    @Param(yup.string())
    manufacturerId: string,
    @Param(yup.string())
    distributorId: string,
    @Param(yup.number())
    sentProducts: number
  ) {
    const distributor = await Distributor.getOne(distributorId);
    distributor.productsToBeShipped =
      distributor.productsToBeShipped + sentProducts;
    const manufacturer = await Manufacturer.getOne(manufacturerId);
    manufacturer.productsAvailable =
      manufacturer.productsAvailable - sentProducts;

    await distributor.save();
    await manufacturer.save();
  }

  @Service()
  @Invokable()
  public async orderProductsFromDistributor(
    @Param(yup.string())
    retailerId: string,
    @Param(yup.string())
    distributorId: string,
    @Param(yup.number())
    orderedProducts: number
  ) {
    const retailer = await Retailer.getOne(retailerId);
    retailer.productsOrdered = retailer.productsOrdered + orderedProducts;
    const distributor = await Distributor.getOne(distributorId);
    distributor.productsToBeShipped =
      distributor.productsToBeShipped - orderedProducts;
    distributor.productsShipped = distributor.productsShipped + orderedProducts;

    await retailer.save();
    await distributor.save();
  }

  @Service()
  @Invokable()
  public async receiveProductsFromDistributor(
    @Param(yup.string())
    retailerId: string,
    @Param(yup.string())
    distributorId: string,
    @Param(yup.number())
    receivedProducts: number
  ) {
    const retailer = await Retailer.getOne(retailerId);
    retailer.productsAvailable = retailer.productsAvailable + receivedProducts;
    const distributor = await Distributor.getOne(distributorId);
    distributor.productsReceived =
      distributor.productsReceived + receivedProducts;

    await retailer.save();
    await distributor.save();
  }

  @Service()
  @Invokable()
  public async buyProductsFromRetailer(
    @Param(yup.string())
    retailerId: string,
    @Param(yup.string())
    customerId: string,
    @Param(yup.number())
    boughtProducts: number
  ) {
    const retailer = await Retailer.getOne(retailerId);
    retailer.productsAvailable = retailer.productsAvailable - boughtProducts;
    retailer.productsSold = retailer.productsSold + boughtProducts;
    const customer = await Customer.getOne(customerId);
    customer.productsBought = customer.productsBought + boughtProducts;

    await retailer.save();
    await customer.save();
  }
}
