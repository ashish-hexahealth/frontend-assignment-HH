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

const form2Configs: Record<FormType2, Form2Config> = {
    surgery: surgeryFormConfig,
    insurance: insuranceFormConfig
};

export default form2Configs;