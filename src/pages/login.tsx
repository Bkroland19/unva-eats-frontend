import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormError } from '../components/form-error';
import { PotatoMutation, PotatoMutationVariables } from './mytypes.d.ts/PotatoMutation';




const LOGIN_MUTATION = gql`

  mutation PotatoMutation($email:String! , $password:String!) {
     login(input:{
        email:$email,
        password:$password
     }){
        ok
        token
        error
     }
  }
    
`


interface ILoginForm{
    email:string,
    password:string
}



const Login = () => {


    const [loginMutation , { data}]  = useMutation<PotatoMutation,PotatoMutationVariables>(LOGIN_MUTATION);
    const {register , getValues , formState:{errors} ,handleSubmit  } = useForm<ILoginForm>();
    const onSubmit = () =>{
        const {email , password } = getValues();

        loginMutation({
            variables:{
                email,
                password
            }
        })
    }

    
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
        <div className='bg-white w-full max-w-lg text-center pt-7 pb-7 rounded-lg '>
            <h1 className=' text-3xl text-gray-800 cursor-pointer'>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-5 px-5'>
                <input required type= 'email' {...register("email", { required:"Email is required"})} placeholder='Email' className='input mb-3'  />
                {errors.email?.message && <FormError errorMessage={errors.email?.message}/>}                <input required type = 'password' {...register("password" , {required:"Password is required"})} placeholder='Password' className = 'input' />
                {errors.password?.message && <FormError errorMessage={errors.password?.message}/>}

                <button className='btn mt-3 '>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login