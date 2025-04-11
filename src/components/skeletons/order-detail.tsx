import { Separator } from '@/components/ui/seperator';

const OrderDetailSkeleton = () => {
  return (
    <div className="app-container animate-pulse">
      {/* Order Header Skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Delivery Details Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Order Summary Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="pt-3 mt-2 flex justify-between">
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Order Items Skeleton */}
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailSkeleton;
