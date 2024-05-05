import React from 'react'

export default function NavbarButton({link,children}) {
  return (
    <a href={link}>{children}</a>
  )
}
