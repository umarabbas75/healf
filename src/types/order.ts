export interface OrderItem {
  id: string;
  title: string;
  vendor: string;
  price: number;
  images: string[];
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  shipping: number;
  discount: number;
}

export interface DeliveryDetails {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}
