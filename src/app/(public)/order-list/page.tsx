'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useApiGet } from '@/http-service';
import { Order } from '@/types/order';

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
    <div className="space-y-8">
      test
      {ordersList?.map((order) => (
        <div key={order.id} className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Order #{order.id}</h2>
              <p className="text-sm text-muted-foreground">{order.date}</p>
            </div>
            <Button
              variant="default"
              className="rounded-full bg-black hover:bg-gray-800"
              onClick={() => {
                router.push(`/order-detail/${order.id}`);
                // setSelectedOrder(order);
              }}
            >
              View details
            </Button>
          </div>

          <div className="space-y-4">
            {order.items.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="h-20 w-20 relative border rounded-md overflow-hidden">
                  <Image src={item?.images?.[0]} alt={item?.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{item.vendor}</p>
                  <p>{item.title}</p>
                  <Button variant="outline" size="sm" className="mt-2 rounded-full">
                    View item
                  </Button>
                </div>
                <p className="font-medium">£{item.price.toFixed(2)}</p>
              </div>
            ))}
            {order.items.length > 3 && (
              <p className="text-sm text-muted-foreground">+ {order.items.length - 3} more items</p>
            )}
          </div>

          <hr />
        </div>
      ))}
      {/* <OrderDetailsDialog order={selectedOrder} open={dialogOpen} onOpenChange={setDialogOpen} /> */}
    </div>
  );
};

export default OrdersList;
