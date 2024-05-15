exports.handler = async (event) => {
  console.log(`url: ${process.env.MAILCHIMP_URL || "not found"}`);

  const body = { a: 1 };

  const response = await fetch("https://httpbin.org/post", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body:
      `url: ${process.env.MAILCHIMP_URL || "not found"} || ` +
      `POST DATA: ${JSON.stringify(data)}`,
  };
};
