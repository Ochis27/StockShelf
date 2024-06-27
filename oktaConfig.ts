export const oktaConfig = {
  clientId: "0oah2wdw7nOnnx5mj5d7",
  issuer: "https://dev-70032746.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
