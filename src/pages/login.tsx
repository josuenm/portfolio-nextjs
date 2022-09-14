import * as yup from 'yup';
import Head from 'next/head'
import userApi from 'src/services/user';
import nookies from 'nookies';
import { Container, Form, Title } from 'src/styles/pages/Login'
import { Set } from 'src/components/Form/Set';
import { Input } from 'src/components/Form/Input';
import { Label } from 'src/components/Form/Label';
import { Submit } from 'src/components/Form/Submit';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorText } from 'src/components/Form/ErrorText';
import { useState } from 'react';
import { useRouter } from 'next/router';


type FormData = {
    email: string;
    password: string;
}



const schema = yup.object({
    email: yup.string().email("Digite um email válido").required("O e-mail é obrigatório"),
    password: yup.string().required("A senha é obrigatória")
}).required();


const Login = () => {

    const router = useRouter()

    const [generalError, setGeneralError] = useState({
        error: false,
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {

        setIsLoading(true)

        const res = await userApi.login(data) as { 
            status: number,
            data: { token: string } 
        };

        switch(res.status) {

            case 200:
                nookies.set(null, 'jnm.token', res.data.token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: '/',
                })
                router.push("/dashboard")
                break;
            
            case 401:
                setGeneralError({
                    error: true,
                    message: "Email ou senha inválidos"
                })
                setIsLoading(false)
                break;
            
            case 500:
                setGeneralError({
                    error: true,
                    message: "Erro no servidor, tente novamente"
                })
                setIsLoading(false)
                break;
                
            default:
                setIsLoading(false)
                break;
        }

    }


    return (
        <>
            <Head>
                <title>Login | Portfolio</title>
            </Head>

            <Container>
                <Form onSubmit={handleSubmit(onSubmit as () => void)}>
                    <Title>Login</Title>

                    <Set>
                        <Label htmlFor='email' title='E-mail' />
                        <Input 
                            type="email" 
                            id="email" 
                            register={{...register("email")}} />

                        {!!errors.email && <ErrorText title={errors.email.message} />}
                    </Set>

                    <Set>
                        <Label htmlFor='password' title='Senha' />
                        <Input 
                            type="password" 
                            id="password"
                            register={{...register("password")}} />

                        {!!errors.password && <ErrorText title={errors.password.message} />}
                        {generalError.error && <ErrorText title={generalError.message} />}
                    </Set>

                    <Submit title="Entrar" isDisabled={isLoading} />
                </Form>
            </Container>
        </>
    )
}


export default Login;
