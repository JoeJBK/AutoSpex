"use client";
import { useState } from 'react';
import { Button, Input, Card, CardHeader, CardBody, CardFooter, Spinner } from "@nextui-org/react";
import ReactECharts from 'echarts-for-react';

// import ActiveDealerListings from '../../components/Cards/ActiveDealerListings';
// import ActiveAuctionListings from '../../components/Cards/ActiveAuctionListings';
// import ActivePrivateListings from '../../components/Cards/ActivePrivateListings';
// import { fetchPriceHistory, fetchPricePrediction, fetchSimilarSalesHistory } from '../../lib/api';

export default function index() {
  const [vin, setVin] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [miles, setMiles] = useState('');
  const [loading, setLoading] = useState(false);
  const [listingData, setListingData] = useState({});
  const [currentVehicle, setCurrentVehicle] = useState({
    year: null,
    make: null,
    model: null,
    trim: null
  });
  const timelineOptions = {
    title: {
      text: 'Vehicle Listing History',
      textStyle: {
        color: 'black'
      }
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        fontSize: 10,
      }
    },
    yAxis: {
      tyoe: 'value',

      axisLabel: {
        fontSize: 10,
        formatter: function (value) {
          return (value / 1000) + 'K';
        },
      },
    },
    // tooltip: {
    //   trigger: 'axis',
    //   formatter: function (params) {
    //     let result = '';
    //     params.forEach(function (item) {
    //      console.log(item, listingData)
    //     });
    //     return result;
    //   }
    // },
  };
  const [priceTimelineOptions, setPriceTimelineOptions] = useState({
    ...timelineOptions,
    series: [
      {
        type: 'line',
        smooth: true,
      }
    ]
  });

  const [predictionData, setPredictionData] = useState({
    specs: {
      year: currentVehicle.year,
      make: currentVehicle.make,
      model: currentVehicle.model,
      trim: currentVehicle.trim
    },
    price_range: {
      upper_bound: "",
      lower_bound: "",
    }
  });
  const [salesHistory, setSalesHistory] = useState({

  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const listingDataResponse = await fetchPriceHistory(vin);
      const predictionDataResponse = await fetchPricePrediction(vin, miles, zipcode);
      const salesHistoryData = await fetchSimilarSalesHistory(
        predictionDataResponse.specs?.year,
        predictionDataResponse.specs?.make,
        predictionDataResponse.specs?.model,
        predictionDataResponse.specs?.trim
      );
      setListingData(listingDataResponse);
      setSalesHistory(salesHistoryData);
      setPredictionData(predictionDataResponse);
      setCurrentVehicle({
        year: predictionDataResponse.specs?.year,
        make: predictionDataResponse.specs?.make,
        model: predictionDataResponse.specs?.model,
        trim: predictionDataResponse.specs?.trim
      });

      setPriceTimelineOptions({
        ...timelineOptions,
        series: [
          {
            data: [
              ...listingDataResponse.map((listing) => {
                return listing.last_seen_at && listing.price && [new Date(Number(listing.last_seen_at) * 1000), Number(listing.price)];
              })
            ],
            type: 'line',
            smooth: true
          }
        ],
        // tooltip: {
        //   trigger: 'axis',
        //   formatter: function (params) {
        //     let result = '';
        //     params.forEach(function (item) {
        //     //  console.log(item, listingData)
        //     });
        //     return result;
        //   }
        // },
      });
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center bg-white py-6 px-8 rounded-lg shadow-md">
        <Input
          isClearable
          className="w-full transition-all duration-200 ease-in-out hover:border-blue focus:border-blue focus:ring-2 focus:ring-blue"
          placeholder="Enter VIN"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          onClear={() => setVin('')}
          variant="underlined"
          radius="lg"
        />
        <Input
          isClearable
          className="w-full md:w-30 transition-all duration-200 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Enter Vehicle Miles"
          value={miles}
          onChange={(e) => setMiles(e.target.value)}
          onClear={() => setMiles('')}
          variant="underlined"
          radius="lg"
        />
        <Input
          isClearable
          className="w-full md:w-30 transition-all duration-200 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Enter Zip Code"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          onClear={() => setZipcode('')}
          variant="underlined"
          radius="lg"
        />
        <Button
          className="bg-blue hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>

      <div className='py-4'>
        <div className='flex flex-col space-y-4'>
          <div className="py-4 flex flex-col md:flex-row gap-4 justify-between">
            <Card className="flex-grow shadow-lg rounded-lg p-4">
              <CardHeader className="border-b pb-2 mb-4">
                <h2 className="text-lg md:text-xl font-bold flex items-center">
                  <i className="fas fa-car text-blue-500 mr-2"></i> Vehicle Information
                </h2>
              </CardHeader>
              <CardBody>
                {!loading ? (
                  <ul className="space-y-2 text-sm md:text-base">
                    {predictionData.specs?.year && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-calendar text-blue mr-2"></i>
                        <span className="font-semibold">Year:</span>
                        <span className="ml-1">{predictionData.specs.year}</span>
                      </li>
                    )}
                    {predictionData.specs?.make && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-industry text-blue mr-2"></i>
                        <span className="font-semibold">Make:</span>
                        <span className="ml-1">{predictionData.specs.make}</span>
                      </li>
                    )}
                    {predictionData.specs?.model && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-car-side text-blue mr-2"></i>
                        <span className="font-semibold">Model:</span>
                        <span className="ml-1">{predictionData.specs.model}</span>
                      </li>
                    )}
                    {predictionData.specs?.trim && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-tachometer-alt text-blue mr-2"></i>
                        <span className="font-semibold">Trim:</span>
                        <span className="ml-1">{predictionData.specs.trim}</span>
                      </li>
                    )}
                    {predictionData.specs?.drivetrain && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-cogs text-blue mr-2"></i>
                        <span className="font-semibold">Drivetrain:</span>
                        <span className="ml-1">{predictionData.specs.drivetrain}</span>
                      </li>
                    )}
                    {predictionData.specs?.engine_size && predictionData.specs?.cylinders && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-cogs text-blue mr-2"></i>
                        <span className="font-semibold">Engine:</span>
                        <span className="ml-1">{`${predictionData.specs.engine_size}L ${predictionData.specs.cylinders} cylinder`}</span>
                      </li>
                    )}
                    {predictionData.specs?.transmission && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-cogs text-blue mr-2"></i>
                        <span className="font-semibold">Transmission:</span>
                        <span className="ml-1">{predictionData.specs.transmission}</span>
                      </li>
                    )}
                    {predictionData.specs?.city_mpg && predictionData.specs?.highway_mpg && (
                      <li className="flex items-center text-gray-light">
                        <i className="fas fa-cogs text-blue mr-2"></i>
                        <span className="font-semibold">MPG:</span>
                        <span className="ml-1">{`${predictionData.specs.city_mpg} - ${predictionData.specs.highway_mpg}`}</span>
                      </li>
                    )}
                  </ul>
                ) : (
                  <Spinner />
                )}
              </CardBody>
              {predictionData.price_range?.lower_bound && predictionData.price_range?.upper_bound && (
                <CardFooter className="border-t pt-2 mt-4">
                  <p className="text-xs md:text-sm text-black font-semibold">
                    <i className="fas fa-tag text-orange mr-2"></i>
                    Market Value Range:
                    <span className="font-semibold text-black ml-2">
                      ${Number(predictionData.price_range?.lower_bound).toLocaleString()} - ${Number(predictionData.price_range?.upper_bound).toLocaleString()}
                    </span>
                  </p>
                </CardFooter>
              )}
            </Card>

            <Card className="flex-grow shadow-lg rounded-lg p-4">
              <CardHeader className="border-b pb-2 mb-4">
                <h2 className="text-lg md:text-xl font-bold flex items-center">
                  <i className="fas fa-money-bill-trend-up mr-2"></i> Market Analysis
                </h2>
              </CardHeader>
              <CardBody>
                {!loading ? (
                  <ul className="space-y-2 text-sm md:text-base">
                    {salesHistory?.price_stats?.median && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-dollar-sign text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">Median Price:</span>
                          <span className="ml-1">{` $${salesHistory.price_stats.median.toLocaleString()}`}</span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.miles_stats?.median && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-tachometer-alt text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">Median Mileage:</span>
                          <span className="ml-1">{` ${salesHistory.miles_stats.median.toLocaleString()} miles`}</span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.price_stats?.min && salesHistory?.price_stats?.max && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-chart-line text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">Price Range:</span>
                          <span className="ml-1">
                            {` $${salesHistory.price_stats.min.toLocaleString()} - $${salesHistory.price_stats.max.toLocaleString()}`}
                          </span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.miles_stats?.min && salesHistory?.miles_stats?.max && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-road text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">Mileage Range:</span>
                          <span className="ml-1">
                            {` ${salesHistory.miles_stats.min.toLocaleString()} - ${salesHistory.miles_stats.max.toLocaleString()} miles`}
                          </span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.cpo_price_stats?.median && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-cogs text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">CPO Median Price:</span>
                          <span className="ml-1">{` $${salesHistory.cpo_price_stats.median.toLocaleString()}`}</span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.cpo_miles_stats?.median && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-calendar-check text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">CPO Median Mileage:</span>
                          <span className="ml-1">{` ${salesHistory.cpo_miles_stats.median.toLocaleString()} miles`}</span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.count && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-tags text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">Total Listings:</span>
                          <span className="ml-1">{` ${salesHistory.count.toLocaleString()}`}</span>
                        </div>
                      </li>
                    )}
                    {salesHistory?.cpo && (
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-thumbs-up text-blue"></i>
                        <div className="flex-1">
                          <span className="font-semibold">Certified Pre-Owned (CPO):</span>
                          <span className="ml-1">{` ${salesHistory.cpo} listings`}</span>
                        </div>
                      </li>
                    )}
                  </ul>
                ) : (
                  <Spinner />
                )}
              </CardBody>
            </Card>

            <Card className="flex-grow shadow-lg rounded-lg p-4">
              <CardHeader className="border-b pb-2 mb-4">
                <h2 className="text-lg md:text-xl font-bold flex items-center">
                  <i className="fas fa-wrench text-blue-500 mr-2"></i>Known Issues
                </h2>
              </CardHeader>
              <CardBody>
                Coming Soon
              </CardBody>
            </Card>
          </div>

          <Card className='p-8'>
            {!loading ? <ReactECharts option={priceTimelineOptions} /> : <Spinner />}
          </Card>

          {/* <ActiveDealerListings year={currentVehicle.year} make={currentVehicle.make} model={currentVehicle.model} trim={currentVehicle.trim} />

          <ActiveAuctionListings year={currentVehicle.year} make={currentVehicle.make} model={currentVehicle.model} trim={currentVehicle.trim} />

          <ActivePrivateListings year={currentVehicle.year} make={currentVehicle.make} model={currentVehicle.model} trim={currentVehicle.trim} /> */}
        </div>
      </div>
    </div>
  );
}