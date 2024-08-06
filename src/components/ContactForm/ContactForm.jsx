import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

export default function ContactForm({addContact}) {

    const userSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Minimun 3 letters")
            .max(50, "Maximum 50 letters")
            .required("Required"),
        number: Yup.string()
            .min(9, "Please enter your phone number.")
            .max(13, "Too long!")
            .required("Required"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values, { resetForm }) => {
                addContact({ id: nanoid(), ...values });
                resetForm();
            }}
        >
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor="name">Name</label>
                    <Field className={css.input} type="text" name="name" />
                    <ErrorMessage
                        className={css.error}
                        name="name"
                        component="span"
                    />
                </div>
                
                <div className={css.formGroup}>
                    <label htmlFor="number">Number</label>
                    <Field className={css.input} type="tel" name="number" />
                    <ErrorMessage
                        className={css.error}
                        name="number"
                        component="span" />
                </div>

                <button type="submit" className={css.addBtn}>Add contact</button>
            </Form>
        </Formik>
    )    
}