import { useState } from 'react';

const Form = () => {
  const roofMaterials = [
    {
      value: 'shingles',
      text: 'Shingles',
    },
    {
      value: 'tiles',
      text: 'Tiles',
    },
    {
      value: 'metal',
      text: 'Metal',
    },
    {
      value: 'fibre-glass',
      text: 'Fibre Glass',
    },

    {
      value: 'fibre-cement',
      text: 'Fibre Cement',
    },
  ];

  const materialSubType = [
    {
      value: 'corrugated',
      text: 'Corrugated',
    },
    {
      value: 'shake',
      text: 'Shake',
    },
    {
      value: 'slate',
      text: 'Slate',
    },
  ];

  const initialValues = {
    roofMaterial: 'shingles',
    subMaterial: 'corrugated',
    newGutters: 'yes',
    oldRoof: 'one-layer',
    stories: '1',
    skylights: '0',
    vents: '0',
    dormers: '0',
  };

  const [formValues, setFormValues] = useState(initialValues);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialValues);
  }

  function handleChange(e: any) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="">
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
                <option key={index} value={item.value}>
                  {item.text}
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
            {materialSubType.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.text}
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
            <option value="yes">Yes</option>
            <option value="no">No</option>
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
            <option value="one-layer">Yes 1 layer</option>
            <option value="two-layer">Yes 2 layer</option>
            <option value="no">No</option>
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