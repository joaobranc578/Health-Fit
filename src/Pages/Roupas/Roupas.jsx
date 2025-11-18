import React, { useState } from "react";
import "./Roupas.css";
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

      <main className="roupas-page">
        <div className="container-title">
          <h2>ROUPAS</h2>
        </div>

        <div className="tabs">
          <button
            className={tab === "feminino" ? "tab active" : "tab"}
            onClick={() => setTab("feminino")}
          >
            FEMININO
          </button>
          <button
            className={tab === "masculino" ? "tab active" : "tab"}
            onClick={() => setTab("masculino")}
          >
            MASCULINO
          </button>
        </div>

        <section className="produtos-grid">
          {items.map((p) => (
            <article key={p.id} className="card-produto">
              <div className="card-img">
                <img src={p.image} alt={p.title} />
                <span className="badge">31% OFF</span>
                <button className="wishlist">♡</button>
              </div>
              <div className="card-body">
                <h4>{p.title}</h4>
                <div className="stars">★★★★★</div>
                <div className="precos">
                  <small className="old">{p.oldPrice}</small>
                  <div className="price">{p.price}</div>
                  <small className="install">{p.installments}</small>
                  <div className="pix">R$ <strong className="pix-value">{p.pix}</strong></div>
                </div>
                <Link to={p.link} className="btn-comprar">COMPRAR</Link>
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