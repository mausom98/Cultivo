import { ChaincodeTx } from "@worldsibu/convector-platform-fabric";
import { ConvectorController } from "@worldsibu/convector-core";
import { Manufacturer } from "./manufacturer.model";
import { Distributor } from "./distributor.model";
import { Retailer } from "./retailer.model";
import { Customer } from "./customer.model";
export declare class ProductsController extends ConvectorController<ChaincodeTx> {
    createManufacturer(manufacturer: Manufacturer): Promise<void>;
    createDistributor(distributor: Distributor): Promise<void>;
    createRetailer(retailer: Retailer): Promise<void>;
    createCustomer(customer: Customer): Promise<void>;
    getAllManufacturers(): Promise<Manufacturer[]>;
    getManufacturerById(manufacturerId: string): Promise<Manufacturer>;
    getAllDistributors(): Promise<Distributor[]>;
    getDistributorById(distributorId: string): Promise<Distributor>;
    getAllRetailers(): Promise<Retailer[]>;
    getRetailerById(retailerId: string): Promise<Retailer>;
    getAllCustomers(): Promise<Customer[]>;
    getCustomerById(customerId: string): Promise<Customer>;
    getAllModels(): Promise<void>;
    sendProductsToDistribution(manufacturerId: string, distributorId: string, sentProducts: number): Promise<void>;
    orderProductsFromDistributor(retailerId: string, distributorId: string, orderedProducts: number): Promise<void>;
    receiveProductsFromDistributor(retailerId: string, distributorId: string, receivedProducts: number): Promise<void>;
    buyProductsFromRetailer(retailerId: string, customerId: string, boughtProducts: number): Promise<void>;
}
