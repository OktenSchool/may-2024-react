import React from 'react';
import {useForm} from "react-hook-form";

interface FormProps {
    username: string;
    password: string;
    age: number
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }

    } = useForm<FormProps>({mode: 'all'});

    const customHandler = (dataFromForm: FormProps) => {
        console.log(dataFromForm);
    };
    return (


        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>

                    <input type="text" placeholder={'username'} {...register('username', {
                        required: {value: true, message: "username is required"},
                    })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
            </div>
            <div>
                <label><input type="text" placeholder={'password'} {...register('password', {
                    minLength: {value: 3, message: 'too short'},
                    maxLength: {value: 6, message: 'too long'},
                })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="number" placeholder={'age'} {...register('age', {
                        min: {value: 0, message: 'too young'},
                        max: {value: 121, message: 'too old'},
                    })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>save</button>
        </form>


    );
};

export default FormComponent;
