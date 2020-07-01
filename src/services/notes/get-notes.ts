import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';

import { getResponseHeaders, getUserId } from '../../utils/headers';

AWS.config.update({ region: 'eu-north-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const query = event.queryStringParameters;
    const limit = parseInt(query?.limit || '5');
    const user_id = getUserId(event.headers);

    const params: AWS.DynamoDB.DocumentClient.QueryInput = {
      TableName: tableName,
      KeyConditionExpression: 'user_id = :uid',
      ExpressionAttributeValues: {
        ':uid': user_id,
      },
      Limit: limit,
      ScanIndexForward: false,
    };

    const startTimeStamp = parseInt(query?.start || '0');

    if (startTimeStamp > 0) {
      params.ExclusiveStartKey = {
        user_id: user_id,
        timestamp: startTimeStamp,
      };
    }

    const data = await dynamodb.query(params).promise();

    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: JSON.stringify(data),
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
