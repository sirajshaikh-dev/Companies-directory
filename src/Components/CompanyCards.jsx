import React from 'react'
import { CompanyData } from '../CompanyData'

const CompanyCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {CompanyData.map((company) => (
            <div key={company.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
                <img src={company.logo} alt={company.name} />
                <h2>{company.name}</h2>
                <p>{company.industry}</p>
                <p>{company.location}</p>
            </div>
        ))}
    </div>
  )
}

export default CompanyCards