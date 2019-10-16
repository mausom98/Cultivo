import * as yup from "yup";
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from "@worldsibu/convector-core-model";

export class Manufacturer extends ConvectorModel<Manufacturer> {
  @ReadOnly()
  @Required()
  public readonly type = "io.worldsibu.manufacturer";

  @Required()
  @Validate(yup.string())
  public name: string;

  @Required()
  @Validate(yup.number())
  @Default(() => Date.now())
  public updated: number;

  @Required()
  @Validate(yup.number())
  public price: number;

  @Required()
  @Validate(yup.number())
  public fat: number;

  @Required()
  @Validate(yup.number())
  public snf: number;

  @Required()
  @Validate(yup.number())
  public pi: number;

  @Required()
  @Validate(yup.number())
  public productsAvailable: number;
}
