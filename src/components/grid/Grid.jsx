import React from "react";
import vaquita from "../../assests/img/vaquita.jpg";
import polar_bear from "../../assests/img/polar_bear.jpg";
import bengal_tiger from "../../assests/img/bengal_tiger.jpg";
import panda from "../../assests/img/panda.jpg";
import dolphin from "../../assests/img/dolphin.jpg";
import amur_leapord from "../../assests/img/amur_leapord.jpg";
import elephant from "../../assests/img/african_forest_elephant.jpg";
import WaveButTop from "../waves/WaveButTop";
const Grid = () => {
  return (
    <div className="grid-wrapper">
      <WaveButTop />
      <div className="grid" id="gallery">
        <h1 className="heading-primary">Endangered Animals</h1>
        <div className="grid-container">
          <div id="work">
            <div id="photos">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://save-panda.netlify.app/"
              >
                <img alt="alt" id="panda" src={panda} />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://vaquita-wildlife-conservation.netlify.app/"
              >
                <img alt="alt" id="vaquita" src={vaquita} />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://polar-bear-wildlife-conservation.netlify.app/"
              >
                <img alt="alt" id="bear" src={polar_bear} />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://save-tiger.netlify.app/"
              >
                <img alt="alt" id="tiger" src={bengal_tiger} />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://dolphin-wildlife-conservation.netlify.app/"
              >
                <img alt="alt" id="dolphin" src={dolphin} />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://amur-leopard-wildlife-conservation.netlify.app/"
              >
                <img alt="alt" id="amur" src={amur_leapord} />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="
https://elephant-wildlife-conservation.netlify.app/
"
              >
                <img alt="alt" id="elephant" src={elephant} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
