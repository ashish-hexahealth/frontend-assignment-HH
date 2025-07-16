import Link from 'next/link'
import React from 'react'

export default function HexaHealthRouting({
  data,
}: {
  data: Record<string, string[]>
}) {
  {
    return Object.entries(data).map(([key, value]: [string, string[]]) => (
      <details key={key} className="mt-1.5">
        <summary className="cursor-pointer">{key}</summary>
        <ul className="pl-4 list-decimal list-inside">
          {value.map((route) => (
            <li key={route}>
              <Link href={route} className="text-blue-600">
                {route}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    ))
  }
}
