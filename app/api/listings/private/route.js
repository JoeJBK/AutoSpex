'use client';
import { NextResponse } from 'next/server';

const API_KEY = process.env.MARKET_CHECK_KEY;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);

    const year = params.get('year');
    const make = params.get('make');
    const model = params.get('model');
    const trim = params.get('trim');

    const data = await privateListings(year, make, model, trim);

    return NextResponse.json(data); // Using NextResponse to return a JSON response
  } catch (error) {
    console.error(error);
    return NextResponse.error(); // Send an error response if something goes wrong
  }
}

// API Functions
async function privateListings(year = null, make = null, model = null, trim = null) {
  try {
    let url = `https://mc-api.marketcheck.com/v2/search/car/fsbo/active?api_key=${API_KEY}`;

    if (year) {
      url += `&year=${year}`;
    }
    if (make) {
      url += `&make=${make}`;
    }
    if (model) {
      url += `&model=${model}`;
    }
    if (trim) {
      url += `&trim=${trim}`;
    }

    console.log(url, ' ----- ', year, make, model, trim);
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
    console.log('results', data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export const dynamic = "force-dynamic";