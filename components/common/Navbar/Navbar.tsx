

import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <div>
    
  </div>
)

export default Navbar