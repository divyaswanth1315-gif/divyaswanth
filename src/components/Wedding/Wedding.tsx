"use client";

import EventSection from "../UI/EventSection";

export default function Wedding() {
  return (
    <EventSection
      id="wedding"
      eyebrow="The Day We Become One"
      title="The Wedding"
      photo="/images/wedding.jpeg"
      photoAlt="Divya and Yaswanth"
      photoSide="right"
      headline="The Wedding Ceremony"
      invite={
        "As two hearts unite and two families become one, we warmly invite you " +
        "to witness and bless our wedding ceremony."
      }
      families={[
        { name: "Divya", parents: "Daughter of Priya & Kannan" },
        { name: "Yaswanth", parents: "Son of Bakkiyalakshmi & Ravi" },
      ]}
      details={[
        { label: "Date", value: "Sunday, 23 August 2026" },
        { label: "Muhurtham & Wedding Reception", value: "8:00 am onwards" },
        {
          label: "Venue",
          value: "Hulical Village",
          sub: "Coonoor Taluk,\nThe Nilgiris – 643102",
        },
      ]}
      mapUrl="https://www.google.com/maps/search/?api=1&query=Huligal+Village+Coonoor+Taluk+The+Nilgiris+643102"
      nextId="#countdown"
      nextLabel="Count every moment"
    />
  );
}
