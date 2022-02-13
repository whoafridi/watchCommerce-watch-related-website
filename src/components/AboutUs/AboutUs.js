import React from "react";

const AboutUs = () => {
  const url = `https://images.squarespace-cdn.com/content/v1/52d654d2e4b0a3af71bf6bcc/1627655385644-4FUVCHGIEALE84TKKIUL/Sif+1948+white+brown+calf.jpg`;

  return (
    <div className="container mt-3 row align-items-center">
      <h1 className="text-center">Welcome to watchCommerce</h1>
      <div className="col-md-7 col-sm-12">
        <img style={{ width: "100%" }} src={url} alt="lol" />
      </div>
      <div className="col-md-5 col-sm-12">
        <p>Since 2020, It's been amazing journey at ProCourier.</p>

        <p>
          Nulla facilisi. Curabitur suscipit ullamcorper lectus, sit amet
          dapibus orci tempor a. Donec placerat condimentum arcu, vitae faucibus
          lectus scelerisque at. Donec interdum tellus elit, vel malesuada magna
          consectetur at. Ut vehicula felis eu augue auctor rutrum. Duis vel
          commodo nisi, vel auctor neque. Vivamus sodales dolor libero, vitae
          suscipit lectus hendrerit id. Duis at arcu sed urna rhoncus tincidunt
          sit amet eget nisi. Donec accumsan vulputate augue, sit amet egestas
          dui congue et. Nulla sagittis, felis sit amet facilisis sollicitudin,
          sem metus malesuada lorem, et malesuada tortor arcu at nibh. Donec
          congue, nibh quis tincidunt tempus, dui leo laoreet diam, eget
          volutpat nunc elit at tortor. Cras blandit elit nisl, vitae venenatis
          neque fringilla quis.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
