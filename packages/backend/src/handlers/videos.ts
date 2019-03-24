import { APIGatewayProxyHandler, APIGatewayProxyEvent, Context } from 'aws-lambda';
import 'source-map-support/register';

export const videos: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'not implemented',
      input: event,
    }),
  };
};
