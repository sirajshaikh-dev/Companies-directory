import React, { createContext, useContext } from 'react';
import useCompanies from '../hooks/useCompanies';


const CompaniesContext = createContext(null);


export function CompaniesProvider({ children }) {
    const data = useCompanies();
    return (
        <CompaniesContext.Provider value={data}>
            {children}
        </CompaniesContext.Provider>
    );
}


export function useCompaniesContext() {
    const ctx = useContext(CompaniesContext);
    if (!ctx) throw new Error('useCompaniesContext must be used within CompaniesProvider');
    return ctx;
}