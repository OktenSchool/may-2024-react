import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IFormProps} from "../models/IFormProps";
import {apiService} from "../services/api.service";


const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }

    } = useForm<IFormProps>({mode: 'all', resolver: joiResolver(postValidator)});

    const customHandler = async (dataFromForm: IFormProps) => {
        console.log(await apiService.post.savePost(dataFromForm));
    };
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type="text" placeholder={'title'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label><input type="text" placeholder={'body'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="number" placeholder={'userId'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>save</button>
        </form>

    );
};

export default FormComponent;
