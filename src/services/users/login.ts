import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Joi from '@hapi/joi';

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['fi'] } })
    .regex(/3as.fi/)
    .required(),
  password: Joi.string().min(4).required(),
});

export const handler: APIGatewayProxyHandler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify('MOI'),
    };
  } catch {
    return {
      statusCode: 401,
      headers: {},
      body: JSON.stringify('ERRPR'),
    };
  }
};
