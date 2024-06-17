import React, { useState, useEffect } from 'react';

const BookingFrom = () => {

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
            const response = await fetch('/send_confirmation_mail', {
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
            const response = await fetch('/send_mail', {
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
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">IDŐPONTFOGLALÁS</h1>
            <form className="space-y-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-white text-lg font-medium text-gray-900">Személyes adatok</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">NÉV</label>
                        <input onChange={handleChangeName} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">TELEFONSZÁM</label>
                        <input onChange={handleChangeTel} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">E-MAIL CÍM</label>
                        <input onChange={handleChangeEmail} type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-white text-lg font-medium text-gray-900">Időpont</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">DÁTUM</label>
                        <input onChange={handleChangeDay} type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">ÓRA/PERC</label>
                        <div className="flex space-x-2">
                            <select onChange={handleChangeHour} className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md">
                                {Array.from({ length: 24 }, (_, i) => (
                                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                                ))}
                            </select>
                            <select onChange={handleChangeMinute} className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md">
                                {Array.from({ length: 60 }, (_, i) => (
                                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-white text-lg font-medium text-gray-900">További adatok</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium">AUTÓ TÍPUS</label>
                        <input onChange={handleChangeCarType} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">RENDSZÁM</label>
                        <input onChange={handleChangeLicensePlate} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">AUTÓ SZÍN</label>
                        <input onChange={handleChangeColor} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">HONNAN</label>
                        <input onChange={handleChangeFrom} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">HOVA</label>
                        <input onChange={handleChangeTo} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">KITÉRŐ</label>
                    <input onChange={handleChangeKitero} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium">ÁTÜLŐ VAN-E?</label>
                    < select
                        onChange={e => handleAtuloChange(e)}
                        className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md" >
                        {
                            Atulok.map((atulo, key) => <option value={key}>{atulo}</option>)
                        }
                    </select >
                </div>
                <div>
                    <label className="block text-sm font-medium">EGYÉB MEGJEGYZÉS</label>
                    <textarea onChange={handleChangeMegjegyzes} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4"></textarea>
                </div>
                <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span className="text-sm">
                        Elfogadom az oldal és a szolgáltatás <a href="#" className="text-blue-500">Általános Szerződési Feltételeit</a> és hozzájárulok, hogy az ebben foglaltaknak megfelelően kezeljék a személyes adataimat.
                    </span>
                </div>
                <div className="text-center">
                    <button onClick={handleSubmit} type="submit" className="px-4 py-2 bg-black text-white rounded-md">KÜLDÉS</button>
                </div>
            </form>
        </div>

    );
};

export default BookingFrom;
