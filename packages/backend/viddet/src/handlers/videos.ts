import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const videos: APIGatewayProxyHandler = async (event: any, _context: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};
