declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_URL: string;
    API_NAME: 'devapi' | 'api';
    SERVICE_ENVIRONMENT: 'dev' | 'prod';
    ENVIRONMENT: 'Development' | 'Production';
    JWT_KEY: string;
  }
}
