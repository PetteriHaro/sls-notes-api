import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Joi from '@hapi/joi';
import bcrypt from 'bcryptjs';

import { createError } from '../../utils/errors';
import { AdminRole } from '../../types';
import { checkAuthentication } from '../../utils/auth';
import { connectToDataBase, corsHeaders } from '../../utils/db';
import Admin from '../../models/Admin';

interface CreateAdminBody {
  email: string;
  password: string;
  role: AdminRole;
}

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['fi'] } })
    .regex(/3as.fi/)
    .required(),
  password: Joi.string().required(),
  role: Joi.string()
    .valid('admin', 'contributor', 'super-admin')
    .required(),
});

const url = process.env.MONGO_URL;

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const parsedBody: CreateAdminBody = JSON.parse(event.body);
    await validationSchema.validateAsync(parsedBody);

    await connectToDataBase(url);

    await checkAuthentication(event.headers, 'super-admin');

    const { password, email, role } = parsedBody;

    const admins = await Admin.find();

    if (admins.some(item => item.email === email)) {
      return createError({
        message: 'Email in use',
        altStatusCode: 400,
        name: 'Bad request',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newAdmin = new Admin({
      email,
      role,
      password: hashedPassword,
    });

    const savedAdmin = await newAdmin.save();

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        message: 'Admin created!',
        admin: savedAdmin,
      }),
    };
  } catch (e) {
    return createError({ e });
  }
};
