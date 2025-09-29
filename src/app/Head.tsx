export default function Head() {
  return (
    <>
      {/* Title */}
      <title>บริษัทรับติดตั้งพื้นอีพ็อกซี่ | ซีวิล โปรดักส์</title>

      {/* Charset + Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* SEO Meta Tags */}
      <meta name="description" content="บริการติดตั้งพื้นอีพ็อกซี่ พื้นพียู ซ่อมแซมพื้นและผนัง โดยทีมช่างมืออาชีพ" />
      <meta name="keywords" content="พื้นอีพ็อกซี่, พื้นพียู, ซ่อมแซมพื้น, ซ่อมผนัง, รับเหมาก่อสร้าง" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <link rel="canonical" href="https://www.civilproducts.co.th" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:title" content="ซีวิล โปรดักส์ | รับติดตั้งพื้นและซ่อมแซม" />
      <meta property="og:description" content="รับงานติดตั้งและซ่อมแซมพื้น-ผนัง ทั้งอาคารบ้านและโรงงานอุตสาหกรรม" />
      <meta property="og:url" content="https://www.civilproducts.co.th" />
      <meta property="og:image" content="https://www.civilproducts.co.th/images/civil-logo.jpg" />
      <meta property="og:site_name" content="ซีวิล โปรดักส์" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ซีวิล โปรดักส์ | รับติดตั้งพื้นและซ่อมแซม" />
      <meta name="twitter:description" content="รับงานติดตั้งพื้นอีพ็อกซี่ พื้นพียู และงานซ่อมแซมทุกประเภท" />
      <meta name="twitter:image" content="https://www.civilproducts.co.th/images/civil-logo.jpg" />

      {/* Security Headers (บางตัวแนะนำให้ตั้งใน next.config.js headers แทน) */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      {/* CSP ควรใส่ผ่าน next.config.js แทน meta */}
      {/* <meta httpEquiv="Content-Security-Policy" content="..." /> */}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Fonts (optimize preload + crossOrigin) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "บริษัท ซีวิล โปรดักส์ จำกัด",
            url: "https://www.civilproducts.co.th",
            logo: "https://www.civilproducts.co.th/images/civil-logo.jpg",
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://line.me/ti/p/yourlineid"
            ]
          }),
        }}
      />
    </>
  );
}