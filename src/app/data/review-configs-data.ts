const doctorFormConfig: ReviewConfigs = {
  heading: 'Check Surgery Cost',
  submitButtonLabel: 'Check Now',
  fields: [
    { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
    {
      name: 'insurance',
      label: 'Do you have Insurance?',
      type: 'radio',
      options: ['Yes', 'No'],
      required: true,
    },
  ],
  info: 'Note: All Reviews are checked for spam and abusive language before they are published',
}

const hospitalFormConfig: ReviewConfigs = {
  heading: 'Check Insurance Coverage',
  submitButtonLabel: 'Check Coverage',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: false },
    { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
  ],
  info: 'Note: All Reviews are checked for spam and abusive language before they are published',
}

const reviewConfigs: Record<FormType, Form2Config> = {
  doctor: doctorFormConfig,
  hospital: hospitalFormConfig,
}

export default reviewConfigs
