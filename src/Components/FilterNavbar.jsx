import React from 'react'

const FilterNavbar = () => {
  return (
    <div>
        <nav className="bg-gray-200 p-4">
            <ul className="flex space-x-4">
                <li><button className="px-3 py-1 bg-blue-500 text-white rounded">All Industries</button></li>
                <li><button className="px-3 py-1 bg-blue-500 text-white rounded">IT Services</button></li>
                <li><button className="px-3 py-1 bg-blue-500 text-white rounded">Finance</button></li>
                <li><button className="px-3 py-1 bg-blue-500 text-white rounded">Automotive</button></li>
                <li><button className="px-3 py-1 bg-blue-500 text-white rounded">Healthcare</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default FilterNavbar