// const AWS = require("aws-sdk");
// const aws_config = require("../private/credentials");

// const getDHTDataDynamoDB = async () => {
//   // try {
//   AWS.config.update(aws_config.aws_remote_config);

//   const docClient = new AWS.DynamoDB.DocumentClient();

//   const params = {
//     TableName: aws_config.aws_table_name,
//   };

//   let res = {};
//   let p = await docClient.scan(params, async (err, data) => {
//     // console.log("hello");
//     console.log(data.Count);
//     console.log(typeof data);
//     // return data;
//     // res.Count = data.Count;
//     res = data;
//     // console.log(res);
//   });

//   // console.log("hello");
//   // console.log(res);
//   // console.log("hello2");
//   return res;
//   // return res;
//   // return res;
//   // } catch (err) {
//   //   console.log("GET OUT");
//   // }
// };

// let o = getDHTDataDynamoDB().then((data) => {
//   console.log(data);
//   // data.Items.forEach((element, index, array) => {
//   //   console.log(element);
//   // });
// });

// // setTimeout(() => {
// //   console.log("hhdjk");
// // }, 10000);

// // async () => {
// //   var val = await getDHTDataDynamoDB();
// //   console.log(val);
// // };

// // console.log("hello");
// // console.log(data);
