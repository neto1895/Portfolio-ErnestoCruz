import React from 'react'
import { useForm } from 'react-hook-form'

const ContactMe = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


  return (
    <div className='container-contact'>
        <h3>Let's talk</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input type='text' {...register('name', {
                    required: true,
                    validate: (value) => value.length > 2,
                })} />
                {errors.name && <p>Name is required</p>}  
            </div>
            <div>
                <label>Email</label>
                <input type='email'  {...register('email', {
                    required: true,
                    validate: (value) => value.includes('@'),
                })} />
                {errors.email && <p>Email is required</p>}
            </div>
            <div>
                <label>Message</label>
                <textarea name='message' rows='5'  {...register('message', {
                    required: true,
                    validate: (value) => value.length > 10,
                })} />
                {errors.message && <p>Message is required</p>}
            </div>
            <button type='submit'>Send</button>
        </form>
        
    </div>
  )
}

export default ContactMe