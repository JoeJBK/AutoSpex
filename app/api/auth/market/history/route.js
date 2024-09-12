
const API_KEY = process.env.MARKET_CHECK_KEY;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request) {
  const url = new URL(request.url);

  const params = new URLSearchParams(url.search);

  const year = params.get('year');
  const make = params.get('make');
  const model = params.get('model');
  const trim = params.get('trim');

  const data = await salesHistory(year, make, model, trim);
  return new Response(
    JSON.stringify(data),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

//API Functions
async function salesHistory(year = null, make = null, model = null, trim = null) {
  try {
    let url = `https://mc-api.marketcheck.com/v2/sales/car?api_key=${API_KEY}&ymmt=`;

    if (year) {
      url += `${encodeURIComponent(year)}`;
    }
    if (make) {
      url += `|${encodeURIComponent(make)}`;
    }
    if (model) {
      url += `|${encodeURIComponent(model)}`;
    }
    if (trim) {
      url += `|${encodeURIComponent(trim)}`;
    }
    console.log(url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}