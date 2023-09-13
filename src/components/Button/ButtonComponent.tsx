import React, { memo, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FormContext } from '@/contexts/Form'

import styles from './styles.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const ButtonComponent: React.FC<Props> = memo<Props>(
  ({ children, className, onClick }) => {
    const { mode } = useContext(FormContext);
    return (
      <div
        className={clsx(className, styles.buttonRoot, mode ? styles.dayMode : styles.nightMode)}
        onClick={() => onClick && onClick()}
      >
        <span>{children}</span>
      </div>
    )
});

ButtonComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onClick: PropTypes.func
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
