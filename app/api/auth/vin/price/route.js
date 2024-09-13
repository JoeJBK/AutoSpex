import { NextResponse } from 'next/server';

const API_KEY = process.env.MARKET_CHECK_KEY;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  
  const vin = params.get('vin');
  const miles = params.get('miles');
  const zip = params.get('zip');
  
  const data = await priceHistory(vin, miles, zip);

  return NextResponse.json(data, {
    headers: { 'Content-Type': 'application/json' }
  });
}

//API Functions
async function priceHistory(vin, miles, zip, retries = 3) {
  try {
    const response = await fetch(`https://mc-api.marketcheck.com/v2/predict/car/price?api_key=${API_KEY}&vin=${vin}&zip=${zip}&car_type=used&miles=${miles}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 429 && retries > 0) {
      await delay(1000); 
      return await priceHistory(vin, miles, zip, retries - 1);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return { error: err.message };
  }
}
