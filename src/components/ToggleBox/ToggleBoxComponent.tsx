import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FormContext } from '@/contexts/Form'

import styles from './styles.module.scss';

type Props = {
    value: string,
    isChecked?: boolean,
    name: string,
    isDisabled?: boolean,
    setCheck?: Function,
}
const ToggleBoxComponent:React.FC<Props> = memo<Props>(
    ({ value, name, setCheck, isChecked, isDisabled }) => {
        const { mode } = useContext(FormContext);
        return (
            <div className={clsx(styles.toggleboxRoot, mode ? styles.dayMode : styles.nightMode, isDisabled ? styles.disabled : '')}>
                <input onChange={() => setCheck ? setCheck(!isChecked) : ''} type="checkbox" id={name.toLowerCase()} name={name.toLowerCase()} value={value} checked={isChecked} disabled={isDisabled} />
                <span className={styles.toggleMark} onClick={() => setCheck ? setCheck(!isChecked) : ''}></span>
                <label>{value}</label>
            </div>
        )
    }
)

ToggleBoxComponent.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    setCheck: PropTypes.func,
}

ToggleBoxComponent.displayName = 'ToggleBoxComponent'

export default ToggleBoxComponent;