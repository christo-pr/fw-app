import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

let CognitoPool: CognitoUserPool;

export const getCognitoPool = () => {
  if (CognitoPool) return CognitoPool;

  return (CognitoPool = new CognitoUserPool({
    UserPoolId: import.meta.env.VITE_USER_POOL,
    ClientId: import.meta.env.VITE_POOL_CLIENT_ID,
  }));
};

export const login = (email: string, password: string) => {
  return new Promise((res, rej) => {
    const cognito = new CognitoUser({
      Username: email,
      Pool: getCognitoPool(),
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    cognito.authenticateUser(authDetails, {
      onSuccess: (result) => {
        res(result);
      },
      onFailure: (error) => {
        rej(error);
      },
    });
  });
};

export const logout = () => {
  const cognitoPool = getCognitoPool();
  const user = cognitoPool.getCurrentUser();
  user?.signOut();
};

export const signup = (email: string, password: string) => {
  return new Promise((res, rej) => {
    const cognitoPool = getCognitoPool();
    const customAttributes = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
    ];
    cognitoPool.signUp(email, password, customAttributes, [], (err, data) => {
      if (err) return rej(err);
      return res(data);
    });
  });
};
