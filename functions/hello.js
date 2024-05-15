// import axios from "axios";

// exports.handler = async () => {
//   try {
//     console.log(`url: ${process.env.MAILCHIMP_URL}`);
//     const config = {
//       method: "get",
//       url: process.env.MAILCHIMP_URL,
//       headers: {
//         Authorization: process.env.MAILCHIMP_API_KEY,
//       },
//     };

//     const user = await axios.get(config.url, {
//       headers: config.headers,
//     });

//     console.log(JSON.stringify(user));

//     return {
//       statusCode: 200,
//       body: `User: ${JSON.stringify(user)}`,
//     };
//   } catch (err) {
//     console.log(JSON.stringify(err));
//     throw new Error(err);
//   }
// };

exports.handler = async (event) => {
  console.log(`url: ${process.env.MAILCHIMP_URL || "not found"}`);
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
