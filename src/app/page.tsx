'use client';
import MultiSelectDropdown from "@/components/MultiSelectDropDown";
import { useState } from "react";

const options = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
  { label: "Option 3", value: "opt3" },
];

const MyComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div>
      <MultiSelectDropdown
        options={options}
        selectedOptions={selectedOptions}
        onSelect={setSelectedOptions}
      />

      {/* Display selected options here */}
      {selectedOptions.length > 0 && (
        <div className="mt-2">
          <strong>Selected:</strong> {selectedOptions.map((opt) => options.find(o => o.value === opt)?.label).join(", ")}
        </div>
      )}
    </div>
  );
};

export default MyComponent;





