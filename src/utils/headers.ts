export const getResponseHeaders = () => {
  return {
    'Access-Control-Allow-Origin': '*',
  };
};

export const getUserId = (headers: any) => {
  return headers.AppUserId;
};

export const getUserName = (headers: any) => {
  return headers.AppUsername;
};
