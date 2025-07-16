import React, { useState } from 'react'
import Inputfield from '../atoms/input-field'
type Props = {
  fields: FieldConfig[]
  submitButtonLabel: string
  onSuccess: () => void
}

export default function DynamicForm2({
  fields,
  submitButtonLabel,
  onSuccess,
}: Props) {
  const initialData = fields.reduce((acc, field) => {
    acc[field.name] = ''
    return acc
  }, {} as Record<string, string>)

  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    fields.forEach((field) => {
      if (field.required && !formData[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    onSuccess()
    alert('Form submitted successfully! 🎉')
  }

  return (
    <div>
      {fields.map((field) => (
        <Inputfield
          key={field.name}
          err={errors[field.name]}
          placeholder={field.label}
          onChange={(val) => {
            handleChange(field.name, val)
          }}
          {...field}
        />
      ))}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? 'Submitting...' : submitButtonLabel}
      </button>
    </div>
  )
}
