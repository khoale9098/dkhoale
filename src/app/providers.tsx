import { ReactNode } from 'react'

interface ProviderLayoutProps {
  children: ReactNode
}

export default function AppProviders({ children }: ProviderLayoutProps) {
  return children
}
