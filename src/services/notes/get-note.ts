import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';
import R from 'ramda';
import { getResponseHeaders } from '../../utils/headers';

AWS.config.update({ region: 'eu-north-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const note_id = decodeURIComponent(event.pathParameters?.noteId || '');
    console.log(note_id);
    const data = await dynamodb
      .query({
        TableName: tableName,
        IndexName: 'note_id-index',
        KeyConditionExpression: 'note_id = :note_id',
        ExpressionAttributeValues: {
          ':note_id': note_id,
        },
        Limit: 1,
      })
      .promise();

    if (R.isEmpty(data.Items) || data.Items?.length > 1) {
      throw {
        statusCode: 404,
        name: 'Item not found!',
        message: 'We did not find that item from database',
      };
    }

    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: JSON.stringify(data.Items[0]),
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
