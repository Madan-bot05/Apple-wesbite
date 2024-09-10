import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { models, sizes } from "../constants";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setmodel] = useState({
    title: "Iphone 15 pro in natural titanium",
    color: ["#8F8A81", "#FFE789", "#6F6C64"],
    img: yellowImg,
  });

  //camera contorl of the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding mt-10">
      <div className="screen-max-width ">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5 mb-0">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              gsapType="view1"
              groupRef={small}
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={1}
              gsapType="view2"
              groupRef={large}
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              {/* <View.Port/> */}
            </Canvas>
          </div>
          {/* <div className="mx-auto w-full mb-0">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center mb-1">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setmodel(item)}
                  ></li>
                ))}
              </ul>

             
              <div className="size-btn-container" >
                {sizes.map(({ label, value }) => (
                  <button className="size-btn" 
                    key={label}
                    onClick={() => setSize(value)}
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                  >
                    {label}
                    
                  </button>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Model;
