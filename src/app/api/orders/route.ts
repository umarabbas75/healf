import { ordersData } from '../../../data/order';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return new Response(JSON.stringify(ordersData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
