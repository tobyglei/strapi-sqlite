module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: 10000,
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
