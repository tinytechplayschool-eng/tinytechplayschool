export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ChildCare", "EducationalOrganization"],
    "@id": "https://www.tinytechplayschool.in/#organization",
    name: "CSC Tiny Tech Pre School Guduvancheri",
    alternateName: "Tiny Tech Playschool",
    url: "https://www.tinytechplayschool.in",
    logo: "https://www.tinytechplayschool.in/tiny.png",
    image: "https://www.tinytechplayschool.in/tiny.png",
    description:
      "CSC Tiny Tech is the best preschool in Guduvancheri offering play school, nursery school, kindergarten, day care centre, and Montessori teacher training. IIT Delhi designed curriculum aligned with NEP 2020.",
    telephone: "+91-08124378478",
    email: "padmasanmugam@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "24, Rajaji Street, N.G.O Colony",
      addressLocality: "Guduvancheri",
      addressRegion: "Tamil Nadu",
      postalCode: "603202",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.8449,
      longitude: 80.0624,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
        description: "Day Care",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    areaServed: [
      {
        "@type": "City",
        name: "Guduvancheri",
      },
      {
        "@type": "City",
        name: "Chennai",
      },
      {
        "@type": "Place",
        name: "Vadakkupattu",
      },
    ],
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Padma Sanmugam",
      jobTitle: "Founder & Principal",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Preschool Programs",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Play Group",
          description: "For children aged 1.5 to 2.5 years",
        },
        {
          "@type": "OfferCatalog",
          name: "Nursery",
          description: "For children aged 2.5 to 3.5 years",
        },
        {
          "@type": "OfferCatalog",
          name: "Junior KG",
          description: "For children aged 3.5 to 4.5 years",
        },
        {
          "@type": "OfferCatalog",
          name: "Senior KG",
          description: "For children aged 4.5 to 5.5 years",
        },
        {
          "@type": "OfferCatalog",
          name: "Day Care",
          description:
            "Extended day care facility for children aged 1.5 to 6 years",
        },
        {
          "@type": "OfferCatalog",
          name: "Montessori Teacher Training",
          description:
            "Government approved Advanced Diploma in Montessori Teacher Training",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CSC Tiny Tech Pre School Guduvancheri",
    url: "https://www.tinytechplayschool.in",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.tinytechplayschool.in/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.tinytechplayschool.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.tinytechplayschool.in/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Programs",
        item: "https://www.tinytechplayschool.in/programs",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Admissions",
        item: "https://www.tinytechplayschool.in/admissions",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Facilities",
        item: "https://www.tinytechplayschool.in/facilities",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Gallery",
        item: "https://www.tinytechplayschool.in/gallery",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Contact",
        item: "https://www.tinytechplayschool.in/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
