import React, { useState } from "react";
import { states } from "../data/states";
import { pric } from "../data/prices";

interface Props {
  getValue: (value: formValuesTypes) => void;
}
export type formValuesTypes = {
  state: string;
  dimensions: string;
  roofMaterial: string;
  subMaterial: string;
  newGutters: string;
  oldRoof: string;
  stories: string;
  skylights: string;
  vents: string;
  dormers: string;
};

const Form: React.FC<Props> = ({ getValue }) => {
  const initialValues = {
    state: "Alabama",
    dimensions: "0",
    roofMaterial: "Shingle",
    subMaterial: "3-Tab",
    newGutters: "1",
    oldRoof: "1",
    stories: "1",
    skylights: "0",
    vents: "0",
    dormers: "0",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const roofMaterials = Object.keys(pric);
  const matSubType = Object.keys(
    pric[
      (formValues.roofMaterial ||
        initialValues.roofMaterial) as keyof typeof pric
    ]
  );


  function handleSubmit(e: any) {
    e.preventDefault();

    setFormValues(initialValues);
    if (parseFloat(formValues.dimensions) > 0) getValue(formValues);
  }

  function handleChange(e: any) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="state">State</label>
          <select
            className="select h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md"
            name="state"
            id="state"
            value={formValues.state}
            onChange={handleChange}
          >
            {states.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="subMaterial">Roof Dimension</label>
          <input
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md"
            type="text"
            name="dimensions"
            id="dimensions"
            value={formValues.dimensions}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* first row */}

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="roofMaterial">Roof material</label>
          <select
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md"
            name="roofMaterial"
            id="roofMaterial"
            value={formValues.roofMaterial}
            onChange={handleChange}
          >
            {roofMaterials.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="subMaterial">Material sub type</label>
          <select
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md"
            name="subMaterial"
            id="subMaterial"
            value={formValues.subMaterial}
            onChange={handleChange}
          >
            {matSubType.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Second row */}

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="newGutters">Do you need new gutters?</label>
          <select
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md"
            name="newGutters"
            id="newGutters"
            value={formValues.newGutters}
            onChange={handleChange}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="oldRoof">
            Tear off, removal and dumping of old roof?
          </label>
          <select
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md"
            name="oldRoof"
            id="oldRoof"
            value={formValues.oldRoof}
            onChange={handleChange}
          >
            <option value="1">Yes 1 layer</option>
            <option value="2">Yes 2 layer</option>
            <option value="0">No</option>
          </select>
        </div>
      </div>

      {/* Third row */}

      <div className="grid grid-cols-2  md:grid-cols-4  gap-6 mb-8">
        <div className="flex flex-col w-full">
          <label htmlFor="stories">Number of stories</label>
          <input
            onChange={handleChange}
            name="stories"
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md text-center"
            value={formValues.stories}
            type="text"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="skylights">Skylights</label>
          <input
            onChange={handleChange}
            name="skylights"
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md text-center"
            value={formValues.skylights}
            type="text"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="vents">Ridge vents</label>
          <input
            onChange={handleChange}
            name="vents"
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md text-center"
            value={formValues.vents}
            type="text"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="dormers">Dormers</label>
          <input
            onChange={handleChange}
            name="dormers"
            className="h-10 px-2 text-blue-500 border-[1px] border-gray-400 rounded-md text-center"
            value={formValues.dormers}
            type="text"
          />
        </div>
      </div>

      {/* submit btn */}

      <button
        type="submit"
        className="bg-[#AA77FF] h-12 rounded-md w-full text-white font-medium"
      >
        Calculate Your Estimate
      </button>
    </form>
  );
};

export default Form;