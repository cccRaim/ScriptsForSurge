const headers = $response.headers;
const dmy = headers['X-POSL-DMY-VAL'];
const time = headers['X-POSL-S-TIME'];

const json = JSON.parse($response.body);
const pmc = json.pmc;

function stringify(data) {
  return Object.keys(data).reduce((arr, key) => {
    arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    return arr;
  }, []).join('&');
}

$httpClient.post({
  url: "http://craim.net/sleep/token.php",
  headers: {
    Content-Type: "application/x-www-form-urlencoded"
    },
  body: stringify({ dmy, time, pmc }),
  timeout: 5
}, (error, response, data) => {
  console.log(data);
});

$done({});
