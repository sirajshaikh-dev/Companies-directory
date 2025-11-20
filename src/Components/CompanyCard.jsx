
export default function CompanyCard({ company }) {

  const logoUrl = `https://img.logo.dev/name/${encodeURIComponent(
    company.name
  )}?token=${import.meta.env.VITE_LOGO_DEV_KEY}&retina=true`;


  return (
    <article className="p-5 rounded-2xl card-outline bg-card transition hover:shadow-soft">
      <div className="flex items-start gap-4">

        <img
          src={logoUrl}
          alt={company.name}
          className="w-14 h-14 rounded-full object-cover bg-white"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold">{company.name}</h3>
              <div className="text-sm text-muted">{company.industry}</div>
            </div>
          </div>

          <p className="mt-3 text-sm text-muted line-clamp-3">
            {company.description} <span className="underline">Show more...</span>
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span>📍</span>
            <span className="font-medium">{company.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
