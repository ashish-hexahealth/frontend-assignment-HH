// app/FormModalSystem.tsx
'use client'
import React, { useEffect, useState } from 'react'
import DynamicForm2 from './forms/dynamic-form2'
import Modal from './modals/modal'

export default function WriteReview() {
  const [isOpen, setIsOpen] = useState(false)
  const [reviewFor, setReviewFor] = useState<FormType | null>('doctor')

  const openModal = (formType: FormType) => {
    setReviewFor(formType)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setReviewFor(null)
  }

  //   useEffect(() => {}, [reviewFor])

  return (
    <div className="my-7">
      <button
        onClick={() => openModal('doctor')}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Write a Review for Doctor
      </button>
      <button
        onClick={() => openModal('hospital')}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Write a Review for Hospital
      </button>

      <Modal isOpen={isOpen} onClose={closeModal} heading={'Write a review'}>
        Hello World
      </Modal>
    </div>
  )
}
