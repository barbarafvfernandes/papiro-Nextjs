import axios from 'axios';
const endpoint = process.env.HYGRAPH_HIGH_PERFORMANCE_URL || 'https://ap-south-1.cdn.hygraph.com/content/cmrdb4r7i015v07uocl2ph9fw/master';
const query = 'query { __type(name: "Papiro") { name fields { name type { name kind ofType { name kind } } } } }';

axios.post(endpoint, { query })
  .then((response) => {
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    console.error(error.response?.status);
    console.error(JSON.stringify(error.response?.data, null, 2));
    process.exit(1);
  });
