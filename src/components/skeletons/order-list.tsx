// components/skeletons/order-list.tsx
'use client';

import { Separator } from '@/components/ui/seperator';

const OrderListSkeleton = () => {
  return (
    <div className="app-container">
      {/* Title Skeleton */}
      <div className="h-8 w-32 bg-gray-200 rounded mb-8 animate-pulse"></div>

      {/* Repeat skeleton for 3 order items */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="mb-6">
          {/* Order Header Skeleton */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-10 w-28 bg-gray-300 rounded-full animate-pulse"></div>
          </div>

          {/* Order Items Skeleton */}
          <div className="space-y-4">
            {[...Array(3)].map((_, itemIndex) => (
              <div key={itemIndex} className="flex gap-4 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default OrderListSkeleton;
