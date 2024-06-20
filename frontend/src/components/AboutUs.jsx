import React from 'react';
import carone from '../images/carone.jpg'
import cartwo from '../images/cartwo.jpg'

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-blue-900">Rólunk</h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-700">
                        A Zenit Személyes Sofőrszolgálatával a kényelem és a biztonság a kezében van. Akár egy fontos üzleti találkozóra készül,
                        akár egy elegáns esti rendezvényre, vagy csak szeretné, ha valaki megbízhatóan vezetné otthonába a saját autóját egy hosszú nap után, mi állunk rendelkezésére.
                    </p>
                </header>

                {/* Two Column Layout for Text and Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Left Column - Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">Üzleti Sofőrszolgálat</h2>
                        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                        A Zenit Sofőrszolgálat tudja, hogy az üzleti utazásoknál kiemelten fontos a pontosság, a megbízhatóság és a professzionalizmus. Ezért különleges üzleti sofőrszolgálatunkkal olyan színvonalas utazási élményt biztosítunk, amely megfelel az üzleti élet dinamikájának és igényeinek.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">Reptérről Haza szolgáltatás</h2>
                        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                        Utazás után nincs is jobb, mint gyorsan és kényelmesen hazatérni. A Zenit Sofőrszolgálat "Reptérről Haza" szolgáltatása pontosan ezt kínálja: egy gondtalan megoldást, hogy a hosszú repülőutak után ne kelljen a tömegközlekedéssel vagy taxival bajlódnod. Tegye az utazás minden szakaszát stresszmentessé azzal, hogy minket választ.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">Rendezvények és Esküvők Kitelepülések</h2>
                        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                        Az esküvők és nagy rendezvények kitelepülése sokszor stresszes lehet, különösen, amikor a vendégek biztonságos és kényelmes érkezéséről van szó. A Zenit Sofőrszolgálat különleges megoldást kínál, hogy ezen a különleges napon minden zökkenőmentesen történjen. Legyen szó egy kis esküvőről vagy egy nagyszabású eseményről, mi gondoskodunk róla, hogy vendégei időben és stílusosan érkezzenek meg.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">Csomagszállítás</h2>
                        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                        A Zenit Sofőrszolgálat nem csak az utazásaidat teszi kényelmesebbé és biztonságosabbá, hanem a csomagjaid szállítására is gondolunk. Legyen szó dokumentumokról, ajándékokról, vagy akár nagyobb méretű csomagokról, csomagszállítási szolgáltatásunkkal gyors és megbízható megoldást kínálunk.
                        </p>
                    </div>

                    

                    {/* Right Column - Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="relative rounded-lg overflow-hidden">
                            <img src={carone} alt="Image One" className="object-cover object-center h-64 sm:h-auto lg:h-auto w-full" />
                        </div>
                        <div className="relative rounded-lg overflow-hidden">
                            <img src={cartwo} alt="Image Two" className="object-cover object-center h-64 sm:h-auto lg:h-auto w-full" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;