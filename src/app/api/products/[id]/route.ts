import ordersData from '../data';

export async function GET(request: any, { params }: any) {
  console.log({ request });
  // Add a 300ms delay (shorter than the list endpoint)
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Get the ID from route params
  const { id } = params;

  // Find the user
  const order = ordersData?.find((order) => Number(order.id) === Number(id));

  if (!order) {
    return new Response(JSON.stringify({ error: 'Order not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(order), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
