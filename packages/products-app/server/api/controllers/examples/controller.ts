import { Request, Response } from 'express';
import { ProductsControllerClient } from '../../../smartContractControllers';
import { Models } from '../../../smartContractModels';

export class Controller {

  async products_getAllManufacturers(req: Request, res: Response): Promise<void> {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getAllManufacturers();
    res.status(200).json(result);
  }

  async products_getAllDistributors(req: Request, res: Response): Promise<void> {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getAllDistributors();
    res.status(200).json(result);
  }

  async products_getAllRetailers(req: Request, res: Response): Promise<void> {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getAllRetailers();
    res.status(200).json(result);
  }

  async products_getAllCustomers(req: Request, res: Response): Promise<void> {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getAllCustomers();
    res.status(200).json(result);
  }


  async products_getManufacturerById(req: Request, res: Response) {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getManufacturerById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async products_getDistributorById(req: Request, res: Response) {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getDistributorById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async products_getRetailerById(req: Request, res: Response) {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getRetailerById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async products_getCustomerById(req: Request, res: Response) {
    let cntrl = await ProductsControllerClient.init();
    let result = await cntrl.getCustomerById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async products_createManufacturer(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let modelRaw = req.body;
      let model = new Models.Manufacturer(modelRaw);
      let result = await cntrl.createManufacturer(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_createDistributor(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let modelRaw = req.body;
      let model = new Models.Distributor(modelRaw);
      let result = await cntrl.createDistributor(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_createRetailer(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let modelRaw = req.body;
      let model = new Models.Retailer(modelRaw);
      let result = await cntrl.createRetailer(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_createCustomer(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let modelRaw = req.body;
      let model = new Models.Customer(modelRaw);
      let result = await cntrl.createCustomer(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_sendProductsToDistribution(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let params = req.body;
      
      let returnObject = await cntrl.sendProductsToDistribution(params.manufacturerId,params.distributorId,params.sentProducts);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_orderProductsFromDistributor(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let params = req.body;
      
      let returnObject = await cntrl.orderProductsFromDistributor(params.retailerId,params.distributorId,params.orderedProducts);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_receiveProductsFromDistributor(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let params = req.body;
      
      let returnObject = await cntrl.receiveProductsFromDistributor(params.retailerId,params.distributorId,params.receivedProducts);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async products_buyProductsFromRetailer(req: Request, res: Response) {
    try {
      let cntrl = await ProductsControllerClient.init();
      let params = req.body;
      
      let returnObject = await cntrl.buyProductsFromRetailer(params.retailerId,params.customerId,params.boughtProducts);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }


}
export default new Controller();
