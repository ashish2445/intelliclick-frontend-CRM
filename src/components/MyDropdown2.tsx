import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, LucideProps } from "lucide-react";

interface DropdownOption {
  label: string;
  value: string;
  icon?: string; // Icon name as string
  color?: string;
  showCheckbox?: boolean;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  multiSelect?: boolean;
}

const Icons: Record<string, React.FC<LucideProps>> = {
  check: Check,
  chevronDown: ChevronDown,
};

const CustomDropdown2: React.FC<CustomDropdownProps> = ({
  options,
  selectedValues,
  onChange,
  multiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown

  // Automatically select the first option if nothing is selected (only for single select)
  useEffect(() => {
    if (!multiSelect && selectedValues.length === 0 && options.length > 0) {
      onChange([options[0].value]);
    }
  }, [multiSelect, selectedValues, options, onChange]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    let newValues = [...selectedValues];

    if (multiSelect) {
      if (newValues.includes(value)) {
        newValues = newValues.filter((val) => val !== value);
      } else {
        newValues.push(value);
      }
    } else {
      newValues = [value];
      setIsOpen(false);
    }

    onChange(newValues);
  };

  // Display logic for button label
  const displayText =
    multiSelect && selectedValues.length > 0
      ? `Selected (${selectedValues.length})`
      : options.find((opt) => opt.value === selectedValues[0])?.label || "Select an option";

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Dropdown Button */}
      <button
        className="w-fit gap-2 flex justify-between items-center px-4 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{displayText}</span>
        <ChevronDown size={16} />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
          {options.map((option) => {
            const IconComponent = option.icon ? Icons[option.icon] : null;
            const isSelected = selectedValues.includes(option.value);

            return (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
              >
                {/* Optional Checkbox */}
                {option.showCheckbox && (
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="w-4 h-4"
                  />
                )}

                {/* Dynamic Icon */}
                {IconComponent && <IconComponent size={16} />}

                {/* Color Box */}
                {option.color && (
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: option.color }}
                  ></span>
                )}

                {/* Label */}
                <span>{option.label}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown2;






