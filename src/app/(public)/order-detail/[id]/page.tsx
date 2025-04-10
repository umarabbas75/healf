import { useParams } from 'next/navigation';
import React from 'react';

import { useApiGet } from '@/http-service';
import { Order } from '@/types/order';

const OrderDetail = () => {
  const params = useParams();
  const { id } = params;
  const { data: orderDetail, isLoading: loadingOrder } = useApiGet<Order>({
    endpoint: `api/products/${id}`,
    queryKey: ['orders'],
  });
  console.log({ orderDetail });
  if (loadingOrder) return 'Loading...';

  return <div>OrderDetail</div>;
};

export default OrderDetail;
