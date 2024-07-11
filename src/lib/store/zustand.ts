import { create } from 'zustand'

type MobileMenuState = {
  isOpen: boolean
  toggleMenu: (isOpen?: boolean) => void
}

export const useMobileMenuStore = create<MobileMenuState>(set => ({
  isOpen: false,
  toggleMenu: (isOpen?: boolean) =>
    set(state => ({ isOpen: isOpen !== undefined ? isOpen : !state.isOpen })),
}))
