const queryKeys = {
  orders: {
    all: ['orders'] as const,
    byId: (id: string) => [...queryKeys.orders.all, id] as const,
  },
};

const shippingPrice = 10;

export { queryKeys, shippingPrice };
