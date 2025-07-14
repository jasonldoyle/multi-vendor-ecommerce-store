import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const config = await configPromise; // ✅ resolve the config first

  const payload = await getPayload({
    config, // ✅ now it's the actual config, not a Promise
  });

  return Response.json({
    message: 'This is an example of a custom route.',
  });
};