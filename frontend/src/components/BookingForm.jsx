import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingFrom = () => {
    const navigate = useNavigate();

    const [name, setName] = useState(" ");
    const [tel, setTel] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [day, setDay] = useState(" ");
    const [hour, setHour] = useState(" ");
    const [min, setMin] = useState(" ");
    const [carType, setCarType] = useState(" ");
    const [licensePlate, setLicensePlate] = useState(" ");
    const [color, setColor] = useState(" ");
    const [kitero, setKitero] = useState(" ");
    const [from, setFrom] = useState(" ");
    const [to, setTo] = useState(" ");
    const [megjegyzes, setMegjegyzes] = useState("Nincs");
    const [atulo, setAtulo] = useState(["Nincs, 4-nél kevesebben vagyunk", "Van, 4-nél többen vagyunk"]);
    const [checkAtulo, setCheckAtulo] = useState("Nincs, 4-nél kevesebben vagyunk");

    const handleClickAszf = () => {
        navigate('/aszf');
      };

    const handleSubmit = (e) => {
        sendForm();
        sendConfirmation();
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeTel = (e) => {
        setTel(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeDay = (e) => {
        setDay(e.target.value);
    }
    const handleChangeHour = (e) => {
        setHour(e.target.value);
    }
    const handleChangeMinute = (e) => {
        setMin(e.target.value);
    }
    const handleChangeCarType = (e) => {
        setCarType(e.target.value);
    }
    const handleChangeLicensePlate = (e) => {
        setLicensePlate(e.target.value);
    }
    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }
    const handleChangeKitero = (e) => {
        setKitero(e.target.value);
    }

    const handleChangeFrom = (e) => {
        setFrom(e.target.value);
    }

    const handleChangeTo = (e) => {
        setTo(e.target.value);
    }
    const handleChangeMegjegyzes = (e) => {
        setMegjegyzes(e.target.value);
    }

    const Atulok = atulo.map(Atulo => Atulo
    )
    const handleAtuloChange = (e) => {
        setCheckAtulo(atulo[e.target.value]);
    }

    async function sendConfirmation() {
        try {
            const response = await fetch('http://zenit-soforszolgalat.hu/api/send_confirmation_mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Nev: name, Telefon: tel, Email: email, Nap: day, Ora: hour, Perc: min, AutoTipus: carType, Rendszam: licensePlate, Szin: color, Atulo: checkAtulo, Honnan: from, Hova: to, Kitero: kitero, Megjegyzes: megjegyzes })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch price');
            }

        } catch (error) {
            console.error('Something was wrong with the email:', error);
        }
    };


    async function sendForm() {
        try {
            const response = await fetch('http://zenit-soforszolgalat.hu/api/send_mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Nev: name, Telefon: tel, Email: email, Nap: day, Ora: hour, Perc: min, AutoTipus: carType, Rendszam: licensePlate, Szin: color, Atulo: checkAtulo, Honnan: from, Hova: to, Kitero: kitero, Megjegyzes: megjegyzes })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch price');
            }

        } catch (error) {
            console.error('Something was wrong with the email:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg relative z-10 mt-16 md:mt-0">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">IDŐPONTFOGLALÁS</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-700">Személyes adatok</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">NÉV</label>
                <input type="text" onChange={handleChangeName} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">TELEFONSZÁM</label>
                <input type="text" onChange={handleChangeTel} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-MAIL CÍM</label>
              <input type="email" onChange={handleChangeEmail} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-700">Időpont</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">DÁTUM</label>
                <input type="date" onChange={handleChangeDay} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ÓRA/PERC</label>
                <div className="flex space-x-3">
                  <select onChange={handleChangeHour} className="mt-1 block w-1/2 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                    ))}
                  </select>
                  <select onChange={handleChangeMinute} className="mt-1 block w-1/2 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-700">További adatok</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">AUTÓ TÍPUS</label>
                <input type="text" onChange={handleChangeCarType} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">RENDSZÁM</label>
                <input type="text" onChange={handleChangeLicensePlate} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">AUTÓ SZÍN</label>
                <input type="text" onChange={handleChangeColor} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">HONNAN</label>
                <input type="text" onChange={handleChangeFrom} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">HOVA</label>
                <input type="text" onChange={handleChangeTo} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">KITÉRŐ</label>
              <input type="text" onChange={handleChangeKitero} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ÁTÜLŐ VAN-E?</label>
              <select onChange={handleAtuloChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                {Atulok.map((atulo, key) => <option key={key} value={key}>{atulo}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">EGYÉB MEGJEGYZÉS</label>
              <textarea onChange={handleChangeMegjegyzes} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" rows="4"></textarea>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <span className="text-sm text-gray-700">
                Elfogadom az oldal és a szolgáltatás <a href="" onClick={handleClickAszf} className="text-blue-500">Általános Szerződési Feltételeit</a> és hozzájárulok, hogy az ebben foglaltaknak megfelelően kezeljék a személyes adataimat.
              </span>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-black text-white rounded-md">KÜLDÉS</button>
            </div>
          </form>
        </div>
      );
};

export default BookingFrom;
