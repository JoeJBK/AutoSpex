"use client";
import { useState } from 'react';
import { Button, Input, Card, CardHeader, CardBody, Spinner } from "@nextui-org/react";
import ActiveDealerListings from '../components/Cards/ActiveDealerListings';
import ActiveAuctionListings from '../components/Cards/ActiveAuctionListings';
import ActivePrivateListings from '../components/Cards/ActivePrivateListings';

export default function Page() {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [miles, setMiles] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [listingData, setListingData] = useState({});
  const [currentVehicle, setCurrentVehicle] = useState({
    year: null,
    make: null,
    model: null,
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Mocked data, replace this with your fetch function or API call
      const listingDataResponse = {
        year: year,
        make: make,
        model: model,
        miles: miles,
        zipcode: zipcode
      };

      setListingData(listingDataResponse);

      setCurrentVehicle({
        year: year,
        make: make,
        model: model,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center bg-white py-6 px-8 rounded-lg shadow-md">
        <Input
          isClearable
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          onClear={() => setYear('')}
        />
        <Input
          isClearable
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          onClear={() => setMake('')}
        />
        <Input
          isClearable
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          onClear={() => setModel('')}
        />
        <Input
          isClearable
          placeholder="Mileage"
          value={miles}
          onChange={(e) => setMiles(e.target.value)}
          onClear={() => setMiles('')}
        />
        <Input
          isClearable
          placeholder="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          onClear={() => setZipcode('')}
        />
        <Button
          className="bg-gray hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      <br></br>
      {/* {loading ? (
        <Spinner />
      ) : (
        <Card className="mt-4 shadow-lg">
          <CardHeader>
            <h2 className="text-lg font-bold">Nearest Car Listing</h2>
          </CardHeader>
          <CardBody>
            {listingData.year ? (
              <ul>
                <li><strong>Year:</strong> {listingData.year}</li>
                <li><strong>Make:</strong> {listingData.make}</li>
                <li><strong>Model:</strong> {listingData.model}</li>
                <li><strong>Mileage:</strong> {listingData.miles}</li>
                <li><strong>Location:</strong> {listingData.zipcode}</li>
              </ul>
            ) : (
              <p>No data available</p>
            )}
          </CardBody>
        </Card>
      )} */}
      <br></br>
      <ActiveDealerListings year={currentVehicle.year} make={currentVehicle.make} model={currentVehicle.model} mileage={currentVehicle.mileage} />
      <br></br>
      <ActiveAuctionListings year={currentVehicle.year} make={currentVehicle.make} model={currentVehicle.model} mileage={currentVehicle.mileage} zipcode={currentVehicle.zipcode}/>
      <br></br>
      <ActivePrivateListings year={currentVehicle.year} make={currentVehicle.make} model={currentVehicle.model} mileage={currentVehicle.mileage} />
    </div>
  );
}
