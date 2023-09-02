"use client"

import React from "react"
import { Provider as WrapBalancerProvider } from "react-wrap-balancer"

interface ProviderLayoutProps {
  children: React.ReactNode
}

export default function AppProviders({ children }: ProviderLayoutProps) {
  return <WrapBalancerProvider>{children}</WrapBalancerProvider>
}
