import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TextArea.component.style';

const TextArea = (props) => {
  const [text, setText] = useState('');

  return (
    <TextInput
      {...props}
      style={[styles.textArea, props.style]}
      multiline={true}
      onChangeText={(text) => setText(text)}
      value={text}
    />
  )
}

export default TextArea;