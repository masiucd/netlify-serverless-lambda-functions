const fetch = require("node-fetch");

exports.handler = async () => {
  const corgis = await fetch("https://no-cors-api.netlify.app/api/corgis");
  const corgisResp = corgis.json();

  const corgis = [];
  return {
    statusCode: 200,
    body: JSON.stringify(corgisResp),
  };
};
