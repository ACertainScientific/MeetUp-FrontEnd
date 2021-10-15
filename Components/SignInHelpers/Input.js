/* 
    This is a wrapper for React Native’s TextInput component. 
        - Extended functionality to show LABEL above the input field 
            and 
          (if provided) validation ERROR beneath it.
*/

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import THEME_COLOR from '../../Constants/Color'

const Wrapper = styled.View`
    margin-bottom: 15px;
`

const StyledInput = styled.TextInput`
    border-color: ${(props) => (props.isError ? THEME_COLOR.main : THEME_COLOR.subcolor)};
    border-width: 1;
    borderRadius: 10;
    height: 45;
    alignSelf: "center";
    width: 250px;
    padding: 10px;
`

const Label = styled.Text`
    color: ${THEME_COLOR.gray};
    font-size: 10px;
    letter-spacing: 2px;
`

const Error = styled.Text`
    color: ${THEME_COLOR.red};
`

export const Input = ({ label, error, ...textInputProps }) => {
    const isError = Boolean(error)
  
    return (
        // conditional rendering {Boolean(value) && <Something />} is secured by Boolean() function
        // to prevent crash caused by React when it tries to convert results of your expressions into 
        // a string, React element or array.
        <Wrapper>
        {Boolean(label) && <Label>{label}</Label>}
        <StyledInput isError={isError} {...textInputProps} />
        {isError && <Error>{error}</Error>}
        </Wrapper>
    )
  }
  
Input.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
}