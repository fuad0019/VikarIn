import { createContext, ReactNode } from 'react';

import styles from '../components/HeroSection.module.scss';


interface StyleContextProps {
    children: ReactNode
}
export const styleContext = createContext({});

export default function StyleContext ({children}: StyleContextProps){


    


    return (
        <styleContext.Provider value={styles}>
            {children}

        </styleContext.Provider>

    )
}
