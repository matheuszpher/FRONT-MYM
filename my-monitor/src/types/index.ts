import { schemaFormCadastro } from "@/schema/schemaFormCadastro";
import { schemaFormLogin } from "@/schema/schemaFormLogin";
import { z } from "zod";

// NextAuth
export interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}

// PrivateLayout
export interface PrivateLayoutProps {
  children: React.ReactNode;
}


//Define as propriedades aceitas pelo componente HeaderHomepage.
export interface HeaderHomepageProps {
  logoSrc?: string;
  textColor?: string;
}

// schemaRegister
export type FormPropsCadastro = z.infer<typeof schemaFormCadastro>;

// schemaLogin
export type FormLoginProps = z.infer<typeof schemaFormLogin>;
