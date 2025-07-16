import React from 'react'

export default function Page({ params }: any) {
  const segments = params.params ?? []

  let variant = null
  let treatmentCity = null

  if (segments.length === 1) {
    treatmentCity = segments[0]
  } else if (segments.length === 2) {
    variant = segments[0]
    treatmentCity = segments[1]
  }

  return (
    <div className="text-center pt-4">
      <h1 className="text-lg">
        Welcome to the{' '}
        <span className="font-mono text-sm text-sky-700 font-semibold">
          /marketing{variant ? `/${variant}` : ''}/{treatmentCity}
        </span>
      </h1>
    </div>
  )
}
