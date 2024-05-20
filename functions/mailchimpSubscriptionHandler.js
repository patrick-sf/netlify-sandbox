const crypto = require("crypto");

const genericHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTION",
};
const genericError = {
  statusCode: 400,
  headers: genericHeaders,
  body: "Oops! Something went wrong. Please try subscribing again.",
};

exports.handler = async (event, context) => {
  console.log(`Received request: ${event.httpMethod}`);
  console.log(
    `Client headers: ${JSON.stringify(context.clientContext.custom)}`
  );

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: genericHeaders,
      body: "Successful preflight call.",
    };
  }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: genericHeaders,
      body: "Function not found...",
    };
  }

  const params = JSON.parse(event.body);

  console.log(`params.keys: ${Object.keys(params.body)}`);
  console.log(`params.email_address type: ${typeof params.body.email_address}`);
  console.log(
    `params.email_address length: ${params.body.email_address.length}`
  );

  const hash = crypto
    .createHash("md5")
    .update("patrick@superformula.com")
    .digest("hex");
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", process.env.MAILCHIMP_API_KEY);

  try {
    console.log(`Fetching user: ${hash}`);
    const memberDataResponse = await fetch(
      `${process.env.MAILCHIMP_URL}/${hash}`,
      {
        method: "get",
        headers: myHeaders,
      }
    );

    const memberData = await memberDataResponse.json();
    console.log(`Fetched user: ${JSON.stringify(memberData)}`);

    if (
      (memberData && memberData.status === "pending") ||
      memberData.status === "subscribed"
    ) {
      return memberData.status === "pending"
        ? {
            statusCode: 409,
            headers: genericHeaders,
            body: "Your subscription is almost complete! Please check your email and click the confirmation link.",
          }
        : {
            statusCode: 409,
            headers: genericHeaders,
            body: "You are already subscribed to our newsletter.",
          };
    }

    console.log(`Subscribing user ${JSON.stringify(params)}`);
    const response = await fetch(process.env.MAILCHIMP_URL, {
      method: "post",
      body: JSON.stringify({
        ...params,
        status: "pending",
      }),
      headers: myHeaders,
      redirect: "follow",
    });

    const data = await response.json();

    return data.status === "pending"
      ? {
          statusCode: 200,
          headers: genericHeaders,
          body: "Thank you for subscribing to our newsletter. You should receive a confirmation email soon.",
        }
      : genericError;
  } catch (err) {
    console.log(`err: ${err}`);
    return genericError;
  }
};
