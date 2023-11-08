import { schemaFormCadastro } from '@/schema/schemaFormCadastro'
import { z } from 'zod'

// NextAuth
export interface NextAuthSessionProviderProps {
  children: React.ReactNode
}

// PrivateLayout
export interface PrivateLayoutProps {
  children: React.ReactNode
}

// schemaRegister
export type FormPropsCadastro = z.infer<typeof schemaFormCadastro>
