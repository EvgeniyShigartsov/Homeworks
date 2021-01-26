import * as Yup from 'yup'
import React from 'react'
import { Formik, Field, Form } from 'formik'

const FormShema = Yup.object().shape({
    name: Yup.string().required('Поле необходио заполнить'),
    surename: Yup.string().required('Поле необходио заполнить'),
    age: Yup.number().min(1, 'Должен состоять минимум из двух цифр').required('Поле должно быть цифрой'),
})

export const DeliveryForm = () => {
    return (
        <div className="container">
            <h1>DeliveryForm</h1>
            <Formik
                initialValues={{
                    name: '',
                    surename: '',
                    age: '',
                }}
                validationSchema={FormShema}
                onSubmit={(values) =>
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        console.log(values)
                    })
                }
                render={({ errors, touched }) => (
                    <Form className="form-container">
                        <label htmlFor="name">Name</label>
                        <Field name="name" placeholder="" type="text" />
                        {errors.name && touched.name && <div className="field-error">{errors.name}</div>}
                        <label htmlFor="surename">Surename</label>
                        <Field name="surename" placeholder="" type="text" />
                        {errors.surename && touched.name && <div className="field-error">{errors.surename}</div>}
                        <label htmlFor="age">Age</label>
                        <Field name="age" placeholder="" type="text" />
                        {errors.surename && touched.name && <div className="field-error">{errors.age}</div>}
                        <button type="submit">submit</button>
                    </Form>
                )}
            />
        </div>
    )
}

export default DeliveryForm
