'use client';

import { useRouter } from 'next/navigation';

import OrderListSkeleton from '@/components/skeletons/order-list';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/seperator';
import { queryKeys } from '@/constants';
import { useApiGet } from '@/http-service';
import { Order, OrderItem } from '@/types/order';
import { formatDate } from '@/utils/utils';

import OrderItemComp from '../_components/order-item';

const OrdersList = () => {
  const router = useRouter();
  const {
    data: ordersList,
    isLoading: loadingOrders,
    isError,
    error,
  } = useApiGet<Order[]>({
    endpoint: 'api/orders',
    queryKey: queryKeys.orders.all,
  });

  if (loadingOrders) {
    return <OrderListSkeleton />;
  }

  if (isError) {
    return (
      <div className="app-container">
        <h3 className="text-2xl mb-8 font-semibold">Orders</h3>
        <div className="text-red-500">
          Error loading orders: {error instanceof Error ? error.message : 'Unknown error'}
        </div>
      </div>
    );
  }

  if (!ordersList?.length) {
    return (
      <div className="app-container">
        <h3 className="text-2xl mb-8 font-semibold">Orders</h3>
        <p className="text-muted-foreground">No orders found</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h3 className="text-2xl mb-8 font-semibold">Orders</h3>
      {ordersList?.map((order) => (
        <div key={order.id}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-medium">Order #{order.id}</h2>
              <p className="text-sm text-muted-foreground">{formatDate(order.date, 'dd MMM yyyy')}</p>
            </div>
            <Button
              variant="default"
              className="rounded-full bg-black hover:bg-gray-800"
              onClick={() => {
                router.push(`/order/order-detail/${order.id}`);
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
    </div>
  );
};

export default OrdersList;
