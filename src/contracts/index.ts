export interface ProductAttributes {
  id: number;
  product_name: string;
  product_description: string;
  product_varieties: ProductVarieties[];
  date_uploaded: string;
  date_edited: string;
}

export interface ProductVarieties {
  id: number;
  color: string;
  quantity: string;
  images: string[];
  price: string;
}

export interface ICheckOutProductAttributes {
  id: number;
  quantity: string;
  price: string;
  productName: string;
}
