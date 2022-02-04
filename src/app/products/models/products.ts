export type Product = Readonly<{
  ProductId: number
  Name: string;
  ColorIdx: number;
  ProductCode: number;
  ProductDescription: string;
  Price: number;
  VoDatum: string;
  IsHeavy: boolean;
  RestrictedLands: string[];
  IsFsk: boolean;
  IsOrdergruppeC: boolean
}>;

export type Products = Product[];
