import { useEffect, useMemo, useState, useCallback } from 'react';

const BATCH_SIZE = 12;

export default function useCompanies() {
    const [all, setAll] = useState([]);
    const [query, setQuery] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [industryFilter, setIndustryFilter] = useState('');
    const [sort, setSort] = useState({ key: 'name', dir: 'asc' });
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch('/data/companies.json')
            .then(r => {
                if (!r.ok) throw new Error('Failed to load companies data');
                return r.json();
            })
            .then(data => {
                setAll(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);


    const filtered = useMemo(() => {
        let list = all;
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter(c => (c.name + ' ' + c.description).toLowerCase().includes(q));
        }
        if (locationFilter) list = list.filter(c => c.location === locationFilter);
        if (industryFilter) list = list.filter(c => c.industry === industryFilter);


        if (sort) {
            list = [...list].sort((a, b) => {
                const val = a[sort.key].localeCompare(b[sort.key]);
                return sort.dir === 'asc' ? val : -val;
            });
        }


        return list;
    }, [all, query, locationFilter, industryFilter, sort]);


    const totalPages = Math.ceil(filtered.length / BATCH_SIZE);
    const visible = useMemo(() => {
        const end = page * BATCH_SIZE;
        return filtered.slice(0, end);
    }, [filtered, page]);


    const resetPage = useCallback(() => setPage(1), []);
    useEffect(() => { resetPage(); }, [query, locationFilter, industryFilter, sort, resetPage]);


    const loadMore = useCallback(() => {
        setPage(p => Math.min(totalPages, p + 1));
    }, [totalPages]);


    const canLoadMore = page < totalPages;


    const locations = useMemo(() => Array.from(new Set(all.map(c => c.location))).filter(Boolean), [all]);
    const industries = useMemo(() => Array.from(new Set(all.map(c => c.industry))).filter(Boolean), [all]);


    return {
        loading, error,
        allCount: all.length,
        filteredCount: filtered.length,
        visible,
        query, setQuery,
        locationFilter, setLocationFilter,
        industryFilter, setIndustryFilter,
        sort, setSort,
        loadMore, canLoadMore,
        locations, industries
    };
}