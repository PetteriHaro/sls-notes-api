import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';
import moment from 'moment';

import {
  getResponseHeaders,
  getUserName,
  getUserId,
} from '../../utils/headers';

AWS.config.update({ region: 'eu-north-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    let item = event.body ? JSON.parse(event.body).Item : undefined;

    item.user_id = getUserId(event.headers);
    item.username = getUserName(event.headers);
    item.exprires = moment().add(6, 'months').unix();

    await dynamodb
      .put({
        TableName: tableName,
        Item: item,
        ConditionExpression: '#t = :t',
        ExpressionAttributeNames: {
          '#t': 'timestamp',
        },
        ExpressionAttributeValues: {
          ':t': item.timestamp,
        },
      })
      .promise();

    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: JSON.stringify(item),
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
