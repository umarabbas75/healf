import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { OrderItem } from '@/types/order';
type props = {
  orderItem: OrderItem;
};
const OrderItemComp = ({ orderItem }: props) => {
  const { title, images, vendor, price, id, quantity = 1 } = orderItem || {};
  return (
    <div key={id} className="flex items-center gap-4">
      <div className="h-36 w-32 relative  rounded-md overflow-hidden bg-[#f6f6f6]">
        <Image alt={title} src={images?.[0]} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold mb-2">{vendor}</p>
        <p className="text-sm capitalize mb-4">{title}</p>
        <p className="text-sm text-muted-foreground mb-3">Qty: {quantity}</p>
        <Button variant="outline" size="sm" className=" rounded-full text-sm">
          View item
        </Button>
      </div>
      <p className="font-medium">£{price.toFixed(2)}</p>
    </div>
  );
};

export default OrderItemComp;
