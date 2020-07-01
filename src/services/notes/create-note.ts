import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';
import AWS from 'aws-sdk';
import Joi from '@hapi/joi';
import { v4 as uuidV4 } from 'uuid';
import moment from 'moment';

import {
  getUserId,
  getUserName,
  getResponseHeaders,
} from '../../utils/headers';

AWS.config.update({ region: 'eu-north-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

const validationSchema = Joi.object({
  Item: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string(),
  }),
});

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const parsedBody = JSON.parse(event.body || '');
    await validationSchema.validateAsync(parsedBody);
    let item = parsedBody.Item;

    item.user_id = getUserId(event.headers);
    item.username = getUserName(event.headers);
    item.note_id = item.user_id + ':' + uuidV4();
    item.timestamp = moment().unix();
    item.exprires = moment().add(6, 'months').unix();

    await dynamodb
      .put({
        TableName: tableName,
        Item: item,
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
