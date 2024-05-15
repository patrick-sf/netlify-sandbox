exports.handler = async (event) => {
  console.log(`url: ${process.env.MAILCHIMP_URL || "not found"}`);

  const body = { a: 1 };

  const response = await fetch("https://httpbin.org/post", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  console.log(data);

  console.log(`POST DATA: ${data}`);

  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
