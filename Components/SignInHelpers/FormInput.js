import PropTypes from 'prop-types'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Input } from './Input'

export const FormInput = (props) => {
    /* Equips Input component with extra logics and features 
            - decide internally about error, and value props 
              of Input so we cannot pass such props to it */
    
    /* It is required for every field in the form to have a unique name. 
        Therefore need to pass name prop to every form field. 
        It is an identifier of a field. */
    const { name, rules, defaultValue = '', ...inputProps } = props

    /* Establish a connection with form headquarters */
    const formContext = useFormContext() // returns the object that we’ve 
                                         // passed through <FormProvider />
    const { control } = formContext

    // create our field instance with useController hook
    // The connection between the field and form is established by 
    // providing the control object to the controller
    // control is a central point of the form, “the form’s brain
    const { field } = useController({ name, rules, defaultValue })
    // Input now is controlled by field object

    return (
        <Input
            {...inputProps}
            // check whether there is an error message for our field errors[name]. 
            // If there are no errors then errors[name] is undefined
            error={control._formState?.errors.hasOwnProperty(name)? control._formState?.errors[name].message : ''}
            onChangeText={field.onChange} // get string instead of event from input field
            onBlur={field.onBlur}
            value={field.value}
        />
      )
}
