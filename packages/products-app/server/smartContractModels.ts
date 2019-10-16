import { BaseStorage } from '@worldsibu/convector-core-storage';
import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';

import { Customer as CustomerModel } from 'products-cc/dist/src';
import { Distributor as DistributorModel } from 'products-cc/dist/src';
import { Manufacturer as ManufacturerModel } from 'products-cc/dist/src';
import { Products as ProductsModel } from 'products-cc/dist/src';
import { Retailer as RetailerModel } from 'products-cc/dist/src';

export namespace Models {
  export const Customer = CustomerModel;
  export const Distributor = DistributorModel;
  export const Manufacturer = ManufacturerModel;
  export const Products = ProductsModel;
  export const Retailer = RetailerModel;
}
