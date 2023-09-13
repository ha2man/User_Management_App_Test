import React, { memo, useRef, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { FormContext } from '@/contexts/Form'

import styles from "./styles.module.scss";

type Props = {
  value?: string;
  setValue?: Function;
  options?: string[];
};

const SelectFieldComponent: React.FC<Props> = memo<Props>(
  ({ value, setValue, options }) => {
    const { mode } = useContext(FormContext);
    const inputElement = useRef<HTMLInputElement>(null);
    return (
      <div className={clsx("tw-relative tw-flex tw-mb-5", mode ? styles.dayMode : styles.nightMode)}>
        <select
            onFocus={() => {}}
            id={'selectField'}
            className={clsx(styles.selectFieldRoot)}
            value={value}
            onChange={(event) =>
                setValue ? setValue(event.target.value) : ""
            }
        >
            {
                options?.map((item, index) => (
                    <option key={'select'+index+item}>{item}</option>
                ))
            }
        </select>
        <div className={styles.selectSpinRoot} onClick={() => inputElement.current ? inputElement.current.focus() : ''}>
          <div></div>
        </div>
      </div>
    )
});

SelectFieldComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

SelectFieldComponent.displayName = "SelectFieldComponent";

export default SelectFieldComponent;
