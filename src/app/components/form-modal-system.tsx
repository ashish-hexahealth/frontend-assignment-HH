// app/FormModalSystem.tsx
'use client';
import React, { useState } from 'react';
import DynamicForm2 from './forms/dynamic-form2';
import Modal from './modals/modal';

const surgeryFormConfig : Form2Config = {
  heading: 'Check Surgery Cost',
  submitButtonLabel: 'Check Now',
  fields: [
    { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
    { name: 'insurance', label: 'Do you have Insurance?', type: 'radio', options: ['Yes', 'No'], required: true },
  ],
};

const insuranceFormConfig: Form2Config = {
  heading: 'Check Insurance Coverage',
  submitButtonLabel: 'Check Coverage',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: false},
    { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
  ],
};

export default function FormModalSystem({initialData}: {initialData: Record<FormType2, Form2Config> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formConfig, setFormConfig] = useState<null | Form2Config>(null);

  const openModal = (config: Form2Config) => {
    setFormConfig(config);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormConfig(null);
  };

  return (
    <div className="p-4 mt-10">
      <button
        onClick={() => openModal(surgeryFormConfig)}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Check Surgery Cost
      </button>
      <button
        onClick={() => openModal(insuranceFormConfig)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Check Insurance Coverage
      </button>

      <Modal isOpen={isOpen} onClose={closeModal} heading={formConfig?.heading}>
        {formConfig && (
          <DynamicForm2
            fields={formConfig.fields}
            submitButtonLabel={formConfig.submitButtonLabel}
            onSuccess={closeModal}
          />
        )}
      </Modal>
    </div>
  );
}
