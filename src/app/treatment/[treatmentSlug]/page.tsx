import React from 'react'

export default function Page(props: any) {
  console.log(props)
  return (
    <div className="text-center pt-4">
      <h1 className="text-lg">
        Welcome to the{' '}
        <span className="font-mono text-sm text-sky-700 font-semibold">
          /{props.params.treatmentSlug}
        </span>
      </h1>
    </div>
  )
}
