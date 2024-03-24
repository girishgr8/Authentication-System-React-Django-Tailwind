import { Select, Label } from "flowbite-react";

const countries = [
  "Select Country",
  "India",
  "United States",
  "Japan",
  "Australia"
];

const CountryInput = () => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="country" value="Country" className="required" />
      </div>
      <Select id="country" name="country" required>
        {countries.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </Select>
    </div>
  );
};

export default CountryInput;
