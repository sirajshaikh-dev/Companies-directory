import React, { useRef, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import { useCompaniesContext } from '../Context/CompaniesContext';

const CompanyGrid = () => {
    const { visible, loading, error, loadMore, canLoadMore } = useCompaniesContext();
    const loaderRef = useRef(null);


    useEffect(() => {
        if (!loaderRef.current) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && canLoadMore) {
                    loadMore();
                }
            });
        }, { root: null, rootMargin: '200px', threshold: 0.1 });


        obs.observe(loaderRef.current);
        return () => obs.disconnect();
    }, [loadMore, canLoadMore]);


    if (loading) return <div className="py-16 text-center">Loading companies...</div>;
    if (error) return <div className="py-16 text-center text-red-400">Error: {error}</div>;
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map(c => <CompanyCard key={c.id} company={c} />)}
            </div>


            {/* <div className="flex justify-center mt-8">
                <button onClick={loadMore} disabled={!canLoadMore} className="px-6 py-2 rounded-md card-outline">Load More</button>
            </div> */}


            <div ref={loaderRef} style={{ height: 1 }} />
        </section>
    )
}

export default CompanyGrid