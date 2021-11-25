import React from "react";
import { Particles } from "react-particles-js";
import particleConfig from "./config/particles-config";

export const ParticlesComponent = () => {
  return (
    <Particles
      className="absolute top-0 left-0 z-10 w-full"
      params={particleConfig}
    />
  );
};

export default ParticlesComponent;
