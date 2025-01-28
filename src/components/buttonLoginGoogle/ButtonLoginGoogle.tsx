import { GoogleLogin } from '@react-oauth/google';
export const ButtonLoginGoogle = () => {

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )

}