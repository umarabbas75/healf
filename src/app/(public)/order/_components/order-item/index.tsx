import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { OrderItem } from '@/types/order';
type props = {
  orderItem: OrderItem;
};
const OrderItemComp = ({ orderItem }: props) => {
  return (
    <div key={orderItem.id} className="flex items-center gap-4">
      <div className="h-36 w-32 relative  rounded-md overflow-hidden bg-[#f6f6f6]">
        <Image alt={orderItem?.title} src={orderItem?.images?.[0]} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold mb-2">{orderItem.vendor}</p>
        <p className="text-sm capitalize mb-4">{orderItem.title}</p>
        <Button variant="outline" size="sm" className=" rounded-full text-sm">
          View item
        </Button>
      </div>
      <p className="font-medium">£{orderItem.price.toFixed(2)}</p>
    </div>
  );
};

export default OrderItemComp;
