// Slide Data for Argao Gun Club Presentation
const slidesData = [
  // Slide 1: Title
  {
    type: "title",
    title: "ARGAO GUN CLUB",
    subtitle: "Meet and Greet",
    tagline: "Safety • Discipline • Integrity • Respect"
  },

  // Slide 2: Opening Prayer
  {
    type: "content",
    title: "1. Opening Prayer",
    centerText: "Invocation for safety, discipline, unity, and responsible conduct.",
    duration: "5 minutes"
  },

  // Slide 3: Welcome & Opening Remarks
  {
    type: "content",
    title: "2. Welcome & Opening Remarks",
    items: [
      "Introduction of officers/organizers",
      "Purpose of the Club",
      "Core values: safety, integrity, respect, camaraderie, sportsmanship",
      "Emphasis on compliance with all Club policies and lawful firearm ownership"
    ],
    duration: "10 minutes"
  },

  // Slide 4: Member Introductions
  {
    type: "content",
    title: "3. Member Introductions",
    items: [
      "Name, background, experience",
      "Encourage a respectful, beginner-friendly atmosphere"
    ],
    duration: "10–15 minutes"
  },

  // Slide 5: Guidelines Title
  {
    type: "title",
    titleStyle: "font-size: 3.5rem;",
    title: "Guidelines for New Membership, Renewal, and Returning Membership",
    subtitle: "Proposed – For Approval",
    tagline: "Target Effectivity: January 1, 2026"
  },

  // Slide 6: New Membership (1-4)
  {
    type: "content",
    title: "New Membership (1-4)",
    items: [
      "The initial membership fee is <strong>Three Thousand Pesos (₱3,000.00)</strong>.",
      "An aspiring applicant must be endorsed by an active member of the Club, or by any member of the Board of Trustees or Club Officers. The endorser is fully responsible for conducting the initial screening and providing the endorsement. If there is any objection from the general membership within one (1) week, the application shall not proceed.",
      "Upon endorsement, the applicant must submit his/her application form and pay <strong>One Thousand Five Hundred Pesos (₱1,500.00)</strong>, representing 50% of the initial membership fee.",
      "Upon compliance, the applicant shall be accepted under a <strong>probationary status for a period of three (3) months</strong>. The endorsing member assumes responsibility for the conduct of the probationary member."
    ]
  },

  // Slide 7: New Membership (5-6)
  {
    type: "content",
    title: "New Membership (5-6)",
    sections: [
      {
        intro: "<strong>Required identification document:</strong>",
        items: ["Any valid government-issued ID"]
      },
      {
        intro: "<strong>To bring and use personal firearms at the range:</strong>",
        items: [
          "Valid LTOPF (License to Own and Possess Firearms)",
          "Valid PTCFOR (Permit to Carry Firearms Outside Residence)"
        ]
      },
      {
        intro: "<strong>Probationary members are required to:</strong>",
        items: [
          "Attend Club activities during the 3-month probationary period",
          "Actively participate in club practices (trainings are scheduled Tuesday–Sunday if no weekend matches are held)"
        ]
      }
    ]
  },

  // Slide 8: Probationary Period & Full Membership
  {
    type: "content",
    title: "Probationary Period & Full Membership",
    items: [
      "Upon completion of the 3-month probationary period, if no violations or offenses were committed, the applicant shall be accepted as a full-fledged member.",
      "If accepted as a full-fledged member, the applicant shall pay the remaining balance of <strong>One Thousand Five Hundred Pesos (₱1,500.00)</strong>.",
      "If rejected, the applicant shall be informed of the decision and reasons. The initial payment of ₱1,500.00 shall be forfeited in favor of the Club."
    ]
  },

  // Slide 9: Endorser Accountability
  {
    type: "content",
    title: "Endorser Accountability",
    items: [
      "The endorsing member is accountable for the conduct of the probationary member they endorsed.",
      "If an endorsed member commits violations of the Code of Conduct, the endorser may also face disciplinary review.",
      "This system promotes responsible endorsement and ensures members carefully vet applicants before sponsoring them."
    ]
  },

  // Slide 10: Membership Termination
  {
    type: "content",
    title: "Membership Termination",
    items: [
      "Grave offenses as defined in the Code of Conduct may result in immediate termination of membership.",
      "Terminated members lose all membership privileges and may not reactivate by simply paying fees.",
      "Terminated members may re-apply following the standard new membership process, subject to BOD approval."
    ]
  },

  // Slide 11: Membership Fees
  {
    type: "content",
    title: "Membership Fees",
    items: [
      "<strong>First Year: ₱3,000.00</strong> – Initial membership fee covering your first year of membership.",
      "<strong>Annual Renewal Fee: ₱1,500.00</strong> – Required starting on the second year and every year thereafter to maintain active membership status.",
      "Membership is valid for one (1) year from the date of payment."
    ]
  },

  // Slide 12: Active Membership Benefits
  {
    type: "content",
    title: "Active Membership Benefits",
    intro: "Members with active (non-expired) status are entitled to:",
    items: [
      "<strong>Exclusive firearm privilege</strong> – Bring and use personal firearms and ammunition within the training facility. Reserved only for official members with valid LTOPF and PTCFOR.",
      "<strong>Priority range access</strong> – Best time slots: 8 AM–10 AM and 3 PM–5 PM for comfortable, productive practice. (Walk-in guests and tourists: 10 AM–3 PM)",
      "<strong>Guidance and instruction</strong> – Learn from experienced shooters to improve skill, awareness, and discipline.",
      "<strong>Training, events, and competitions</strong> – Challenge yourself and participate in club activities.",
      "<strong>Voting rights</strong> – Participate in club decisions and governance matters.",
      "<strong>Respectful community</strong> – A like-minded group where safety, sportsmanship, and responsibility are shared values.",
      "<strong>Firearm permits and licensing assistance</strong> – The club provides guidance and support for members in obtaining and renewing firearm permits and licenses.",
      "<strong>Pro-bono legal representation</strong> – Access to legal defense in litigation stemming from alleged violations of RA 10591 (Comprehensive Firearms and Ammunition Regulation Act), provided the member is asserting the right of self-defense."
    ]
  },

  // Slide 13: Expired Membership
  {
    type: "content",
    title: "Expired Membership",
    items: [
      "Members who fail to pay the <strong>annual renewal fee</strong> by the deadline will have their membership expired.",
      "Members with expired status are <strong>not entitled</strong> to any membership benefits or facility access.",
      "<strong>Expired members will not enjoy active member benefits</strong> such as discounts, free gun use, free range use, and other privileges reserved for active members.",
      "<strong>Grace period:</strong> Expired members may reactivate <strong>within two (2) years</strong> by paying the current annual renewal fee of ₱1,500.00. No penalties or additional fees are required.",
      "<strong>Beyond 2 years:</strong> Members who fail to reactivate within the grace period must re-apply as a new applicant following the standard membership process."
    ]
  },

  // Slide 14: Code of Conduct Title
  {
    type: "title",
    titleStyle: "font-size: 3.5rem;",
    title: "Code of Conduct",
    subtitle: "Proposed – For Approval",
    tagline: "Target Effectivity: January 1, 2026"
  },

  // Slide 15: Section 1 Purpose
  {
    type: "content",
    title: "Section 1. Purpose",
    items: [
      "Establishes the standards of behavior, discipline, and safety expected of all members, probationary members, and guests of the Argao Gun Club",
      "Serves as the foundation for maintaining a safe, respectful, and professional environment",
      "Promotes responsible firearm ownership and the shooting sports"
    ]
  },

  // Slide 16: Section 2 Core Values
  {
    type: "content",
    title: "Section 2. Core Values",
    items: [
      "<strong>Safety</strong> – The paramount priority in all activities; no compromise on firearm safety protocols",
      "<strong>Discipline</strong> – Self-control and adherence to rules, both on and off the range",
      "<strong>Integrity</strong> – Honest conduct and accountability in all dealings",
      "<strong>Respect</strong> – Courteous treatment of all persons regardless of skill level, background, or status",
      "<strong>Camaraderie</strong> – Fostering brotherhood, mutual support, and fellowship among members",
      "<strong>Sportsmanship</strong> – Fair play, humility in victory, and grace in defeat"
    ]
  },

  // Slide 17: Section 3 Scope
  {
    type: "content",
    title: "Section 3. Scope of Application",
    intro: "This Code applies to all members, probationary members, and guests while:",
    items: [
      "Within Club premises or designated shooting facilities",
      "Participating in Club-organized activities, competitions, or events",
      "Representing the Club externally in competitions, meetings, or public forums",
      "Engaging in online communications or social media on behalf of or in reference to the Club",
      "Members remain bound by this Code even when using personal firearms outside Club activities, insofar as their conduct may affect the Club's reputation or safety of others"
    ]
  },

  // Slide 18: Section 4.1 Four Cardinal Rules
  {
    type: "content",
    title: "Section 4. Firearm Safety Rules",
    intro: "4.1. The Four Cardinal Rules of Firearm Safety:",
    items: [
      "<strong>Treat every firearm as if it is loaded.</strong> Never assume a firearm is unloaded. Always verify visually and physically.",
      "<strong>Never point a firearm at anything you do not intend to shoot.</strong> Maintain muzzle awareness at all times.",
      "<strong>Keep your finger off the trigger until ready to fire.</strong> Trigger finger must remain indexed until sights are on target.",
      "<strong>Be sure of your target and what is beyond it.</strong> Identify the target positively and be aware of the backstop."
    ]
  },

  // Slide 19: Section 4.2-4.3 RO Authority & Handling Areas
  {
    type: "content",
    title: "Section 4. Firearm Safety Rules (cont.)",
    sections: [
      {
        intro: "4.2. Gun Safety Instructor / Range Safety Officer Authority:",
        items: [
          "Members must follow all Gun Safety Instructor / Range Safety Officer (GSI/RSO) commands immediately and without question",
          "The GSI/RSO has absolute authority over all range activities and may cease any activity deemed unsafe",
          "Challenging or arguing with a GSI/RSO during live-fire exercises is prohibited"
        ]
      },
      {
        intro: "4.3. Designated Handling Areas:",
        items: [
          "Handling of firearms is permitted only in designated safe areas or on the firing line when authorized",
          "All firearms must remain unloaded and cased/holstered until in a designated handling area",
          "Dry-fire practice is permitted only in designated areas"
        ]
      }
    ]
  },

  // Slide 20: Section 4.4-4.6 Substances, PPE, Ammo
  {
    type: "content",
    title: "Section 4. Firearm Safety Rules (cont.)",
    sections: [
      {
        intro: "4.4. Prohibited Substances:",
        items: [
          "Use, possession, or being under the influence of alcohol, illegal drugs, or intoxicating substances before or during shooting activities is strictly prohibited",
          "Members suspected of impairment shall be immediately removed from range activities"
        ]
      },
      {
        intro: "4.5. Personal Protective Equipment (PPE):",
        items: [
          "Eye and hearing protection are mandatory during live-fire exercises",
          "Appropriate footwear (closed-toe shoes) is required on the range"
        ]
      },
      {
        intro: "4.6. Ammunition and Equipment:",
        items: [
          "Use only ammunition appropriate for your firearm and approved for range use",
          "Steel-core, armor-piercing, incendiary, and tracer rounds are prohibited unless authorized"
        ]
      }
    ]
  },

  // Slide 21: Section 5 Respectful Behavior
  {
    type: "content",
    title: "Section 5. Respectful Behavior",
    sections: [
      {
        intro: "5.1. General Conduct:",
        items: [
          "Demonstrate respect and professionalism toward fellow members, officers, staff, guests, and the public",
          "Extend courtesy and patience to beginners and less experienced shooters"
        ]
      },
      {
        intro: "5.2. Prohibited Conduct:",
        items: [
          "Harassment, bullying, intimidation, assault, violence, or threatening behavior",
          "Discrimination or hate speech based on race, religion, gender, age, disability, political affiliation, or socioeconomic status",
          "Sexual harassment or misconduct",
          "Hazing or abuse of members",
          "Abusive, vulgar, or offensive language or gestures",
          "Gossip, rumor-mongering, or spreading false information"
        ]
      },
      {
        intro: "5.3. Conflict Resolution:",
        items: [
          "Disputes should be resolved privately and respectfully; escalate to Officers if unresolved"
        ]
      }
    ]
  },

  // Slide 22: Section 6 Club Participation
  {
    type: "content",
    title: "Section 6. Club Participation",
    sections: [
      {
        intro: "6.1. Active Participation:",
        items: [
          "Members are encouraged to actively participate in Club events, practices, competitions, and community activities",
          "Active engagement strengthens the Club and promotes skill development and camaraderie"
        ]
      },
      {
        intro: "6.2. Probationary Requirements:",
        items: [
          "Probationary members must actively participate during their 3-month probationary period",
          "Regular attendance in practice sessions and Club activities is expected"
        ]
      },
      {
        intro: "6.3. Volunteerism:",
        items: [
          "Members are encouraged to volunteer for Club committees, events, and activities",
          "Sharing knowledge and mentoring new members is highly valued"
        ]
      }
    ]
  },

  // Slide 23: Section 7 Representation
  {
    type: "content",
    title: "Section 7. Representation of the Club",
    sections: [
      {
        intro: "7.1. External Representation:",
        items: [
          "Members representing the Club must demonstrate dignity, discipline, and sportsmanship",
          "Club uniforms or identifying apparel should be worn appropriately and maintained in good condition"
        ]
      },
      {
        intro: "7.2. Public Statements:",
        items: [
          "Only the authorized Public Information Officer (PIO) designated by the board may issue official statements on behalf of the Club",
          "Members must not make unauthorized public statements or social media posts representing the Club's position"
        ]
      },
      {
        intro: "7.3. Unauthorized Use:",
        items: [
          "Use of the Club's name, logo, or property for personal or commercial gain without authorization is prohibited",
          "Endorsement of products, services, or candidates using the Club's identity requires Board approval"
        ]
      }
    ]
  },

  // Slide 24: Section 8 Property & Facilities
  {
    type: "content",
    title: "Section 8. Treatment of Property and Facilities",
    sections: [
      {
        intro: "8.1. Care and Respect:",
        items: [
          "Treat all Club facilities, equipment, and property with care and respect",
          "Equipment must be used only for its intended purpose and returned in good condition"
        ]
      },
      {
        intro: "8.2. Reporting Damage:",
        items: [
          "Any damage to Club property must be reported immediately to Club Officers",
          "Members are financially responsible for damage caused by negligence or misuse"
        ]
      },
      {
        intro: "8.3. Prohibited Acts & Cleanliness:",
        items: [
          "Littering, vandalism, graffiti, or misuse of facilities is strictly prohibited",
          "Members must clean up their shooting stations after use (spent casings, targets, trash)",
          "Common areas must be kept tidy for the next user"
        ]
      }
    ]
  },

  // Slide 25: Section 9 Compliance
  {
    type: "content",
    title: "Section 9. Compliance with Club Policies",
    sections: [
      {
        intro: "9.1. Governing Documents – Members must comply with:",
        items: [
          "This Code of Conduct",
          "The Club's Constitution and By-Laws",
          "Membership Guidelines",
          "All official rules, regulations, and policies issued by the Board of Directors"
        ]
      },
      {
        intro: "9.2. Lawful Orders:",
        items: [
          "Members must follow lawful orders and directives issued by the BOD and authorized Officers",
          "Refusal to comply with reasonable directives may be grounds for disciplinary action"
        ]
      },
      {
        intro: "9.3. Legal Compliance:",
        items: [
          "Members must maintain valid licenses and permits",
          "Any suspension, revocation, or expiration of licenses must be reported immediately"
        ]
      }
    ]
  },

  // Slide 26: Section 10 Probationary Members
  {
    type: "content",
    title: "Section 10. Conduct Toward Probationary Members",
    sections: [
      {
        intro: "10.1. Mentorship and Support:",
        items: [
          "Senior and full-fledged members are expected to mentor and support probationary members",
          "Provide encouragement and constructive feedback to help probationary members develop skills"
        ]
      },
      {
        intro: "10.2. Prohibited Treatment:",
        items: [
          "Hazing, initiation rituals, or humiliation of probationary members",
          "Physical, verbal, or psychological abuse",
          "Exploitation, coercion, or inappropriate demands",
          "Exclusion or ostracization based on probationary status"
        ]
      },
      {
        intro: "10.3. Reporting Abuse:",
        items: [
          "Probationary members may report mistreatment directly to any Officer or the BOD without fear of retaliation"
        ]
      }
    ]
  },

  // Slide 27: Section 11 Confidentiality
  {
    type: "content",
    title: "Section 11. Confidentiality and Integrity",
    sections: [
      {
        intro: "11.1. Confidentiality:",
        items: [
          "Club matters, internal discussions, member information, and deliberations shall remain confidential",
          "Disclosure of sensitive Club information to non-members or the public is prohibited"
        ]
      },
      {
        intro: "11.2. Member Privacy:",
        items: [
          "Personal information of members (contact details, firearm inventory, financial status) must be kept confidential",
          "Sharing member information without consent is prohibited except as required by law"
        ]
      },
      {
        intro: "11.3. Integrity:",
        items: [
          "Act with honesty, transparency, and integrity in all dealings within the Club",
          "Falsification of documents, records, or applications is grounds for immediate termination"
        ]
      }
    ]
  },

  // Slide 28: Section 12 Prohibited Acts (1)
  {
    type: "content",
    title: "Section 12. Prohibited Acts",
    sections: [
      {
        intro: "12.1. Safety Violations:",
        items: [
          "Unsafe firearm handling (negligent discharge, muzzle sweeping, etc.)",
          "Use of firearms under the influence of alcohol, drugs, or intoxicating substances",
          "Failure to follow Gun Safety Instructor / Range Safety Officer commands",
          "Bringing defective or unsafe firearms to the range"
        ]
      },
      {
        intro: "12.2. Property Offenses:",
        items: [
          "Theft of Club or member property",
          "Vandalism or destruction of property",
          "Unauthorized use of Club facilities or equipment"
        ]
      }
    ]
  },

  // Slide 29: Section 12 Prohibited Acts (2)
  {
    type: "content",
    title: "Section 12. Prohibited Acts (cont.)",
    sections: [
      {
        intro: "12.3. Administrative Violations:",
        items: [
          "Non-payment of renewal fees after due notice",
          "Falsification of membership documents or applications",
          "Unauthorized representation of the Club",
          "Disclosure of confidential Club information"
        ]
      },
      {
        intro: "12.4. Legal Violations:",
        items: [
          "Commission of any crime involving firearms",
          "Possession of unlicensed or illegal firearms",
          "Any act that compromises the safety and reputation of the Club"
        ]
      }
    ]
  },

  // Slide 30: Section 13 Reporting Violations
  {
    type: "content",
    title: "Section 13. Reporting Violations",
    sections: [
      {
        intro: "13.1. Duty to Report:",
        items: [
          "All members have a duty to report violations of this Code to any Officer or the BOD",
          "Failure to report known safety violations may itself be considered an offense"
        ]
      },
      {
        intro: "13.2. Methods of Reporting:",
        items: [
          "Verbally to any Club Officer",
          "In writing to the Board of Directors",
          "Through designated communication channels (email, messaging)"
        ]
      },
      {
        intro: "13.3. Treatment of Reports:",
        items: [
          "All reports shall be treated with fairness, impartiality, and confidentiality",
          "The identity of the reporting member shall be protected to the extent possible",
          "False or malicious reports are prohibited and may result in disciplinary action"
        ]
      },
      {
        intro: "13.4. Non-Retaliation:",
        items: [
          "Retaliation against any member who reports a violation in good faith is strictly prohibited"
        ]
      }
    ]
  },

  // Slide 31: Section 14 Light Offenses
  {
    type: "content",
    title: "Section 14. Offenses and Disciplinary Actions",
    sections: [
      {
        intro: "14.1. Light Offenses – Minor violations including:",
        items: [
          "Tardiness to scheduled Club activities",
          "Unexcused absences from required activities",
          "Minor breaches of procedure or etiquette",
          "First-time failure to wear required PPE",
          "Minor littering or failure to clean shooting station",
          "Discourteous behavior (first offense)"
        ]
      },
      {
        intro: "Sanctions:",
        items: [
          "Verbal warning",
          "Written warning (recorded in member file)",
          "Mandatory refresher briefing"
        ]
      }
    ]
  },

  // Slide 32: Section 14 Serious Offenses
  {
    type: "content",
    title: "Section 14. Offenses and Disciplinary Actions (cont.)",
    sections: [
      {
        intro: "14.2. Serious Offenses – Significant violations including:",
        items: [
          "Repeated Light Offenses (three or more)",
          "Disrespectful or unprofessional behavior toward members, officers, or guests",
          "Unsafe firearm handling (without injury)",
          "Non-payment of renewal fees after first notice",
          "Failure to report damage to Club property",
          "Minor unauthorized use of Club name or logo",
          "Violation of confidentiality (minor)"
        ]
      },
      {
        intro: "Sanctions:",
        items: [
          "Formal written reprimand",
          "Suspension of membership privileges (30-90 days)",
          "Temporary disqualification from competitions or activities",
          "Mandatory safety retraining; Financial restitution for damages"
        ]
      }
    ]
  },

  // Slide 33: Section 14 Grave Offenses
  {
    type: "content",
    title: "Section 14. Offenses and Disciplinary Actions (cont.)",
    sections: [
      {
        intro: "14.3. Grave Offenses – Severe violations including:",
        items: [
          "Intentional endangerment of life or safety",
          "Negligent discharge resulting in injury or property damage",
          "Gross misconduct or insubordination",
          "Harassment, assault, violence, or threats",
          "Theft, fraud, embezzlement, vandalism, or willful destruction of property",
          "Hazing or abuse of members",
          "Acts bringing the Club into serious disrepute",
          "Commission of a crime involving firearms; Repeated Serious Offenses"
        ]
      },
      {
        intro: "Sanctions:",
        items: [
          "Immediate suspension pending investigation",
          "Termination of membership; Permanent ban from Club premises",
          "Referral to law enforcement; Civil action for damages"
        ]
      }
    ]
  },

  // Slide 34: Section 14 Due Process & Appeals
  {
    type: "content",
    title: "Section 14. Offenses and Disciplinary Actions (cont.)",
    sections: [
      {
        intro: "14.4. Due Process:",
        items: [
          "All members accused of offenses have the right to be informed of the charges against them",
          "Members shall be given an opportunity to present their defense before any disciplinary decision",
          "The BOD and Officers shall determine disciplinary measures by majority vote",
          "Decisions shall be documented and communicated to the affected member in writing"
        ]
      },
      {
        intro: "14.5. Appeals:",
        items: [
          "Members may appeal disciplinary decisions to the BOD within fifteen (15) days of notification",
          "Appeals must be submitted in writing with supporting evidence or arguments",
          "The Board's decision on appeal shall be final"
        ]
      }
    ]
  },

  // Slide 35: Section 15 & 16
  {
    type: "content",
    title: "Section 15. Amendment & Section 16. Acknowledgment",
    sections: [
      {
        intro: "Section 15. Amendment:",
        items: [
          "This Code may be amended by a two-thirds (2/3) vote of the Board of Directors",
          "Proposed amendments shall be circulated to all members at least fifteen (15) days before the vote",
          "Amendments shall take effect upon approval and notification to the general membership"
        ]
      },
      {
        intro: "Section 16. Acknowledgment:",
        items: [
          "All members shall sign this Code of Conduct as a condition of membership",
          "Signifies full understanding and agreement to abide by its provisions"
        ]
      }
    ]
  },

  // Slide 36: Firearm Safety
  {
    type: "content",
    title: "6. Firearm Safety Orientation",
    intro: "Led by Gun Safety Instructor / Range Safety Officer or qualified member:",
    items: [
      "Four Cardinal Rules",
      "Gun Safety Instructor / Range Safety Officer authority and compliance",
      "Designated handling areas",
      "No alcohol/drugs policy",
      "Safe storage, transport, and emergency procedures",
      "Range etiquette aligned with the Code of Conduct"
    ],
    duration: "20–30 minutes"
  },

  // Slide 37: Club Activities
  {
    type: "content",
    title: "7. Overview of Club Activities & Annual Expectations",
    items: [
      "Monthly shoots and probationary attendance requirements",
      "Practices (Tues–Sun schedule)",
      "Training sessions and skill development",
      "Competitions and events",
      "Community involvement and advocacy",
      "Updates on policies and legal changes"
    ],
    duration: "15 minutes"
  },

  // Slide 38: Committees
  {
    type: "content",
    title: "8. Formation of Committees",
    items: [
      "Safety Committee",
      "Membership & Screening Committee",
      "Events & Logistics Committee",
      "Communications & Outreach Committee"
    ],
    footer: "(Clarify responsibilities based on the Guidelines & Code)",
    duration: "10–15 minutes"
  },

  // Slide 39: Administrative Matters
  {
    type: "content",
    title: "9. Administrative Matters",
    items: [
      "Submission of valid government-issued ID",
      "Application forms and initial payments",
      "Attendance tracking",
      "Voting procedures for future membership approvals",
      "Next steps for probationary members"
    ],
    duration: "10 minutes"
  },

  // Slide 40: 2026 Plans Title
  {
    type: "title",
    titleStyle: "font-size: 3.5rem;",
    title: "2026 CLUB PLANS & ACTIVITY FRAMEWORK",
    subtitle: "Building for the Future",
    tagline: "Infrastructure • Training • Community"
  },

  // Slide 41: Shooting Range Development Goals
  {
    type: "content",
    title: "I. Shooting Range Development Goals",
    intro: "Infrastructure upgrades for safer, more efficient training:",
    items: [
      "Ceiling installation for improved weather protection",
      "Flooring improvements for better footing and safe movement",
      "Awning extension for prep and staging shade",
      "Tents/shelters for equipment stations and guest coverage"
    ],
    footer: "<strong>Overall goal:</strong> A more functional, weather-resilient, training-oriented range."
  },

  // Slide 42: 2026 Activity Schedule
  {
    type: "content",
    title: "II. 2026 Activity Schedule & Member Programs",
    sections: [
      {
        intro: "Monthly Member-Exclusive Activity:",
        items: [
          "Every 3rd weekend of the month",
          "Focus on skill development, discipline, and camaraderie"
        ]
      },
      {
        intro: "<strong>Key 2026 Programs:</strong>",
        items: [
          "Quarterly Safe Handling & Movement Training",
          "Quarterly 1-for-1 Steel Challenge",
          "Quarterly Legal Workshops & Gun-Law Forums"
        ]
      }
    ]
  },

  // Slide 43: Safe Handling & Movement Training
  {
    type: "content",
    title: "1. Quarterly Safe Handling & Movement Training",
    items: [
      "Obstacle-based movement using airsoft",
      "Time-pressured drills with strict safety compliance",
      "Reinforcement of the Four Cardinal Rules"
    ],
    footer: "<strong>Objective:</strong> Responsible handling and pressure-tested fundamentals"
  },

  // Slide 44: 1-for-1 Steel Challenge
  {
    type: "content",
    title: "2. Quarterly 1-for-1 Steel Challenge",
    items: [
      "25 rounds · 25 steel targets (one round per target)",
      "Accuracy-first discipline—no wasted shots",
      "Improves precision, control, and mental pacing",
      "Recognition for top performers each quarter"
    ]
  },

  // Slide 45: Legal Workshops
  {
    type: "content",
    title: "3. Quarterly Legal Workshops & Gun-Law Forums",
    items: [
      "Updates on PH firearm laws and regulations",
      "Case studies of firearm-related incidents",
      "Hosted by Club volunteer legal counsel"
    ],
    footer: "<strong>Objective:</strong> Informed, compliant, responsible firearm ownership"
  },

  // Slide 46: Open Forum
  {
    type: "content",
    title: "10. Open Forum",
    items: [
      "Questions on the guidelines and code",
      "Suggestions for activities and practices",
      "Concerns or clarifications"
    ],
    duration: "10 minutes"
  },

  // Slide 47: Closing Remarks
  {
    type: "content",
    title: "11. Closing Remarks & Next Steps",
    items: [
      "Summary of key agreements",
      "Reminders about safety, conduct, and compliance",
      "Next meeting date and upcoming shoots/practices"
    ],
    duration: "5 minutes"
  },

  // Slide 48: Thank You
  {
    type: "thankyou",
    title: "Thank You",
    message: "Building a Safe and Responsible Community"
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = slidesData;
}
