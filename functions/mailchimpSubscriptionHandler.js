const crypto = require("crypto");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Function not found..." };
  }

  const params = JSON.parse(event.body);
  const isValidEmail = String(params.email_address)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!isValidEmail) {
    return {
      statusCode: 403,
      body: "Please enter a valid email address.",
    };
  }

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
            body: "Your subscription is almost complete! Please check your email and click the confirmation link.",
          }
        : {
            statusCode: 409,
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
          body: "Thank you for subscribing to our newsletter. You should receive a confirmation email soon.",
        }
      : {
          statusCode: 400,
          body: "Oops! Something went wrong. Please try subscribing again.",
        };
  } catch (err) {
    return {
      statusCode: 400,
      body: "Oops! Something went wrong. Please try subscribing again.",
    };
  }
};
