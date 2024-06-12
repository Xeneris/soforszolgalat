import React, { useState, useEffect } from 'react';

const PricesTwoOptions = () => {
  const [cityNames, setCityNames] = useState([]);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  const [cityPart, setCityPart] = useState([]);
  const [cityPartFare, setCityPartFare] = useState(0);

  const [cityPartOne, setCityPartOne] = useState("Avas");
  const [cityPartTwo, setCityPartTwo] = useState("Avas");


  // Function to calculate price based on selected options

  function handleSelect(event) {
    fetchPrice(event.target.value);
  }

  useEffect(() => {
    if (cityPartOne && cityPartTwo) {
      fetchCityPartPrice(cityPartOne, cityPartTwo);
    }
  }, [cityPartOne, cityPartTwo]);

  function handleCityPartSelectOne(event) {
    setCityPartOne(event.target.value);
  }

  function handleCityPartSelectTwo(event) {
    setCityPartTwo(event.target.value);
  }

  async function fetchCityPartPrice(cityOne, cityTwo) {
    try {
      const response = await fetch('/city_part_prices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ origin: cityOne, destination: cityTwo })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch price');
      }

      const data = await response.json();
      console.log(data);
      setCityPartFare(data.cityPartFare.fare);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching city names:', error);
      setLoading(false);
    }
  };

  async function fetchPrice(city) {
    try {
      const response = await fetch('/prices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ city: city })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch price');
      }

      const data = await response.json();
      setPrice(data.city.distance * 500);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching city names:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchCityParts() {
      try {
        const response = await fetch(`/city_parts`);
        if (!response.ok) {
          throw new Error('Failed to fetch city parts');
        }
        const data = await response.json();
        setCityPart(data.cityParts);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching city parts:', error);
        setLoading(false);
      }
    }

    fetchCityParts();
  }, []);

  useEffect(() => {
    async function fetchCityNames() {
      try {
        const response = await fetch(`/cities`);
        if (!response.ok) {
          throw new Error('Failed to fetch city names');
        }
        const data = await response.json();
        setCityNames(data.cities);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching city names:', error);
        setLoading(false);
      }
    }

    fetchCityNames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">

        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <div className="mb-5">
            <label htmlFor="miskolc" className="block font-semibold mb-1">Indulás</label>
            <select onChange={handleCityPartSelectOne} className="w-full p-2 border border-gray-300 rounded-md">
              {cityPart.map((cityPart, index) => (
                <option key={index} value={cityPart}>{cityPart}</option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="miskolc2" className="block font-semibold mb-1">Cél</label>
            <select onChange={handleCityPartSelectTwo} className="w-full p-2 border border-gray-300 rounded-md">
              {cityPart.map((cityPart, index) => (
                <option key={index} value={cityPart}>{cityPart}</option>
              ))}
            </select>
          </div>
          <div>
            <p className="font-semibold">Ár: {cityPartFare} Forint</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <div className="mb-5">
            <label htmlFor="option3" className="block font-semibold mb-1">Az árakat Miskolctól számoljuk</label>
            <select id="option3" onChange={handleSelect} className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">-- Select --</option>
              {cityNames.map((cityName, index) => (
                <option key={index} value={cityName}>{cityName}</option>
              ))}
            </select>
          </div>
          <div>
            <p className="font-semibold mb-1">Ár: {price} Forint</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PricesTwoOptions;