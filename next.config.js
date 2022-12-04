/** @type {import('next').NextConfig} */


// const fs = require("fs-extra");

// module.exports = { async ProductsData() {
//   const response = await fetch("https://example.com/langs");
//   const dt = await response.json();
// }}


const fs = require("fs-extra");

module.exports = async (phase, { defaultConfig }) => {
  const response = await fetch(`https://feature-toggles.com`);
  const toggles = await response.json();

  fs.writeJson(`toggles.json`, toggles);

  return {
    toggles
  }
}

// module.exports = {

//   reactStrictMode: true,
//   images: {
//     domains: ["rb.gy","cdn.sanity.io" ,".png"]
//   }
// }


