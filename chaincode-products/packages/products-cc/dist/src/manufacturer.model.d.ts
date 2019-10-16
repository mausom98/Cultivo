import { ConvectorModel } from "@worldsibu/convector-core-model";
export declare class Manufacturer extends ConvectorModel<Manufacturer> {
    readonly type: string;
    name: string;
    updated: number;
    price: number;
    fat: number;
    snf: number;
    pi: number;
    productsAvailable: number;
}
