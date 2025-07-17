// Doctor form config
const doctorFormConfig: FormConfig = {
  steps: [
    {
      stepName: 'Personal Info',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
      ],
    },
    {
      stepName: 'Professional Info',
      fields: [
        {
          name: 'speciality',
          label: 'Speciality',
          type: 'text',
          required: false,
        },
        {
          name: 'experience',
          label: 'Experience',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}

// Hospital form config
const hospitalFormConfig: FormConfig = {
  steps: [
    {
      stepName: 'Basic Info',
      fields: [
        {
          name: 'hospitalName',
          label: 'Hospital Name',
          type: 'text',
          required: true,
        },
        { name: 'address', label: 'Address', type: 'text', required: true },
        {
          name: 'hospitalNumber',
          label: 'Hospital Number',
          type: 'number',
          required: false,
        },
      ],
    },
    {
      stepName: 'Additional Info',
      fields: [
        {
          name: 'bedSize',
          label: 'Hospital Bed Size',
          type: 'text',
          required: false,
        },
        {
          name: 'departments',
          label: 'Departments',
          type: 'text',
          required: true,
        },
        {
          name: 'numberOfDoctors',
          label: 'Number of Doctors',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}

const form1Configs: Record<string, FormConfig> = {
  doctor: doctorFormConfig,
  hospital: hospitalFormConfig,
}

export default form1Configs
