import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';
import Joi from '@hapi/joi';
import { getResponseHeaders, getUserId } from '../../utils/headers';

AWS.config.update({ region: 'eu-north-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

export const handler: APIGatewayProxyHandler = async (event, context) => {
  try {
    const timestamp = parseInt(event.pathParameters?.timestamp || '');

    await dynamodb
      .delete({
        TableName: tableName,
        Key: {
          user_id: getUserId(event.headers),
          timestamp,
        },
      })
      .promise();

    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: JSON.stringify({ message: 'Deletion Succces!' }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: getResponseHeaders(),
      body: JSON.stringify({
        error: err.name || 'Server Error',
        message: err.message || 'Unkown error',
      }),
    };
  }
};
