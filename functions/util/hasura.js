const fetch = require("node-fetch");

exports.hasuraRequest = async function ({ query, variables }) {
  const result = await fetch(process.env.HASURA_URL, {
    metod: "POST",
    headers: {
      "X-Hasura-Admin-Secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());

  if (!result || !result.data) {
    console.error(result);
    return [];
  }

  return result.data;
};
