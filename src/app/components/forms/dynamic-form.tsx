"use client";
import React, { useState } from "react";
import Inputfield from "../atoms/input-field";
import Dropdown from "../atoms/dropdown";

export default function DynamicForm({initialData}: {initialData: Record<FormType, FormConfig>}) {
  const [selectedType, setSelectedType] = useState<FormType>("doctor");
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentConfig = initialData[selectedType];
  const steps = currentConfig.steps;
  const fields = steps[currentStep].fields;

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDropdownChange = (val: FormType) => {
    setSelectedType(val);
    setCurrentStep(0);
    setFormData({});
  };

  const validateStep = () => {
    const currentFields = steps[currentStep].fields;
    const newErrors: Record<string, string> = {};

    for (const field of currentFields) {
      const value = formData[field.name];

      if (field.required && (!value || String(value).trim() === "")) {
        newErrors[field.name] = `${field.label} is required`;
      }
      // You can add more validations here
      if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(String(value))) {
          newErrors[field.name] = `Invalid email`;
        }
      }
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setErrors({});
      setCurrentStep(0);
      setFormData({});
      console.log("Form Submitted", formData);
      alert("Form Submitted Successfully 🎉");
    }
  };

  return (
    <div className="shadow-md rounded-md p-4 min-w-80 w-1/2 bg-sky-100 border border-sky-300">
      <h1 className="text-lg font-semibold">Consultation Form</h1>
      <form className="mt-2">
        <Dropdown
          value={selectedType}
          onChange={handleDropdownChange}
          options={[
            { name: "Doctor", value: "doctor" },
            { name: "Hospital", value: "hospital" },
          ]}
        />
        <h2 className="text-base font-medium mt-5">
          {steps[currentStep].stepName}
        </h2>
        {fields.map((field) => (
          <Inputfield
            key={field.name}
            name={field.name}
            placeholder={field.label}
            type={field.type}
            value={formData[field.name] ?? ""}
            onChange={(val: string) => handleFieldChange(field.name, val)}
            err={errors[field.name] ?? ""}
            min={field.type === "number" ? 0 : undefined}
          />
        ))}
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
