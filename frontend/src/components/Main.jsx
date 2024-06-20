import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundMain from '../images/mainimage.jpg'

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/foglalas');
  };

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <div className="relative min-h-screen bg-blue-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundMain})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white p-4">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Üdvözöljük a Zenit Sofőrszolgálatnál!</h1>
          <p className="text-lg sm:text-xl max-w-lg mx-auto">
            Fedezd fel velünk, hogyan változtathatod az éjszakai életet biztonságossá és gondtalanná!
            A Zenit Sofőrszolgálatnál különös figyelmet fordítunk a hétvégi bulizós programokra, garantálva, hogy az éjszakai szórakozás ne érjen véget a hazavezetés gondjával.
            Élvezd a társaságot, a zenét, és a pillanatot; a hazajutásról mi gondoskodunk – az Ön autójával.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Miért minket válasszon?</h2>
            <p className="text-center max-w-xs">
              <span className="text-xl font-semibold">Személyre szabott utazás:</span><br />
              Minden utazást az Ön igényeihez igazítunk, legyen szó egy személyes sofőrszolgálatról, üzleti utazásról, vagy a repülőtérről való hazaszállításról.<br /><br />
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Versenyképes árak</h2>
            <p className="text-center max-w-xs">
              Áraink átláthatóak, versenyképesek, mindenki számára elérhetőek.<br />
            </p>
            <button onClick={handleScroll} className="text-center max-w-xs">
            <span className="text-xl font-semibold">Nézze meg árainkat ide kattintva!</span>
            </button>
          </div>
        </section>
        {/* Step 4: Button to trigger scrolling */}
        <button
          onClick={handleClick}
          className="bg-yellow-400 text-black py-3 px-12 rounded-lg font-semibold text-xl shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out mb-2 mt-8"
        >
          Foglalás
        </button>
      </div>
    </div>
  );
};

export default Main;