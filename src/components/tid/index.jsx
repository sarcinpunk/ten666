
import React, { useState, useEffect } from 'react';
import {Modal} from '../modal';
import {useForm} from 'react-hook-form';
import { register } from 'react-scroll/modules/mixins/scroller';

const But_wra_sty = {
    position: 'relative',
    zIndex: 1
}



export function Tid () {
    
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 3000);
    }, []);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (

    
   

    

    
        <div style={But_wra_sty}>

            
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('firstName')}/>
                    <input {...register('lastName',{required: true})}/>
                    {errors.lastName && <p>last name is required</p>}
                    <input {...register('age', { pattern: /\d+/ })} />
                    {errors.age && <p>please enter nuber for age</p>}
                    <input type="submit"/>
                </form>

            </Modal>


        </div>);

    
       
       
} 












  