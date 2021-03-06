const EC2 = require("aws-sdk/clients/ec2");
const client = new EC2({
  region: "eu-west-2",
});

exports.getServerStatus = () => {
  return client
    .describeInstanceStatus({ InstanceIds: [process.env.EC2_ID] })
    .promise();
};

exports.startServer = () => {
  return client.startInstances({ InstanceIds: [process.env.EC2_ID] }).promise();
};

exports.stopServer = () => {
  return client.stopInstances({ InstanceIds: [process.env.EC2_ID] }).promise();
};
