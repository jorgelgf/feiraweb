import { FormLoginProps } from '@/components';

export const formFields: FormLoginProps[] = [

  {
    label: "Email",
    type: "email",
    placeholder: "Digite seu email",
    onChange: () => console.log('Email alterado'),
    require: true
  },
  {
    label: "Senha",
    type: "password",
    placeholder: "Digite sua senha",
    onChange: () => console.log('Senha alterada'),
    require: true
  },
];

export const textField = {
  title: 'Faça o login com seu e-mail',
  subtitle: ' Faça os seus registros de maneira simples e eficiente!'
}
