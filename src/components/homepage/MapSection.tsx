'use client';

export default function MapSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1F2560]">
        แผนที่บริษัท
      </h2>

      <div className="w-full h-[400px] max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.954574162669!2d100.43728197509402!3d13.961309586452707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e285f8a97c3413%3A0xf45b2f07dce5fedf!2s69%20Soi%203%20Country%20Village%20Park%2016%2C%20Tambon%20Khlong%20Khoi%2C%20Amphoe%20Pak%20Kret%2C%20Chang%20Wat%20Nonthaburi%2011120!5e0!3m2!1sen!2sth!4v1753999357803!5m2!1sen!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}