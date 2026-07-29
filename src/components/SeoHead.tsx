import React, { useEffect } from 'react';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';

export const SeoHead: React.FC = () => {
  useEffect(() => {
    // 1. Page Title & Basic Meta
    document.title = `${CLINIC_INFO.name} | Cosmetic, Emergency & Family Dentist in Atlanta, GA`;

    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const siteUrl = 'https://georgiadentalcare.com';
    const ogImage = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630';
    const pageDescription = 'Georgia Dental Care offers top-rated cosmetic dentistry, dental implants, teeth whitening, porcelain veneers & 24/7 same-day emergency dental care in Atlanta, GA.';

    // Basic Meta
    setMetaTag('name', 'description', pageDescription);
    setMetaTag('name', 'keywords', 'Atlanta Dentist, Georgia Dental Care, Cosmetic Dentistry Atlanta, Dental Implants GA, Emergency Dentist Atlanta, Teeth Whitening Atlanta, Porcelain Veneers, Family Dentist 30326, Buckhead Dentist');
    setMetaTag('name', 'author', CLINIC_INFO.name);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setLinkTag('canonical', `${siteUrl}/`);

    // Geo Meta Tags
    setMetaTag('name', 'geo.region', 'US-GA');
    setMetaTag('name', 'geo.placename', 'Atlanta');
    setMetaTag('name', 'geo.position', '33.8471;-84.3662');
    setMetaTag('name', 'ICBM', '33.8471, -84.3662');

    // Open Graph Metadata
    setMetaTag('property', 'og:site_name', CLINIC_INFO.name);
    setMetaTag('property', 'og:type', 'business.business');
    setMetaTag('property', 'og:title', `${CLINIC_INFO.name} | Premier Cosmetic & Family Dentist Atlanta`);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:url', `${siteUrl}/`);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', 'Georgia Dental Care Modern Dental Studio in Atlanta GA');
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'business:contact_data:street_address', '3400 Peachtree Rd NE, Suite 800');
    setMetaTag('property', 'business:contact_data:locality', 'Atlanta');
    setMetaTag('property', 'business:contact_data:region', 'GA');
    setMetaTag('property', 'business:contact_data:postal_code', '30326');
    setMetaTag('property', 'business:contact_data:country_name', 'United States');

    // Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@GeorgiaDentalGA');
    setMetaTag('name', 'twitter:creator', '@GeorgiaDentalGA');
    setMetaTag('name', 'twitter:title', `${CLINIC_INFO.name} | Top Cosmetic & Implant Dentist Atlanta`);
    setMetaTag('name', 'twitter:description', 'Gentle, pain-free dental care in Atlanta, GA. Cosmetic veneers, 3D implants, Zoom whitening & same-day emergency dentistry.');
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', 'Georgia Dental Care Atlanta Smile Team');

    // 2. Comprehensive JSON-LD Schema.org Structured Data
    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
          "@id": `${siteUrl}/#organization`,
          "name": CLINIC_INFO.name,
          "alternateName": "Georgia Dental Care & Cosmetics",
          "url": siteUrl,
          "logo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=300",
          "image": [
            ogImage,
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
          ],
          "description": pageDescription,
          "telephone": CLINIC_INFO.phone,
          "email": CLINIC_INFO.email,
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, CareCredit, Dental Insurance, HSA, FSA",
          "currenciesAccepted": "USD",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3400 Peachtree Rd NE, Suite 800",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",
            "postalCode": "30326",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.8471,
            "longitude": -84.3662
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday"],
              "opens": "09:00",
              "closes": "14:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": CLINIC_INFO.rating.toString(),
            "reviewCount": CLINIC_INFO.reviewCount.toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "medicalSpecialty": [
            "CosmeticDentistry",
            "Implantology",
            "EmergencyDentistry",
            "Orthodontics",
            "PediatricDentistry",
            "Periodontics"
          ],
          "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "City", "name": "Buckhead" },
            { "@type": "City", "name": "Alpharetta" },
            { "@type": "City", "name": "Sandy Springs" },
            { "@type": "City", "name": "Roswell" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dental Services & Treatments",
            "itemListElement": SERVICES.map((service, idx) => ({
              "@type": "OfferCatalog",
              "name": service.title,
              "description": service.shortDesc,
              "position": idx + 1
            }))
          },
          "employee": DOCTORS.map((doc) => ({
            "@type": "Person",
            "name": doc.name,
            "jobTitle": doc.title,
            "description": doc.bio,
            "image": doc.image,
            "alumniOf": doc.education
          })),
          "emergencyService": {
            "@type": "EmergencyService",
            "name": "24/7 Emergency Dental Care Line",
            "telephone": CLINIC_INFO.emergencyPhone
          }
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": siteUrl,
          "name": CLINIC_INFO.name,
          "description": CLINIC_INFO.tagline,
          "publisher": {
            "@id": `${siteUrl}/#organization`
          },
          "inLanguage": "en-US"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-local-business';
    script.text = JSON.stringify(schemaGraph, null, 2);

    const existing = document.getElementById('schema-local-business');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-local-business');
      if (el) el.remove();
    };
  }, []);

  return null;
};

