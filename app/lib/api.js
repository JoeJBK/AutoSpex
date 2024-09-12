// src/lib/api.js

export async function fetchPriceHistory(vin) {
  const response = await fetch(`/api/vin/history?vin=${encodeURIComponent(vin)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch price history');
  }
  return response.json();
}

export async function fetchPricePrediction(vin, miles, zip) {
  const url = new URL('/api/vin/price', window.location.origin);
  url.searchParams.append('vin', vin);
  url.searchParams.append('miles', miles);
  url.searchParams.append('zip', zip);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch price prediction');
  }

  return response.json();
}


export async function fetchListings(year = null, make = null, model = null, trim = null, type = 'dealer') {
  const url = new URL(`/api/listings/${type}`, window.location.origin);
  if (!year && !make) return [];

  if (year) {
    url.searchParams.append('year', year);
  }
  if (make) {
    url.searchParams.append('make', make);
  }
  if (model) {
    url.searchParams.append('model', model);
  }
  if (trim) {
    url.searchParams.append('trim', trim);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch listings');
  }
  return response.json();
}

export async function fetchSimilarSalesHistory(year = null, make = null, model = null, trim = null) {
  const url = new URL(`/api/market/history`, window.location.origin);
  if (!year && !make) return [];

  if (year) {
    url.searchParams.append('year', year);
  }
  if (make) {
    url.searchParams.append('make', make);
  }
  if (model) {
    url.searchParams.append('model', model);
  }
  if (trim) {
    url.searchParams.append('trim', trim);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch listings');
  }
  return response.json();
}