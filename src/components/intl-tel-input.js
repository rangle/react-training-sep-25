import React, { Component } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';

export class IntlTelInput extends React.Component {
  componentDidMount() {
    global.jQuery(this.element).intlTelInput();
    this.element.focus();
  }

  componentWillUnmount() {
    global.jQuery(this.element).intlTelInput('destroy');
  }

  render() {
    return (
      <input
        ref={element => {
          this.element = element;
        }}
        type="tel"
        id="phone"
      />
    );
  }
}
