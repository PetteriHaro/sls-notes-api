import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Joi from '@hapi/joi';
import bcrypt from 'bcryptjs';

import { createError } from '../../utils/errors';
import { corsHeaders, connectToDataBase } from '../../utils/db';
import { generateAdminJWT } from '../../utils/auth';
import Admin from '../../models/Admin';

interface LoginBody {
  email: string;
  password: string;
}

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['fi'] } })
    .regex(/3as.fi/)
    .required(),
  password: Joi.string()
    .min(4)
    .required(),
});

const url = process.env.MONGO_URL;

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const parsedBody: LoginBody = JSON.parse(event.body);
    await validationSchema.validateAsync(parsedBody);
    const { password, email } = parsedBody;

    await connectToDataBase(url);

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return createError({
        message: 'Authentication failed',
        altStatusCode: 400,
        name: 'BadRequest',
      });
    }
    const isValid = await bcrypt.compare(password, admin.password);

    if (!isValid) {
      return createError({
        message: 'authentication failed',
        altStatusCode: 400,
        name: 'BadRequest',
      });
    }

    const generationData = {
      _id: admin._id,
      email,
    };

    const token = generateAdminJWT(generationData);

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
      },
      body: JSON.stringify({
        message: 'Login Successful',
        token,
      }),
    };
  } catch (e) {
    return createError({ e });
  }
};
