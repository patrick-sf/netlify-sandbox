const crypto = require("crypto");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Function not found..." };
  }

  const params = JSON.parse(event.body);

  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", process.env.MAILCHIMP_API_KEY);

  const body = JSON.stringify(params);

  const response = await fetch(process.env.MAILCHIMP_URL, {
    method: "post",
    body,
    headers: myHeaders,
    redirect: "follow",
  });

  const data = await response.json();

  const hash = crypto
    .createHash("md5")
    .update(params.email_address)
    .digest("hex");

  return {
    statusCode: 200,
    body: `hash: ${hash} || 
    URL: ${process.env.MAILCHIMP_URL} ||
    USER: ${process.env.MAILCHIMP_USER} ||
    POST DATA: ${JSON.stringify(data)}`,
  };
};
