import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { createError } from '../../utils/errors';
import { corsHeaders, connectToDataBase } from '../../utils/db';
import { checkAuthentication } from '../../utils/auth';
import Admin from '../../models/Admin';
import { MaigoAdmin } from '../../types';

const url = process.env.MONGO_URL;

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectToDataBase(url);

    const data = await checkAuthentication(event.headers, 'contributor', true);

    const adminData: MaigoAdmin = await Admin.findById(data._id);

    const returnedAdmin = {
      role: adminData.role,
      _id: adminData._id,
      email: adminData.email,
    };

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        message: 'Admin gotten!',
        admin: returnedAdmin,
      }),
    };
  } catch (e) {
    return createError({ e });
  }
};
