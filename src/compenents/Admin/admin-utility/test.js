import { useState } from 'react';
import Select from 'react-select';

function App() {
  const sportsData = [
    { value: 'التصنيف الاول', label: 'التصنيف الاول' },
    { value: 'التصنيف التاني', label: 'التصنيف التاني' },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedItems(selectedOptions);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border:
        state.isFocused || state.isSelected
          ? '2px solid black !important'
          : '1px solid #818385 !important',
      boxShadow: state.isFocused ? 'null' : 'null',
      cursor: 'pointer', // Set cursor to pointer on hover
      backgroundColor: '#F9F9F9',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#0096FB',
      borderRadius: '10px',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      borderRadius: '50%',
      ':hover': {
        backgroundColor: '#0096FB',
        color: 'white',
      },
    }),
  };

  return (
    <div>
      <div className="inputfield-start mt-0 mx-1" style={{ width: '101.5%' }}>
        <Select
          isMulti
          options={sportsData}
          value={selectedItems}
          onChange={handleSelectChange}
          placeholder="التصنيف الفرعي"
          styles={customStyles} // Apply custom styles to the dropdown
        />
      </div>
    </div>
  );
}

export default App;
