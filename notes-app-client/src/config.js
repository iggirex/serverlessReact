export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-upload-iggi"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://3amdmgz6e9.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_PA18xFfUs",
      APP_CLIENT_ID: "2m6g97emnkdfe5l6q17bl81nkj",
      IDENTITY_POOL_ID: "us-west-2:c76e3971-ded9-400d-a843-bd95245642b9"
    }
};

//   Page explaining stuff:
//   https://serverless-stack.com/chapters/configure-aws-amplify.html