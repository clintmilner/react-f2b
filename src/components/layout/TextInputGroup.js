import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({ label, name, value, placeholder, type, error, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type}
                className={classnames('form-control form-control-sm', { 'is-invalid': error })}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value} />
            {
                (error)
                    ? <div className="invalid-feedback">{error}</div>
                    : ''
            }

        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
    type: 'text'
};

export default TextInputGroup;