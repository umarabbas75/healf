/**
 * Centralized query key factory and constants for orders API.
 * Provides consistent keys for react-query cache management.
 */
const queryKeys = {
  orders: {
    all: ['orders'] as const,
    byId: (id: string) => [...queryKeys.orders.all, id] as const,
  },
};

/** Default shipping price used across order calculations */
const shippingPrice = 10;

export { queryKeys, shippingPrice };
