export interface IProductAttributes {
  id: number;
  product_name: string;
  product_description: string;
  product_varieties: IProductVarieties[];
  date_uploaded: string;
  date_edited: string;
}

export interface IProductVarieties {
  id: number;
  color: string;
  quantity: string;
  images: string[];
  price: string;
}
