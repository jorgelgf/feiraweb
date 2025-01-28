import { useState } from 'react'

export const DrawerAppModal = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  return { toggleMenu, setToggleMenu }
}