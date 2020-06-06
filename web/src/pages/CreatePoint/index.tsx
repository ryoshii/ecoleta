import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.css";
import logo from "../../assets/logo.svg";

const CreatePoint: React.FC = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do
          <br />
          ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field">
            <label htmlFor="name">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="field">
            <label htmlFor="name">Whatsapp</label>
            <input type="text" name="whatsapp" id="whatsapp" />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço do mapa</span>
          </legend>

          <Map center={[-23.506739, -46.4873902]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-23.506739, -46.4873902]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="">Selecione uma UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Items de coleta</h2>
          </legend>

          <ul className="items-grid">
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Teste"
              />
              <span>Lâmpadas</span>
            </li>
            <li className="selected">
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Teste"
              />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Teste"
              />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Teste"
              />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Teste"
              />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Teste"
              />
              <span>Lâmpadas</span>
            </li>
          </ul>
        </fieldset>

        <button>Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
