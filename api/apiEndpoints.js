const axios = require("axios").default;

// ------------------------------------------------------------------
// Server hostname
// ------------------------------------------------------------------

export const apiEndpoint = "http://172.20.10.6:7001";

// ------------------------------------------------------------------
// Add Barcode to cart
// ------------------------------------------------------------------

export async function addCartProduct(item) {
  var body = "";
  var reqHeaders = {
    "Content-Type": "application/json",
    Accept: "*/*",
  };

  body = {
    barcode: item,
  };

  console.log("body", body);
  const resp = await axios.post(apiEndpoint + "/addCartProduct", body, {
    headers: reqHeaders,
  });
  console.log("\n @@ addCartProduct api end Response: " + JSON.stringify(resp.data));
}
