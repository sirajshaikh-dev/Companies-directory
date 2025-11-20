import React from 'react'
import { useCompaniesContext } from '../Context/CompaniesContext';

const Controls = () => {
    const {
        query, setQuery,
        locations, industries,
        locationFilter, setLocationFilter,
        industryFilter, setIndustryFilter,
        sort, setSort,
        filteredCount
    } = useCompaniesContext();
    return (
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1">
                <label className="relative block">
                    <span className="absolute inset-y-0 left-3 flex items-center">🔍</span>
                    <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent border border-white/16 placeholder:text-muted" />
                </label>
            </div>


            <div className="flex gap-3">
                <button onClick={() => setSort({ key: 'name', dir: sort.dir === 'asc' ? 'desc' : 'asc' })} className="px-4 py-2 rounded-md card-outline">Name {sort.dir === 'asc' ? '↑' : '↓'}</button>
                <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="px-4 py-2 rounded-md card-outline bg-transparent">
                    <option value="">Location</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
                <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)} className="px-4 py-2 rounded-md card-outline bg-transparent">
                    <option value="">Industry</option>
                    {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
            </div>


            <div className="text-sm text-muted ml-auto mt-2 sm:mt-0">{filteredCount} results</div>
        </div>
    )
}

export default Controls