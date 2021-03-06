import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../component/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};


function TodoForm(props) {

    const schema = yup.object().shape({
        title: yup.string().required('pls enter title'),
      });
      

    const form = useForm({
        defaultValues : {
            title : '',
        },
        resolver : yupResolver(schema),
    })
    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values);
        }
        form.reset();

    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField form={form} name="title" label="Todo" />
        </form>
    );
}

export default TodoForm;