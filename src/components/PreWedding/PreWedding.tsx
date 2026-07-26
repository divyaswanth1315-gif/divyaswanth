"use client";

import EventSection from "../UI/EventSection";

export default function PreWedding() {
  return (
    <EventSection
      id="pre-wedding"
      eyebrow="The Beginning"
      title={"Pre–Wedding"}
      photo="/images/prewedding.jpeg"
      photoAlt="Divya"
      photoSide="left"
      headline="The Bride's Reception"
      invite={
        "As our daughter Divya begins her beautiful new journey, we, Mrs. Priya and " +
        "Mr. Kannan, joyfully invite you to join us for her Pre-Wedding Reception."
      }
      details={[
        { label: "Date", value: "Saturday, 22 August 2026" },
        { label: "Time", value: "11.00 am onwards" },
        {
          label: "Venue",
          value: "Sri Meenakshi Amman Temple",
          sub: "Kethorai Village, Sogathorai Post,\nThe Nilgiris – 643102",
        },
      ]}
      mapUrl="https://www.google.com/maps/search/?api=1&query=Sri+Meenakshi+Amman+Temple+Kethorai+Village+Sogathorai+Post+The+Nilgiris"
      nextId="#wedding"
      nextLabel="The wedding follows"
    />
  );
}
