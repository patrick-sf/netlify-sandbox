exports.handler = async (event) => {
  // if (event.httpMethod !== "POST") {
  //   return { statusCode: 405, body: "Function not found..." };
  // }

  const params = JSON.parse(event.body);

  return `RESPONSE: ${params.email}`;
  // const myHeaders = new Headers();

  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", process.env.MAILCHIMP_API_KEY);

  // const body = JSON.stringify({
  //   email_address: process.env.MAILCHIMP_USER,
  //   status: "pending",
  //   merge_fields: {
  //     FNAME: "Patrick",
  //     LNAME: "Wu",
  //   },
  // });

  // const response = await fetch(process.env.MAILCHIMP_URL, {
  //   method: "post",
  //   body,
  //   headers: myHeaders,
  //   redirect: "follow",
  // });

  // const data = await response.json();

  // return {
  //   statusCode: 200,
  //   body: `URL: ${process.env.MAILCHIMP_URL} ||
  //   USER: ${process.env.MAILCHIMP_USER} ||
  //   POST DATA: ${JSON.stringify(data)}`,
  // };
};
