// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Products, ProductsController } from '../src';

describe('Products', () => {
  let adapter: MockControllerAdapter;
  let productsCtrl: ConvectorControllerClient<ProductsController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    productsCtrl = ClientFactory(ProductsController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'ProductsController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Products({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await productsCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Products>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});