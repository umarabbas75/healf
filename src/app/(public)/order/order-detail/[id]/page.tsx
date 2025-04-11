'use client';
import { useParams } from 'next/navigation';
import React from 'react';

import OrderDetailSkeleton from '@/components/skeletons/order-detail';
import { Separator } from '@/components/ui/seperator';
import { queryKeys, shippingPrice } from '@/constants';
import { useApiGet } from '@/http-service';
import { OrderDetailResponse, OrderItem } from '@/types/order';

import OrderItemComp from '../../_components/order-item';

const OrderDetail = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading: loadingOrder } = useApiGet<OrderDetailResponse>({
    endpoint: `api/orders/${id}`,
    queryKey: queryKeys.orders.byId(id as string),
    config: {
      enabled: !!id,
    },
  });
  const { order, deliveryDetails } = data || {};
  const { name, address, zipCode, country } = deliveryDetails || {};

  const subtotal = order?.items.reduce((sum, item) => sum + item.price, 0) ?? 0;
  const grandTotal = subtotal + shippingPrice;

  if (loadingOrder) return <OrderDetailSkeleton />;

  return (
    <div className="app-container">
      {/* Order Header */}
      <h1 className="text-2xl font-bold mb-6">Order #79678</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Column 1: Delivery Details */}
        <div className=" rounded-lg ">
          <h2 className=" font-semibold mb-4">Delivery details</h2>
          <div className="space-y-2 text-gray-700">
            <p>{name}</p>
            <p>{address}</p>
            <p>{zipCode}</p>
            <p>{country}</p>
          </div>
        </div>

        {/* Column 2: Order Summary */}
        <div className="rounded-lg ">
          <h2 className=" font-semibold mb-4">Order summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£{subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>£{shippingPrice?.toFixed(2)}</span>
            </div>
            <div className=" border-gray-200 pt-3 mt-2 flex justify-between font-semibold ">
              <span>Grand total</span>
              <span>£{grandTotal?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        {order?.items.slice(0, 3).map((item: OrderItem) => <OrderItemComp key={item.id} orderItem={item} />)}
      </div>
    </div>
  );
};

export default OrderDetail;
