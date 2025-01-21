import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Homeless Prevention Services",
      description: (
        <>
          In partnership with the Atlantic County Department of Family and
          Community Development, we offer the Social Service for the Homeless
          (SSH) program, formerly known as CEAS. This program provides
          assistance to residents at risk of homelessness who are ineligible for
          other assistance programs. Services include emergency shelter, housing
          assistance, and support services. For more information, please contact
          the Department at (609) 348-3001 Ext. 2876.{" "}
          <a href="https://www.atlantic-county.org/documents/family-community-development/EA-information4-25-22.pdf?utm_source=chatgpt.com">
            More info
          </a>
        </>
      ),
    },
    {
      title: "Housing Assistance Programs",
      description: (
        <>
          We collaborate with the Atlantic Homeless Alliance to offer temporary
          assistance for low- and moderate-income households facing eviction or
          experiencing homelessness. Eligibility is determined through the
          Department of Community Affairs (DCA), and the program is administered
          through a grantee partnership for Atlantic County residents. For
          assistance, contact the Atlantic Homeless Alliance at (609) 343-2277.{" "}
          <a href="https://www.jfsatlantic.org/atlantic-homeless-alliance/?utm_source=chatgpt.com">
            More info
          </a>
        </>
      ),
    },
    {
      title: "Emergency Shelter Services",
      description: (
        <>
          The Atlantic City Rescue Mission provides emergency shelter and
          support services to homeless individuals in the Atlantic County area.
          If you are in need of immediate assistance, call 211 during business
          hours or the Atlantic City Rescue Mission at (609) 345-5517 x 142
          after hours.{" "}
          <a href="https://acrescuemission.org/facing-homelessness?utm_source=chatgpt.com">
            More info
          </a>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Our Programs</h1>
      {programs.map((program, index) => (
        <div key={index}>
          <h2>{program.title}</h2>
          <p>{program.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Programs;
