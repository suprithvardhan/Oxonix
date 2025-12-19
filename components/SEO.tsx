import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonicalUrl?: string; // e.g., 'https://oxonix.in/about'
    image?: string; // URL to the OG image
    type?: 'website' | 'article';
}

const DOMAIN = 'https://oxonix.in';

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = [],
    canonicalUrl,
    image = '/xonix_logo.png', // Default OG Image
    type = 'website'
}) => {
    const metaTitle = `${title} | Oxonix India`;
    const url = canonicalUrl ? canonicalUrl : DOMAIN;

    // Default keywords combined with page-specific ones
    const defaultKeywords = [
        "EV conversion kit India",
        "vehicle retrofitting India",
        "retro fitting india",
        "electric vehicle conversion company India",
        "EV retrofit technology India",
        "EV certification India",
        "electric car conversion cost India",
        "Oxonix",
        "Electric Scooter Conversion",
        "Petrol to Electric",
        "two wheeler retrofitting",
        "bike conversion kit price",
        "scooter to electric converter",
        "RTO approved EV kits",
        "retrofitting startup India"
    ];

    const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Oxonix Private Limited",
        "url": DOMAIN,
        "logo": `${DOMAIN}/xonix_logo.png`,
        "sameAs": [
            "https://youtube.com/@oxonixindia",
            "https://instagram.com/oxonixindia",
            "https://x.com/oxonixindia"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-738-294-5403",
            "contactType": "customer service",
            "areaServed": "IN"
        }
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${DOMAIN}${image}`} />
            <meta property="og:site_name" content="Oxonix India" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@oxonixindia" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${DOMAIN}${image}`} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
