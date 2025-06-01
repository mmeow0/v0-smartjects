export function CompanyLogos() {
  const companies = [
    { name: 'Amway', logo: '/Amway.png' },
    { name: 'Kimberly-Clark', logo: '/Kimberly.png' },
    { name: 'Saint-Gobain', logo: '/sgobain.png' },
    { name: 'STADA', logo: '/stada.png' },
  ];

  return (
    <div className="py-8 border-y">
      <p className="text-center text-sm text-muted-foreground mb-6">
        Trusted by innovative companies and research institutions
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {companies.map((company, i) => (
          <div
            key={i}
            className=" w-40 h-16 flex items-center justify-center bg-white rounded"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-16 max-w-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
