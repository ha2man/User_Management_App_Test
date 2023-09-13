import React, { useCallback, useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useToasts } from 'react-toast-notifications'

import ButtonComponent from '@/components/Button/ButtonComponent'
import CheckBoxComponent from '@/components/CheckBox/CheckBoxComponent'
import ToggleBoxComponent from '@/components/ToggleBox/ToggleBoxComponent'
import TextFieldComponent from '@/components/TextField/TextFieldComponent'
import NumberFieldComponent from '@/components/NumberField/NumberFieldComponent'
import SelectFieldComponent from '@/components/SelectField/SelectFieldComponent'

import { FormContext } from '@/contexts/Form'
import data from '@/constants/index.json'

import styles from './styles.module.scss'


const HomeView = () => {
    const { addToast } = useToasts();
    const {
        name, age, isSubscribed, isEmployed, mode,
        setName, setAge, setIsSubscribed, setIsEmployed, setMode
    } = useContext(FormContext);
    const [ selIndex, setSelIndex ] = useState<number>(-1);

    const [ userData, setUserData ] = useState(data);

    const clearForm = useCallback(async () => {
        setName(''); setAge(18); setIsSubscribed('Subscribed'); setIsEmployed(false);
    }, [ name, age, isSubscribed, isEmployed ])

    const insertRow = useCallback(async () => {
        if (name?.length === 0) {
            addToast("Name Field is Required!", { appearance: "warning" });
            return;
        }
        const new_user = { name, age, isSubscribed, isEmployed };
        setUserData( [ ...userData,  new_user ] );
        addToast("New row is inserted successfully", { appearance: "success" });
        clearForm();
    }, [ name, age, isSubscribed, isEmployed ])

    const deleteRow = useCallback(async () => {
        if (selIndex === -1) {
            addToast("No Row is Selected!", { appearance: "warning" });
            return;
        }
        setUserData( [...userData.slice(0, selIndex), ...userData.slice(selIndex+1, )])
        addToast("The selected row is deleted successfully", { appearance: "success" });
        setSelIndex(-1);
    }, [selIndex])

    return (
        <div className={clsx(styles.homeRoot, mode ? styles.dayMode : styles.nightMode)}>
            <div className={clsx(styles.homeContainer, mode ? styles.dayMode : styles.nightMode)}>
                <div className={clsx(styles.formRoot, mode ? styles.dayMode : styles.nightMode)}>
                    <TextFieldComponent
                        value={name}
                        setValue={setName}
                        placeholder='Name'
                    />
                    <NumberFieldComponent
                        value={age}
                        setValue={setAge}
                        placeholder='Age'
                        max={100}
                        min={18}
                    />
                    <SelectFieldComponent
                        value={isSubscribed}
                        setValue={setIsSubscribed}
                        options={['Subscribed', 'Not Subscribed', 'Other']}
                    />
                    <CheckBoxComponent value='Employed' name='Employed' isChecked={isEmployed} setCheck={setIsEmployed} />
                    <ButtonComponent children="Insert" onClick={insertRow} />
                    <div className={styles.dividerRoot}></div>
                    <ToggleBoxComponent value='Mode' name='Mode' isChecked={mode} setCheck={setMode} />
                    <ButtonComponent children="Delete" onClick={deleteRow} />
                </div>
                <div className={clsx(styles.tableRoot, mode ? styles.dayMode : styles.nightMode)}>
                    <table className={styles.tableContainer}>
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Subscription</th>
                                <th>Employment</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            userData.map((item, index) => {
                                return (
                                    <tr
                                        key={'userdata_'+index}
                                        className={clsx(styles.tableRow, selIndex === index ? styles.selectedRow : '')}
                                        onClick={() => setSelIndex(index)}
                                    >
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isSubscribed}</td>
                                        <td>{item.isEmployed ? 'Employed' : 'Unemployed'}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HomeView;