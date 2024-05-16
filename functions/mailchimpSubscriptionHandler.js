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

exports.handler = async (event) => {
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

  const hash = crypto
    .createHash("md5")
    .update(params.email_address)
    .digest("hex");
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", process.env.MAILCHIMP_API_KEY);

  try {
    const memberDataResponse = await fetch(
      `${process.env.MAILCHIMP_URL}/${hash}`,
      {
        method: "get",
        headers: myHeaders,
      }
    );

    const memberData = await memberDataResponse.json();

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
    return genericError;
  }
};
