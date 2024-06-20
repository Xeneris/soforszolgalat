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
      const response = await fetch(`http://zenit-soforszolgalat.hu/api/city_part_prices`, {
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
      const response = await fetch(`http://zenit-soforszolgalat.hu/api/prices`, {
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
      switch (data.city.distance) {
        case 4:
          setPrice(7300);
          break;
        case 5:
          setPrice(8300);
          break;
        case 6:
          setPrice(9300);
          break;
        case 7:
          setPrice(10300);
          break;
        case 8:
          setPrice(12300);
          break;
        case 9:
          setPrice(13300);
          break;
        case 10:
          setPrice(15300);
          break;
        case 11:
          setPrice(17300);
          break;
        case 12:
          setPrice(18300);
          break;
        case 13:
          setPrice(20300);
          break;
        case 14:
          setPrice(21300);
          break;
        case 15:
          setPrice(22300);
          break;
        case 16:
          setPrice(25300);
          break;
        case 17:
          setPrice(26300);
          break;
        case 18:
          setPrice(28300);
          break;
        case 19:
          setPrice(29300);
          break;
        case 20:
          setPrice(30300);
          break;
        case 21:
          setPrice(33300);
          break;
        case 22:
          setPrice(34300);
          break;
        case 23:
          setPrice(35300);
          break;
        default:
          break;
      }
      setLoading(false);

    } catch (error) {
      console.error('Error fetching city names:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchCityParts() {
      try {
        const response = await fetch(`http://zenit-soforszolgalat.hu/api/city_parts`);
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
        const response = await fetch(`http://zenit-soforszolgalat.hu/api/cities`);
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
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center">
      {/* Text section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white p-4">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Szolgáltatásaink:</h1><br/>
          <p className="text-lg sm:text-md max-w-lg mx-auto">
          <span className="text-xl font-semibold">Személyes sofőrszolgálat:</span>  A mindennapok luxusa, amikor csak szeretné.
          </p><br/>
          <p className="text-lg sm:text-md max-w-lg mx-auto">
          <span className="text-xl font-semibold">Üzleti sofőrszolgálat:</span> Professzionális, diszkrét utaztatás üzleti igények szerint.
          </p><br/>
          <p className="text-lg sm:text-md max-w-lg mx-auto">
          <span className="text-xl font-semibold">Reptérről haza:</span> Gondtalan hazautazás a repülőtérről, stressz nélkül.
          </p><br/>
          <p className="text-lg sm:text-md max-w-lg mx-auto">
          <span className="text-xl font-semibold">Rendezvények és esküvők kitelepülések:</span> Különleges napokra különleges szállítás, hogy minden tökéletes legyen.
          </p><br/>
        </header>

      </div>

      {/* Select boxes section */}
      <div className="container mx-auto py-8">
        <div className="bg-blue-200 rounded-md p-4">
          <p className="text-lg font-semibold text-center">Válassza ki az indulási helyet és az úti célját</p>
          <p className="text-sm text-center text-gray-600 mt-2">Itt ellenőrizheti árainkat Miskolcon belül, és Miskolc környező településeire utazva is.</p>
        </div>

        <div className="bg-gray-500 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-300 rounded-lg shadow-md p-6">
            <div className="mb-5">
              <label htmlFor="miskolc" className="block font-semibold mb-1">Indulás</label>
              <select onChange={handleCityPartSelectOne} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                {cityPart.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="miskolc2" className="block font-semibold mb-1">Cél</label>
              <select onChange={handleCityPartSelectTwo} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                {cityPart.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <p className="font-semibold">Ár: {cityPartFare} Forint</p>
            </div>
          </div>

          <div className="bg-gray-300 rounded-lg shadow-md p-6">
            <div className="mb-5">
              <label htmlFor="option3" className="block font-semibold mb-1">Miskolc környező települései</label>
              <select id="option3" onChange={handleSelect} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="">-- Válasszon --</option>
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
    </div>
  );
};

export default PricesTwoOptions;