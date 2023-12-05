import React from 'react'

export const metadata = {
  title: 'Tarea Técnica para Desarrollador - Ledge',
  description: 'El objetivo principal de esta tarea es evaluar tus habilidades y conocimientos en desarrollo web, incluyendo el diseño Frontend y la integración con bases de datos para la persistencia de datos. Además, buscamos ver tu capacidad de seguir buenas prácticas de desarrollo y cómo enfrentas y resuelves problemas técnicos.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
