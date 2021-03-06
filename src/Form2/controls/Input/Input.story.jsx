import React from 'react';
import { Form, Field, FastField } from 'formik';
import UsdIcon from 'react-icons2/mdi/currency-usd';
import CurrencyFormat from 'react-currency-format';
import Story from '../../../Story';
import createForm from '../../createForm';
import Input from './Input';
import FormDebug from '../../FormDebug';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.input} />
      <Field {...props.controls.input2} />
      <Field {...props.controls.input3} />
      <Field {...props.controls.input4} />
      <Field {...props.controls.input5} />
      <Field {...props.controls.input6} />
      <FastField {...props.controls.input2} title="FastField/input2" />
      <FormDebug {...props} />
    </Form>
  );
};

const InputForm = createForm({
  view: InputFormView,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
    input2: {
      title: 'input2',
      component: Input,
      placeholder: 'input2 placeholder',
      initialValue: 'Some value in input2',
    },
    input3: {
      title: 'input with regex',
      component: Input,
      help: 'Only digits',
      regex: /\d*\.?\d*/,
    },
    input4: {
      title: 'input with regex',
      component: Input,
      help: 'Only english',
      regex: /[a-zA-Z ]*/,
    },
    input5: {
      title: 'input with $ icon',
      component: Input,
      leftIcon: <UsdIcon size={28} />,
      placeholder: 'input placeholder',
    },
    input6: {
      title: 'Only currency',
      component: Input,
      placeholder: 'input placeholder',
      numeric: true,
      thousandSeparator: true,
      decimalSeparator: '.',
      leftIcon: <UsdIcon size={28} />,
      componentClass: CurrencyFormat,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Input', () => {
      return (
        <Story>
          <InputForm />
        </Story>
      );
    });

