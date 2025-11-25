import React, { useState } from "react";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';
import { Link } from "react-router-dom";

function Roupas() {
  const [tab, setTab] = useState("feminino");

  const feminino = [
    {
      id: 1,
      title: "Camiseta Lifestyle Show",
      image: "/img/MAX-CAMISETA-ETS 1.png",
      oldPrice: "R$ 120,90",
      price: "R$ 110,00",
      installments: "Até 4x de R$ 30,00",
      pix: "110,00",
      link: "/produto/1"
    },
    {
      id: 2,
      title: "Moletom Squad",
      image: "/img/Moletom-squad.png",
      oldPrice: "R$ 320,90",
      price: "R$ 310,00",
      installments: "Até 4x de R$ 80,00",
      pix: "310,00",
      link: "/produto/2"
    },
    {
      id: 3,
      title: "Calça legging",
      image: "/img/calça-leggins.png",
      oldPrice: "R$ 175,90",
      price: "R$ 160,00",
      installments: "Até 4x de R$ 43,97",
      pix: "160,00",
      link: "/produto/3"
    },
    {
      id: 4,
      title: "Shorts legging",
      image: "/img/Shorts-leggins.png",
      oldPrice: "R$ 300,90",
      price: "R$ 290,00",
      installments: "Até 4x de R$ 75,00",
      pix: "290,00",
      link: "/produto/4"
    }
  ];

  const masculino = [
    {
      id: 5,
      title: "Camiseta Leblon",
      image: "/img/MAX-CAMISETA-ETS 1.png",
      oldPrice: "R$ 175,90",
      price: "R$ 160,00",
      installments: "Até 4x de R$ 43,97",
      pix: "160,00",
      link: "/produto/5"
    },
    {
      id: 6,
      title: "Calça Squad",
      image: "/img/calça-squad.png",
      oldPrice: "R$ 320,90",
      price: "R$ 310,00",
      installments: "Até 4x de R$ 80,00",
      pix: "310,00",
      link: "/produto/6"
    },
    {
      id: 7,
      title: "Shorts Speed",
      image: "/img/camiseta-leblon.png",
      oldPrice: "R$ 300,90",
      price: "R$ 290,00",
      installments: "Até 4x de R$ 75,00",
      pix: "290,00",
      link: "/produto/7"
    },
    {
      id: 8,
      title: "Moletom Squad (M)",
      image: "/img/shorts-squad.png",
      oldPrice: "R$ 320,90",
      price: "R$ 310,00",
      installments: "Até 4x de R$ 80,00",
      pix: "310,00",
      link: "/produto/8"
    }
  ];

  const items = tab === "feminino" ? feminino : masculino;

  return (
    <>
      <Topo />
      <HeaderLinks />

      <main className="bg-white py-10 px-5 md:py-16 md:px-20 min-h-[70vh] text-center font-sans">
        <div className="mb-5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider mb-5">ROUPAS</h2>
        </div>

        <div className="inline-flex gap-3 mb-7">
          <button
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              tab === "feminino" 
                ? "bg-black text-white shadow-lg" 
                : "bg-white text-black"
            }`}
            onClick={() => setTab("feminino")}
          >
            FEMININO
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              tab === "masculino" 
                ? "bg-black text-white shadow-lg" 
                : "bg-white text-black"
            }`}
            onClick={() => setTab("masculino")}
          >
            MASCULINO
          </button>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto p-2">
          {items.map((p) => (
            <article key={p.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative p-4 flex items-center justify-center min-h-[150px] bg-white">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="max-w-[140px] max-h-[140px] object-contain"
                />
                <span className="absolute left-3 top-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  31% OFF
                </span>
                <button className="absolute right-3 top-3 bg-transparent border-none text-base cursor-pointer">
                  ♡
                </button>
              </div>
              
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h4 className="m-0 font-semibold text-sm text-gray-800">{p.title}</h4>
                <div className="text-yellow-500 text-sm">★★★★★</div>
                
                <div className="mt-2 text-sm text-gray-600">
                  <small className="line-through block">{p.oldPrice}</small>
                  <div className="text-gray-800 font-bold mt-1">{p.price}</div>
                  <small className="text-gray-500 block mt-1">{p.installments}</small>
                  <div className="text-green-600 font-bold mt-2">
                    R$ <strong className="text-green-600">{p.pix}</strong>
                  </div>
                </div>
                
                <Link 
                  to={p.link} 
                  className="mt-auto inline-block bg-green-600 text-white py-2 px-4 rounded-lg text-center no-underline hover:bg-green-700 transition-colors"
                >
                  COMPRAR
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Roupas;
