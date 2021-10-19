import * as yup from 'yup'
import {validateCpf} from "./validateCpf"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Por favor entre com um email válido")
      .required('Email é obrigatório'),
    senha: yup
      .string()
      .min(8, ({ min }) => `A senha deve conter no mínimo ${min} caracteres`)
      .required('Senha é obrigatória'),
  })

const cadastroValidationSchema = yup.object().shape({
  Nome: yup
    .string()
    .required('Nome é obrigatório'),
  Cpf: yup
    .string()
    .min(11, ({ min }) => `CPF deve conter no mínimo ${min} caracteres`)
    .required('CPF é obrigatório'),
  Email: yup
    .string()
    .email("Por favor entre com um email válido")
    .required('Email é obrigatório'),
  Senha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required('Senha é obrigatória'),
  ConfSenha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required('Confirmar Senha é obrigatória'),
  Tel: yup
    .string()
    .matches(phoneRegExp, 'Telefone não é válido')
    .required('Telefone é obrigatório'),
  Cep: yup
    .string()
    .min(8, ({ min }) => `CEP deve conter no mínimo ${min} caracteres`)
    .required('CEP é obrigatório'),
  Numero: yup
    .number()
    .required('Número é obrigatório')
    .positive('Número não pode ser negativo')
    .integer(),
  Rua: yup
    .string()
    .required('Rua é obrigatória'),
  Bairro: yup
    .string()
    .required('Bairro é obrigatório'),
  Cidade: yup
    .string()
    .required('Cidade é obrigatório'),
  Estado: yup
    .string()
    .required('Estado é obrigatório'),
})

const editarValidationSchema = yup.object().shape({
  Nome: yup
    .string()
    .required('Nome é obrigatório'),
  Cpf: yup
    .string()
    .min(11, ({ min }) => `CPF deve conter no mínimo ${min} caracteres`)
    .required('CPF é obrigatório'),
  Email: yup
    .string()
    .email("Por favor entre com um email válido")
    .required('Email é obrigatório'),
  Senha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`),
  ConfSenha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`),
  Tel: yup
    .string()
    .matches(phoneRegExp, 'Telefone não é válido')
    .required('Telefone é obrigatório'),
  Cep: yup
    .string()
    .min(8, ({ min }) => `CEP deve conter no mínimo ${min} caracteres`)
    .required('CEP é obrigatório'),
  Numero: yup
    .number()
    .required('Número é obrigatório')
    .positive('Número não pode ser negativo')
    .integer(),
  Rua: yup
    .string()
    .required('Rua é obrigatória'),
  Bairro: yup
    .string()
    .required('Bairro é obrigatório'),
  Cidade: yup
    .string()
    .required('Cidade é obrigatório'),
  Estado: yup
    .string()
    .required('Estado é obrigatório'),
})

const cadastroIdosoValidationSchema = yup.object().shape({
  Nome: yup
    .string()
    .required('Nome é obrigatório'),
  Cpf: yup
    .string()
    .min(11, ({ min }) => `CPF deve conter no mínimo ${min} caracteres`)
    .required('CPF é obrigatório'),
  Email: yup
    .string()
    .email("Por favor entre com um email válido")
    .required('Email é obrigatório'),
  Senha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required('Senha é obrigatória'),
  ConfSenha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required('Confirmar Senha é obrigatória'),
  Tel: yup
    .string()
    .matches(phoneRegExp, 'Telefone não é válido')
    .required('Telefone é obrigatório'),
  Cep: yup
    .string()
    .min(8, ({ min }) => `CEP deve conter no mínimo ${min} caracteres`)
    .required('CEP é obrigatório'),
  Numero: yup
    .number()
    .required('Número é obrigatório')
    .positive('Número não pode ser negativo')
    .integer(),
  Rua: yup
    .string()
    .required('Rua é obrigatória'),
  Bairro: yup
    .string()
    .required('Bairro é obrigatório'),
  Cidade: yup
    .string()
    .required('Cidade é obrigatório'),
  Estado: yup
    .string()
    .required('Estado é obrigatório'),
  Cuidador_Cpf: yup
    .string()
    .min(11, ({ min }) => `CPF deve conter no mínimo ${min} caracteres`)
    .required('CPF é obrigatório'),
})

const editarIdosoValidationSchema = yup.object().shape({
  Nome: yup
    .string()
    .required('Nome é obrigatório'),
  Cpf: yup
    .string()
    .min(11, ({ min }) => `CPF deve conter no mínimo ${min} caracteres`)
    .required('CPF é obrigatório'),
  Email: yup
    .string()
    .email("Por favor entre com um email válido")
    .required('Email é obrigatório'),
  Senha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`),
  ConfSenha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`),
  Tel: yup
    .string()
    .matches(phoneRegExp, 'Telefone não é válido')
    .required('Telefone é obrigatório'),
  Cep: yup
    .string()
    .min(8, ({ min }) => `CEP deve conter no mínimo ${min} caracteres`)
    .required('CEP é obrigatório'),
  Numero: yup
    .number()
    .required('Número é obrigatório')
    .positive('Número não pode ser negativo')
    .integer(),
  Rua: yup
    .string()
    .required('Rua é obrigatória'),
  Bairro: yup
    .string()
    .required('Bairro é obrigatório'),
  Cidade: yup
    .string()
    .required('Cidade é obrigatório'),
  Estado: yup
    .string()
    .required('Estado é obrigatório'),
  Cuidador_Cpf: yup
    .string()
    .min(11, ({ min }) => `CPF deve conter no mínimo ${min} caracteres`)
    .required('CPF é obrigatório'),
})

export default {loginValidationSchema, cadastroValidationSchema,editarValidationSchema, cadastroIdosoValidationSchema,editarIdosoValidationSchema}