"use client";

import React, { useState } from "react";
import { aiModels } from "@/data/aiModels";
import { jibril } from "@/utils/fonts";
import Image from "next/image";

const DungeonMasters = () => {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setSelectedModel((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full flex flex-col items-center px-8 py-16">
      <h2
        className="uppercase text-tomato text-4xl mb-12 text-center"
        style={jibril.style}
      >
        Our Dungeon Master Bob has Various Personalities
      </h2>
      <div className="max-w-5xl w-full flex flex-col gap-12">
        {aiModels.map((model, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg shadow-md  hover:bg-gray-200 transition-all duration-300"
          >
            <div className="lg:w-1/3 w-full flex items-center justify-center">
              <Image
                src={model.imgUrl}
                alt={model.name}
                width={300}
                height={300}
                className="w-64 h-64 rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-2/3 w-full">
              <h3
                style={jibril.style}
                className="text-3xl text-tomato font-bold"
              >
                {model.name}
              </h3>
              <p className="text-lg leading-relaxed">{model.description}</p>
              {selectedModel === index && (
                <p className="text-base leading-relaxed text-gray-700">
                  {model.longDescription}
                </p>
              )}
              <button
                className="text-tomato font-semibold mt-2 flex items-center gap-2 hover:underline"
                onClick={() => toggleDetails(index)}
              >
                {selectedModel === index ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DungeonMasters;
