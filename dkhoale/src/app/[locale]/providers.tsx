'use client'

import { ReactNode } from 'react'
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'

interface ProviderLayoutProps {
  children: ReactNode
}

export default function AppProviders({ children }: ProviderLayoutProps) {
  return <WrapBalancerProvider>{children}</WrapBalancerProvider>
}
