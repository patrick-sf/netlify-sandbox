exports.handler = async (event) => {
  console.log(`url: ${process.env.MAILCHIMP_URL || "not found"}`);

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: params,
  });
  const data = await response.json();

  console.log(`POST DATA: ${data}`);

  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
