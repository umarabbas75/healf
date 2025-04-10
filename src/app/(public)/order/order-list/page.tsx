'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/seperator';
import { useApiGet } from '@/http-service';
import { Order, OrderItem } from '@/types/order';

import OrderItemComp from '../_components/order-item';

const OrdersList = () => {
  const router = useRouter();
  const { data: ordersList, isLoading: loadingOrders } = useApiGet<Order[]>({
    endpoint: 'api/products',
    queryKey: ['orders'],
  });

  console.log({ ordersList });

  if (loadingOrders) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="app-container">
      <h3 className="text-2xl mb-8 font-semibold">Orders</h3>
      {ordersList?.map((order) => (
        <div key={order.id}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-medium">Order #{order.id}</h2>
              <p className="text-sm text-muted-foreground">{order.date}</p>
            </div>
            <Button
              variant="default"
              className="rounded-full bg-black hover:bg-gray-800"
              onClick={() => {
                router.push(`/order/order-detail/${order.id}`);
                // setSelectedOrder(order);
              }}
            >
              View details
            </Button>
          </div>

          <div className="space-y-4">
            {order.items.slice(0, 3).map((item: OrderItem) => (
              <OrderItemComp key={item.id} orderItem={item} />
            ))}
          </div>

          <Separator className="my-4" />
        </div>
      ))}
      {/* <OrderDetailsDialog order={selectedOrder} open={dialogOpen} onOpenChange={setDialogOpen} /> */}
    </div>
  );
};

export default OrdersList;
