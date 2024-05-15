const apiRoot = "https://us17.api.mailchimp.com/3.0/lists/e77cefc9e4/members/";

exports.handler = async () => {
  try {
    const response = await fetch(apiRoot, {
      method: "get",
      headers: { Authorization: process.env.MAILCHIMP_API_KEY },
    });

    const responseData = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
