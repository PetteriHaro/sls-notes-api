import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { createError } from '../../utils/errors';
import { corsHeaders, connectToDataBase } from '../../utils/db';
import { checkAuthentication } from '../../utils/auth';
import Admin from '../../models/Admin';

const url = process.env.MONGO_URL;

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectToDataBase(url);

    const data = await checkAuthentication(event.headers, 'super-admin', true);

    const admins = await Admin.find();

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        message: 'Admins gotten!',
        admins: admins.filter(admin => admin._id.toString() !== data._id),
      }),
    };
  } catch (e) {
    return createError({ e });
  }
};
