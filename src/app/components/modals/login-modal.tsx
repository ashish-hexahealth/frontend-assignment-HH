'use client'
import React, { useEffect, useState } from 'react'
import Inputfield from '../atoms/input-field'
import Modal from './modal'

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen?: boolean
  onClose?: () => void
}) {
  const [_isOpen, setIsOpen] = useState(isOpen || false)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [isRequestedOtp, setIsRequestedOtp] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setIsOpen(isOpen || false)
    setErrors({})
    setIsRequestedOtp(false)
  }, [isOpen])

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (!mobile) {
      newErrors.mobile = 'Mobile number is required'
    }
    if (isRequestedOtp && !otp) {
      newErrors.otp = 'OTP is required'
    }
    setErrors(newErrors)

    // Return true if no errors
    return Object.keys(newErrors).length === 0
  }

  function verify() {
    if (!validateStep()) return
    localStorage.setItem('accessToken', 'hello_world')
    alert('Login successful! 🎉')
    setIsOpen(false)
    onClose?.()
  }

  return (
    <>
      <Modal
        isOpen={_isOpen}
        onClose={() => {
          setIsOpen(false)
          onClose?.()
        }}
        heading={'Login'}
      >
        {!isRequestedOtp ? (
          <div>
            <Inputfield
              type="number"
              name="mobile"
              placeholder="Enter your mobile number"
              onChange={(val) => {
                setMobile(val)
              }}
              value={mobile}
              err={errors.mobile}
            />
            <button
              onClick={() => validateStep() && setIsRequestedOtp(true)}
              className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 mx-auto block active:bg-blue-700"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <Inputfield
              type="number"
              name="otp"
              placeholder="Enter your OTP"
              onChange={(val) => {
                setOtp(val)
              }}
              value={otp}
              err={errors.otp}
            />
            <button
              onClick={verify}
              className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 mx-auto block active:bg-blue-700"
            >
              Verify
            </button>
          </div>
        )}
      </Modal>
    </>
  )
}
