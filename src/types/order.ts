export interface OrderItem {
  id: string;
  title: string;
  vendor: string;
  price: number;
  quantity: number;

  images: string[];
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
}

export interface DeliveryDetails {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface OrderDetailResponse {
  order: Order;
  deliveryDetails: DeliveryDetails;
}
