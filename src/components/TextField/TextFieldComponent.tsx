import React, { memo, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { FormContext } from '@/contexts/Form'

import styles from "./styles.module.scss";

type Props = {
  value?: string;
  setValue?: Function;
  placeholder?: string;
  pattern?: string;
  validator?: (_: string) => boolean;
};

const TextFieldComponent: React.FC<Props> = memo<Props>(
  ({ value, setValue, placeholder, pattern, validator = (_: string) => true }) => {
    const { mode } = useContext(FormContext);
    return (
      <div className="tw-relative">
        <input
          className={clsx(styles.textFieldRoot, mode ? styles.dayMode : styles.nightMode)}
          value={value}
          onChange={ (event) =>setValue ? setValue(event.target.value) : "" }
          placeholder={placeholder}
          pattern={pattern}
        />
      </div>
    )
  }
);

TextFieldComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  validator: PropTypes.func
};

TextFieldComponent.displayName = "TextFieldComponent";

export default TextFieldComponent;
