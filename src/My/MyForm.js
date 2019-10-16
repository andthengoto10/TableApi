import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)}>
          Remove Member
        </button>
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.id`}
          type="number"
          component={renderField}
          label="ID"
        />
        <Field
          name={`${member}.mNummer`}
          type="number"
          component={renderField}
          label="MatrikelNummer"
        />
        <Field
          name={`${member}.name`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${member}.email`}
          type="e-mail"
          component={renderField}
          label="E-mail"
        />
        <Field
          name={`${member}.city`}
          type="text"
          component={renderField}
          label="Stadt"
        />
      </li>
    ))}
  </ul>
);

const MyForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MyForm"
})(MyForm);
