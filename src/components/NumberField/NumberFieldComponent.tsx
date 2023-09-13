import React, { memo, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { FormContext } from '@/contexts/Form'

import styles from "./styles.module.scss";

type Props = {
  value?: number;
  setValue?: Function;
  placeholder?: string;
  max?: number;
  min?: number;
  pattern?: string;
  validator?: (_: string) => boolean;
};

const NumberFieldComponent: React.FC<Props> = memo<Props>(
  ({ value, setValue, placeholder, min = 0, max = 0xffffff, pattern, validator = (_: string) => true }) => {
    const { mode } = useContext(FormContext);
    return (
      <div className={clsx("tw-relative tw-flex tw-mb-3", mode ? styles.dayMode : styles.nightMode)}>
        <input
          className={clsx(styles.numberFieldRoot)}
          value={value}
          onChange={ (event) =>setValue ? setValue((Number(event.target.value) > max ? max : Number(event.target.value))) : "" }
          placeholder={placeholder}
          type="number"
          max={max}
          min={min}
          pattern={pattern}
        />
        <div className={styles.numberSpinRoot}>
          <div onClick={ () => setValue ? setValue(Number(value) - 1 < min ? min : Number(value) - 1) : ''} ></div>
          <div onClick={ () => setValue ? setValue(Number(value) + 1 > max ? max : Number(value) + 1) : ''} ></div>
        </div>
      </div>
    )
  }
);

NumberFieldComponent.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  pattern: PropTypes.string,
  validator: PropTypes.func
};

NumberFieldComponent.displayName = "NumberFieldComponent";

export default NumberFieldComponent;
