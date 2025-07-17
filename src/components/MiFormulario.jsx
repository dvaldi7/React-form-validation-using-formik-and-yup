import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

export const MiFormulario = () => {

    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(2, "El nombre es demasiado corto")
            .max(40, "El nombre es demasiado largo")
            .required("Este campo es obligatorio"),
        email: Yup.string()
            .email("email invalido")
            .required("El campo es obligatorio")
    });

    const formik = useFormik({
        initialValues: {
            nombre: "",
            email: "",
        },
        validationSchema,

        onSubmit: values => {
            console.log(values)
        }
    });


    return (
        <div className='form-div'>
            <h1 className='form-formik'>Mi formulario con Formik</h1>

            <form className='form-formik' onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' name='nombre' id='nombre'
                        onChange={formik.handleChange} value={formik.values.nombre} />

                    <div className='error'>
                        {formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre : ""}
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email'
                        onChange={formik.handleChange} value={formik.values.email} />

                    <div className='error'>
                        {formik.errors.email && formik.touched.email ? formik.errors.email : ""}
                    </div>
                </div>

                <input className='form-btn' type='submit' value="Enviar" />
            </form>
        </div>
    )
}
