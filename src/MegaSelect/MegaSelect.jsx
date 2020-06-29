import React, { Component } from 'react';
import styled from 'styled-components';
import Creatable from 'react-select/lib/Creatable';
import theme from '../theme';
import Text from '../Text';

const Select = styled(Creatable)`
  ${({ theme }) => theme.mixins.spacing('min-width', 15)}
`;

class MegaSelect extends Component {
  getStyles() {
    return {
      singleValue: ({ position, top, maxWidth, transform, ...other }) => other,
      placeholder: ({ position, top, maxWidth, transform, ...other }) => other,
      control: (base, { isDisabled, selectProps }) => ({
        ...base,
        minHeight: theme.spacing.unit*5,
        background: theme.palette.common.greyLight,
        opacity: isDisabled? 0.5 : 1,
        boxShadow: 'none',
        borderWidth: 2,
        borderColor: `${
          selectProps.error?
            theme.palette.common.redDark :
          selectProps.correct?
            theme.palette.common.greenDark :
          theme.palette.common.greyLight
        } !important`,
      }),
      valueContainer: (base) => ({
        ...base,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      })
    }
  }

  newOption(value) {
    const label = typeof value === 'object'? value.inputValue : value;
    return label? <span>{ label }</span> : null;
  }

  isValid(value) {
    const { onValidate } = this.props;
    return !onValidate || onValidate(value);
  }

  findByValue(value) {
    const { options=[] } = this.props;
    return options.find(option => option.value === value);
  }

  render() {
    const { disabled, value, defaultValue, onValidate, ...other } = this.props;
    const optionDefault = defaultValue && this.findByValue(defaultValue);
    const option = this.findByValue(value) || {};

    if (value) {
      return (
        <div>
          <Text type="label">{ option.label || value }</Text>
          <input type="hidden" name={other.name} value={value}/>
        </div>
      );
    }

    return (
      <Select
        isClearable
        isDisabled={disabled}
        styles={this.getStyles()}
        noOptionsMessage={this.newOption}
        formatCreateLabel={this.newOption}
        isValidNewOption={this.isValid.bind(this)}
        defaultValue={optionDefault}
        { ...other }
      />
    );
  }
}

export default MegaSelect;
