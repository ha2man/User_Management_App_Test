import React, {
    createContext,
    ReactNode,
    useState
} from 'react';

export interface IFormContext {
    name?: string,  setName: Function,
    age?: number,   setAge: Function,
    isSubscribed?: string,  setIsSubscribed: Function,
    isEmployed: boolean,    setIsEmployed: Function,

    mode: boolean,  setMode: Function,
}

export const FormContext = createContext<IFormContext>({
    name: '',    setName: () => {},
    age: 0,     setAge: () => {},
    isSubscribed: 'Subscribed',    setIsSubscribed: () => {},
    isEmployed: false,          setIsEmployed: () => {},
    mode: false,    setMode: () => {}
})

type FormProviderPropType = {
    children?: ReactNode;
};

export const FormProvider = (props: FormProviderPropType) => {
    const [ name, setName ] = useState<string>('');
    const [ age, setAge ] = useState<number>(18);
    const [ isSubscribed, setIsSubscribed ] = useState<string>('Subscribed');
    const [ isEmployed, setIsEmployed ] = useState<boolean>(false);
    const [ mode, setMode ] = useState<boolean>(false);

    return (
        <FormContext.Provider value={{
            name, age, isSubscribed, isEmployed, mode,
            setName, setAge, setIsSubscribed, setIsEmployed, setMode 
        }}>
            {props.children}
        </FormContext.Provider>
    )
}