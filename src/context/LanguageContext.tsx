import React, { useState, createContext, useContext } from "react";
type Language = "en" | "am";
type Translations = {
  // Navbar
  nav_story: string;
  nav_programs: string;
  nav_transparency: string;
  nav_contact: string;
  nav_donate: string;
  // Navbar Dropdowns
  nav_about: string;
  nav_our_work: string;
  nav_get_involved: string;
  nav_impact: string;
  nav_policies: string;
  nav_how_we_work: string;
  nav_emergencies: string;
  nav_ways_to_give: string;
  nav_news: string;
  nav_partner: string;
  nav_financial: string;
  nav_advocacy: string;
  nav_safeguarding: string;
  nav_volunteer_internship: string;
  nav_legal_governance: string;
  nav_impact_results: string;
  // Footer
  footer_desc: string;
  footer_quick_links: string;
  footer_financials: string;
  footer_ways_to_give: string;
  footer_contact_us: string;
  footer_stay_updated: string;
  footer_subscribe_desc: string;
  footer_email_placeholder: string;
  footer_subscribe_btn: string;
  footer_privacy: string;
  footer_terms: string;
  footer_rights: string;
  // Home Page
  home_hero_title_1: string;
  home_hero_title_2: string;
  home_hero_subtitle: string;
  home_hero_programs_btn: string;
  home_stats_lives: string;
  home_stats_countries: string;
  home_stats_water: string;
  home_mission_quote: string;
  home_mission_text: string;
  home_who_we_are: string;
  home_what_we_solve: string;
  home_who_we_help: string;
  home_our_vision: string;
  home_read_story: string;
  home_programs_title: string;
  home_programs_subtitle: string;
  home_program_edu_title: string;
  home_program_edu_desc: string;
  home_program_water_title: string;
  home_program_water_desc: string;
  home_program_health_title: string;
  home_program_health_desc: string;
  home_learn_more: string;
  home_testimonials_title: string;
  home_testimonials_subtitle: string;
  home_cta_title: string;
  home_cta_text: string;
  home_give_today: string;
  // About Page
  about_title: string;
  about_subtitle: string;
  about_spark_title: string;
  about_spark_text_1: string;
  about_spark_text_2: string;
  about_spark_text_3: string;
  about_mission_title: string;
  about_mission_subtitle: string;
  about_value_integrity: string;
  about_value_integrity_desc: string;
  about_value_empowerment: string;
  about_value_empowerment_desc: string;
  about_value_compassion: string;
  about_value_compassion_desc: string;
  about_team_title: string;
  about_team_subtitle: string;
  // Programs Page
  programs_title: string;
  programs_subtitle: string;
  programs_edu_title: string;
  programs_edu_desc: string;
  programs_edu_impact: string;
  programs_water_title: string;
  programs_water_desc: string;
  programs_water_impact: string;
  programs_health_title: string;
  programs_health_desc: string;
  programs_health_impact: string;
  programs_impact_label: string;
  programs_support_btn: string;
  programs_support_message: string;

  // Donate Page
  donate_title: string;
  donate_subtitle: string;
  donate_amount_title: string;
  donate_custom_placeholder: string;
  donate_info_title: string;
  donate_first_name: string;
  donate_last_name: string;
  donate_email: string;
  donate_payment_title: string;
  donate_card_number: string;
  donate_submit_btn: string;
  donate_secure: string;
  donate_tier_1: string;
  donate_tier_2: string;
  donate_tier_3: string;
  donate_tier_4: string;
  // Transparency Page
  transparency_title: string;
  transparency_subtitle: string;
  transparency_breakdown_title: string;
  transparency_program_services: string;
  transparency_program_desc: string;
  transparency_fundraising: string;
  transparency_fundraising_desc: string;
  transparency_management: string;
  transparency_management_desc: string;
  transparency_accountability_title: string;
  transparency_accountability_text_1: string;
  transparency_accountability_text_2: string;
  transparency_report_btn: string;
  transparency_financials_btn: string;
  transparency_stories_title: string;
  // Contact Page
  contact_title: string;
  contact_subtitle: string;
  contact_info_title: string;
  contact_general: string;
  contact_donations: string;
  contact_phone: string;
  contact_hq: string;
  contact_form_title: string;
  contact_name: string;
  contact_email: string;
  contact_phone_number: string;
  contact_subject: string;
  contact_message: string;
  contact_send_btn: string;
  // How We Work Page
  how_title: string;
  how_subtitle: string;
  how_locally_led_title: string;
  how_locally_led_desc: string;
  how_needs_title: string;
  how_needs_desc: string;
  how_sustainability_title: string;
  how_sustainability_desc: string;
  how_partnership_title: string;
  how_partnership_desc: string;
  how_cta_title: string;
  how_cta_text: string;
  // Emergencies Page
  emergency_banner: string;
  emergency_title: string;
  emergency_subtitle: string;
  emergency_crisis_title: string;
  emergency_crisis_desc: string;
  emergency_affected: string;
  emergency_affected_num: string;
  emergency_deployed: string;
  emergency_deployed_num: string;
  emergency_raised: string;
  emergency_raised_num: string;
  emergency_action_title: string;
  emergency_action_desc: string;
  emergency_donate_btn: string;
  emergency_urgent: string;
  // Ways to Give Page
  ways_title: string;
  ways_subtitle: string;
  ways_monthly_title: string;
  ways_monthly_desc: string;
  ways_onetime_title: string;
  ways_onetime_desc: string;
  ways_inkind_title: string;
  ways_inkind_desc: string;
  ways_legacy_title: string;
  ways_legacy_desc: string;
  ways_tribute_title: string;
  ways_tribute_desc: string;
  ways_stock_title: string;
  ways_stock_desc: string;
  ways_cta_title: string;
  ways_cta_text: string;
  // News Page
  news_title: string;
  news_subtitle: string;
  news_featured: string;
  news_latest: string;
  news_read_more: string;
  news_field_reports: string;
  // Partner Page
  partner_title: string;
  partner_subtitle: string;
  partner_why_title: string;
  partner_why_desc: string;
  partner_corporate: string;
  partner_corporate_desc: string;
  partner_grant: string;
  partner_grant_desc: string;
  partner_employee: string;
  partner_employee_desc: string;
  partner_probono: string;
  partner_probono_desc: string;
  partner_cta_title: string;
  partner_cta_text: string;
  partner_contact_label: string;
  // Financial Accountability Page
  financial_title: string;
  financial_subtitle: string;
  financial_annual_title: string;
  financial_annual_desc: string;
  financial_audited_title: string;
  financial_audited_desc: string;
  financial_filing_title: string;
  financial_filing_desc: string;
  financial_download: string;
  financial_breakdown_title: string;
  financial_certifications: string;
  // Advocacy Page
  advocacy_title: string;
  advocacy_subtitle: string;
  advocacy_campaign_1_title: string;
  advocacy_campaign_1_desc: string;
  advocacy_campaign_2_title: string;
  advocacy_campaign_2_desc: string;
  advocacy_campaign_3_title: string;
  advocacy_campaign_3_desc: string;
  advocacy_why_title: string;
  advocacy_why_desc: string;
  advocacy_get_involved_title: string;
  advocacy_sign_petition: string;
  advocacy_share: string;
  advocacy_write: string;
  // Safeguarding Page
  safeguarding_title: string;
  safeguarding_subtitle: string;
  safeguarding_commitment_title: string;
  safeguarding_commitment_desc: string;
  safeguarding_child_title: string;
  safeguarding_child_desc: string;
  safeguarding_psea_title: string;
  safeguarding_psea_desc: string;
  safeguarding_reporting_title: string;
  safeguarding_reporting_desc: string;
  safeguarding_download_btn: string;
  safeguarding_contact_label: string;
};
const translations: Record<Language, Translations> = {
  en: {
    nav_story: "Our Story",
    nav_programs: "Programs",
    nav_transparency: "Transparency",
    nav_contact: "Contact",
    nav_donate: "Donate Now",
    // Navbar Dropdowns
    nav_about: "About",
    nav_our_work: "Our Work",
    nav_get_involved: "Get Involved",
    nav_impact: "Impact",
    nav_policies: "Policies",
    nav_how_we_work: "What We Do",
    nav_emergencies: "Emergencies",
    nav_ways_to_give: "Ways to Give",
    nav_news: "Latest News",
    nav_partner: "Partner With Us",
    nav_financial: "Financial Accountability",
    nav_advocacy: "Advocacy & Policy",
    nav_safeguarding: "Safeguarding",
    nav_volunteer_internship: "Volunteer & Internship",
    nav_legal_governance: "Legal & Governance",
    nav_impact_results: "Impact & Results",
    footer_desc:
      "Dedicated to creating lasting change in communities around the world through education, healthcare, and sustainable development.",
    footer_quick_links: "Quick Links",
    footer_financials: "Financials & Impact",
    footer_ways_to_give: "Ways to Give",
    footer_contact_us: "Contact Us",
    footer_stay_updated: "Stay Updated",
    footer_subscribe_desc:
      "Subscribe to our newsletter for impact stories and updates.",
    footer_email_placeholder: "Your email address",
    footer_subscribe_btn: "Subscribe",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_rights: "All rights reserved.",
    home_hero_title_1: "Empowering Communities,",
    home_hero_title_2: "Transforming Lives",
    home_hero_subtitle:
      "We believe in a world where every child has access to education, healthcare, and a safe environment to grow.",
    home_hero_programs_btn: "Our Programs",
    home_stats_lives: "Lives Changed",
    home_stats_countries: "Countries Served",
    home_stats_water: "Clean Water Projects",
    home_mission_quote:
      '"We don\'t just provide aid; we build partnerships that empower communities to thrive on their own terms."',
    home_mission_text:
      "Founded on the belief that dignity is a human right, we work hand-in-hand with local leaders to create sustainable solutions for poverty, hunger, and disease.",
    home_who_we_are:
      "Hibret Lebego is a registered NGO dedicated to community empowerment and sustainable development.",
    home_what_we_solve:
      "We address poverty, hunger, lack of education and healthcare, and water scarcity in underserved communities.",
    home_who_we_help:
      "We help vulnerable families, children, women, and rural communities across Ethiopia and the Horn of Africa.",
    home_our_vision:
      "Our long-term vision is a world where every community has the tools and opportunities to thrive independently.",
    home_read_story: "Read Our Story",
    home_programs_title: "Our Core Programs",
    home_programs_subtitle:
      "Focused interventions where we can make the biggest difference.",
    home_program_edu_title: "Education",
    home_program_edu_desc:
      "Building schools and training teachers to unlock potential.",
    home_program_water_title: "Clean Water",
    home_program_water_desc:
      "Providing sustainable access to safe drinking water.",
    home_program_health_title: "Healthcare",
    home_program_health_desc:
      "Mobile clinics and maternal health support for rural areas.",
    home_learn_more: "Learn More",
    home_testimonials_title: "TESTIMONIALS",
    home_testimonials_subtitle:
      "Hear from the people whose lives have been transformed by your generosity.",
    home_cta_title: "Ready to Make a Difference?",
    home_cta_text:
      "Your support can change a life today. 100% of public donations go directly to funding our programs.",
    home_give_today: "Give Today",
    about_title: "Our Story",
    about_subtitle:
      "From a single act of sacrifice to a trusted movement restoring health and hope across Ethiopia.",
    about_spark_title: "A Spark of Hope",
    about_spark_text_1:
      "Founded in June 2015 by a renowned Ethiopian artist Solomon Bogale, in collaboration with committed professionals, Hibret Lebego Ethiopian Charity Association stands as a symbol of compassion and collective action.",
    about_spark_text_2:
      "Our journey began with a profound act of humanity—when our founder sold his personal vehicles at auction to save two chronically ill Ethiopians suffering from kidney failure and heart disease. This heartfelt initiative revealed the need for a sustainable, organized effort to support others facing similar conditions.",
    about_spark_text_3:
      "Thus, Hibret Lebego was born—a community-driven movement dedicated to restoring health, dignity, and hope to those who need it most.",
    about_mission_title: "Our Mission & Values",
    about_mission_subtitle: "The principles that guide every decision we make.",
    about_value_integrity: "Our Mission",
    about_value_integrity_desc:
      "To save lives and restore hope by supporting chronically ill children and adolescents through comprehensive medical, social, and economic support—empowering them to recover and thrive.",
    about_value_empowerment: "Our Vision",
    about_value_empowerment_desc:
      "An Ethiopia where no child or youth dies or suffers because they cannot afford medical treatment, and where communities unite to support one another in health and healing.",
    about_value_compassion: "Our Core Values",
    about_value_compassion_desc:
      "• Compassion\n• Integrity\n• Collaboration\n• Sustainability",
    about_team_title: "Meet Our Team",
    about_team_subtitle: "The dedicated individuals working behind the scenes.",
    programs_title: "Our Programs",
    programs_subtitle:
      "We focus our efforts where they matter most. Here is how we are making a tangible difference on the ground.",
    programs_edu_title: "Education for All",
    programs_edu_desc:
      "In June, our annual School Supplies Drive reached over 1,200 children in underserved neighborhoods. With your help, we provided essentials like notebooks, pencils, and backpacks to help young learners thrive.",
    programs_edu_impact:
      "• 1,200+ children received school supplies\n• 85% increase in classroom attendance reported\n• Community engagement events sparked local volunteerism",
    programs_water_title: "Clean Water Initiative",
    programs_water_desc:
      "Our charity recently completed a crucial clean water initiative in the rural communities of Eastern Province. Access to clean water is a fundamental human right, and thanks to our generous donors, hundreds of families now have safe drinking water for the first time.",
    programs_water_impact:
      "• Installed three sustainable water pumps\n• Conducted hygiene education sessions for villagers\n• Improved overall community health and hygiene practices",

    programs_health_title: "Meals for Hope: Fighting Hunger Together",
    programs_health_desc:
      "Every week, our Meals for Hope initiative delivers fresh, nutritious meals to families experiencing food insecurity. Last month, we distributed over 6,000 meals thanks to our dedicated volunteers and kind supporters.",
    programs_health_impact:
      "• 6,000+ meals served in local neighborhoods\n• New partnerships with local farms ensured healthy ingredients\n• Positive feedback and heartfelt gratitude from recipients",
    programs_impact_label: "Impact Highlight",
    programs_support_btn: "Support This Cause",
    programs_support_message:
      "Education is at the heart of our mission, and these achievements are only possible with continued community support.",
    donate_title: "Make a Difference Today",
    donate_subtitle: "Your secure donation helps us continue our vital work.",
    donate_amount_title: "Select Donation Amount",
    donate_custom_placeholder: "Custom Amount",
    donate_info_title: "Your Information",
    donate_first_name: "First Name",
    donate_last_name: "Last Name",
    donate_email: "Email Address",
    donate_payment_title: "Payment Details",
    donate_card_number: "Card number",
    donate_submit_btn: "Donate",
    donate_secure: "Secure 256-bit SSL Encrypted Payment",
    donate_tier_1: "Provides school supplies for 5 children",
    donate_tier_2: "Feeds a child for a whole month",
    donate_tier_3: "Provides clean water for a family",
    donate_tier_4: "Funds medical checkups for a village",
    transparency_title: "Transparency & Impact",
    transparency_subtitle:
      "We believe trust is earned. Here is exactly how your donations are used to create change.",
    transparency_breakdown_title: "Where Your Money Goes",
    transparency_program_services: "Program Services",
    transparency_program_desc:
      "Directly funding schools, clinics, and water projects.",
    transparency_fundraising: "Fundraising",
    transparency_fundraising_desc: "Events and campaigns to grow our impact.",
    transparency_management: "Management & General",
    transparency_management_desc: "Administrative costs and oversight.",
    transparency_accountability_title: "Accountability First",
    transparency_accountability_text_1:
      "We are committed to the highest standards of financial accountability. Every dollar you give is tracked and audited to ensure maximum impact.",
    transparency_accountability_text_2:
      "Our administrative costs are covered by a private group of donors, meaning a significant portion of public donations goes straight to the field.",
    transparency_report_btn: "2023 Annual Report",
    transparency_financials_btn: "Audited Financials",
    transparency_stories_title: "Real Stories, Real Impact",
    contact_title: "Get in Touch",
    contact_subtitle:
      "Have questions about our work or want to get involved? We'd love to hear from you.",
    contact_info_title: "Contact Information",
    contact_general: "General Inquiries",
    contact_donations: "Donations",
    contact_phone: "Phone",
    contact_hq: "Headquarters",
    contact_form_title: "Send us a Message",
    contact_name: "Name",
    contact_email: "Email",
    contact_phone_number: "Phone Number",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send_btn: "Send Message",
    // How We Work Page
    how_title: "What We Do",
    how_subtitle:
      "Hibret Lebego focuses on comprehensive support for chronically ill children and adolescents across Ethiopia.",
    how_locally_led_title: "Medical Cost Coverage",
    how_locally_led_desc:
      "We provide financial support to cover lifesaving treatments, hospital stays, medications, and other essential medical expenses, ensuring that no child is denied care due to financial limitations.",
    how_needs_title: "Care & Rehabilitation",
    how_needs_desc:
      "Beyond medical treatment, we offer holistic care that includes emotional support, proper nutrition, and psychosocial services to help patients recover with dignity and strength.",
    how_sustainability_title: "Post-Treatment Integration",
    how_sustainability_desc:
      "We support children and adolescents as they transition back into their daily lives by assisting with school reintegration, family adjustment, and community inclusion.",
    how_partnership_title: "Awareness & Advocacy",
    how_partnership_desc:
      "We actively work to raise awareness and promote a sense of shared responsibility within communities, encouraging support for the health and wellbeing of vulnerable children.",
    how_cta_title: "See Our Approach in Action",
    how_cta_text:
      "Explore our programs to see how these principles come to life.",
    // Emergencies Page
    emergency_banner: "URGENT APPEAL",
    emergency_title: "Crisis Response",
    emergency_subtitle:
      "When disaster strikes, we are there. Your support provides immediate relief to those who need it most.",
    emergency_crisis_title: "Current Crisis: Drought in Tigray",
    emergency_crisis_desc:
      "A severe drought is threatening the lives of thousands in the Tigray region. Crops have failed, water sources have dried up, and families are facing acute food insecurity.",
    emergency_affected: "People Affected",
    emergency_affected_num: "50,000+",
    emergency_deployed: "Aid Unit",
    emergency_deployed_num: "10 Tons",
    emergency_raised: "Goal Amount",
    emergency_raised_num: "$125,000",
    emergency_action_title: "Our Action on the Ground",
    emergency_action_desc:
      "Our team has distributed 5,000 emergency food packs this week. We are also trucking in clean water to the hardest-hit villages and providing emergency medical care to malnourished children.",
    emergency_donate_btn: "Donate to Emergency Fund",
    emergency_urgent: "This is an active emergency. Every minute counts.",
    // Ways to Give Page
    ways_title: "Ways to Give",
    ways_subtitle:
      "There are many ways to support our mission. Choose the one that fits your life and helps us create lasting change.",
    ways_monthly_title: "Monthly Giving",
    ways_monthly_desc:
      "Join our community of monthly partners providing sustainable support. Recurring gifts allow us to plan ahead and respond quickly to emergencies.",
    ways_onetime_title: "One-Time Donation",
    ways_onetime_desc:
      "Make an immediate impact today. Every dollar goes directly to our programs on the ground.",
    ways_inkind_title: "In-Kind Donations",
    ways_inkind_desc:
      "We accept donations of books, medical supplies, and computers. Please contact us to coordinate drop-off or shipping.",
    ways_legacy_title: "Legacy Giving",
    ways_legacy_desc:
      "Include the Foundation in your estate plans to leave a lasting legacy of hope for future generations.",
    ways_tribute_title: "Tribute Gifts",
    ways_tribute_desc:
      "Donate in honor of a loved one for a birthday, wedding, or in memory. We will send a personalized card to the recipient.",
    ways_stock_title: "Stock & Crypto",
    ways_stock_desc:
      "Donating stock or cryptocurrency can be a tax-smart way to give. We accept major cryptocurrencies and stock transfers.",
    ways_cta_title: "Ready to Give?",
    ways_cta_text:
      "Your generosity fuels our work. Thank you for being a partner in change.",
    // News Page
    news_title: "Latest News & Stories",
    news_subtitle:
      "Read about the impact of your support, updates from the field, and the stories of the people we serve.",
    news_featured: "Featured Story",
    news_latest: "Latest Updates",
    news_read_more: "Read Full Story",
    news_field_reports: "Field Reports",
    // Partner Page
    partner_title: "Partner With Us",
    partner_subtitle:
      "Together, we can achieve more. We partner with corporations, foundations, and institutions to drive large-scale impact.",
    partner_why_title: "Why Partner With Us?",
    partner_why_desc:
      "Gain on-the-ground expertise, demonstrate corporate social responsibility, and leverage your funds for maximum impact in vulnerable communities.",
    partner_corporate: "Corporate Sponsorship",
    partner_corporate_desc:
      "Sponsor a specific project or event and align your brand with a cause that matters.",
    partner_grant: "Grant Funding",
    partner_grant_desc:
      "We have a proven track record of managing large grants with transparency and measurable results.",
    partner_employee: "Employee Giving",
    partner_employee_desc:
      "Engage your team with matching gift programs or workplace fundraising campaigns.",
    partner_probono: "Pro Bono Services",
    partner_probono_desc:
      "Donate your professional skills or services to help us reduce administrative costs.",
    partner_cta_title: "Let's Collaborate",
    partner_cta_text:
      "Contact our partnerships team to discuss how we can work together.",
    partner_contact_label: "Contact Partnerships Team",
    // Financial Accountability Page
    financial_title: "Financial Accountability",
    financial_subtitle:
      "We are committed to complete transparency. Review our financial documents to see exactly how we manage our resources.",
    financial_annual_title: "Annual Reports",
    financial_annual_desc:
      "Comprehensive overviews of our activities, impact, and financial performance for each year.",
    financial_audited_title: "Audited Financial Statements",
    financial_audited_desc:
      "Independent audits verifying our financial health and compliance with accounting standards.",
    financial_filing_title: "Tax Filings (990)",
    financial_filing_desc:
      "Our official tax returns filed with the IRS, detailing our revenue, expenses, and executive compensation.",
    financial_download: "Download PDF",
    financial_breakdown_title: "Expense Breakdown",
    financial_certifications: "Certifications & Ratings",
    // Advocacy Page
    advocacy_title: "Advocacy & Policy",
    advocacy_subtitle:
      "We don't just treat symptoms; we fight the root causes of poverty by advocating for systemic change.",
    advocacy_campaign_1_title: "Education Budget Allocation",
    advocacy_campaign_1_desc:
      "Campaigning for the government to increase the budget allocation for rural primary schools to ensure every child has a desk and a teacher.",
    advocacy_campaign_2_title: "Clean Water Access Rights",
    advocacy_campaign_2_desc:
      "Working with local authorities to legally guarantee access to clean water sources for remote communities.",
    advocacy_campaign_3_title: "Healthcare Policy Reform",
    advocacy_campaign_3_desc:
      "Advocating for policies that incentivize medical professionals to work in underserved rural areas.",
    advocacy_why_title: "Why Advocacy Matters",
    advocacy_why_desc:
      "Changing a single policy can help millions of people. It creates sustainable, long-term improvement that charity alone cannot achieve.",
    advocacy_get_involved_title: "Get Involved",
    advocacy_sign_petition: "Sign the Petition",
    advocacy_share: "Share on Social Media",
    advocacy_write: "Write to Your Representative",
    // Safeguarding Page
    safeguarding_title: "Safeguarding & Ethics",
    safeguarding_subtitle:
      "We are committed to the highest ethical standards and the protection of the vulnerable people we serve.",
    safeguarding_commitment_title: "Our Commitment",
    safeguarding_commitment_desc:
      "The Foundation has a zero-tolerance policy for abuse, exploitation, and harassment. We are committed to protecting all beneficiaries, especially children and vulnerable adults.",
    safeguarding_child_title: "Child Safeguarding Policy",
    safeguarding_child_desc:
      "Strict protocols ensuring that all staff, volunteers, and partners interacting with children are vetted and trained to prevent harm.",
    safeguarding_psea_title:
      "Protection from Sexual Exploitation and Abuse (PSEA)",
    safeguarding_psea_desc:
      "Comprehensive measures to prevent sexual exploitation and abuse by our personnel and partners.",
    safeguarding_reporting_title: "Reporting Mechanism",
    safeguarding_reporting_desc:
      "We have a confidential, safe, and accessible process for anyone to report concerns or violations. All reports are taken seriously and investigated thoroughly.",
    safeguarding_download_btn: "Download Policy (PDF)",
    safeguarding_contact_label: "Report a Concern",
  },
  am: {
    nav_story: "ታሪካችን",
    nav_programs: "ፕሮግራሞች",
    nav_transparency: "ግልጽነት",
    nav_contact: "ያግኙን",
    nav_donate: "አሁን ይለግሱ",
    // Navbar Dropdowns
    nav_about: "ስለ እኛ",
    nav_our_work: "ስራችን",
    nav_get_involved: "ይሳተፉ",
    nav_impact: "ተጽዕኖ",
    nav_policies: "ፖሊሲዎች",
    nav_how_we_work: "እንዴት እንደምንሰራ",
    nav_emergencies: "የአደጋ ጊዜ ሁኔታዎች",
    nav_ways_to_give: "የመለገስ መንገዶች",
    nav_news: "ወቅታዊ ዜና",
    nav_partner: "ከእኛ ጋር ይስሩ",
    nav_financial: "የፋይናንስ ተጠያቂነት",
    nav_advocacy: "ጥብቅና እና ፖሊሲ",
    nav_safeguarding: "ደህንነት መጠበቅ",
    nav_volunteer_internship: "በጎ ፈቃደኝነት እና የስራ ልምድ",
    nav_legal_governance: "ህጋዊ እና አስተዳደር",
    nav_impact_results: "ተጽዕኖ እና ውጤቶች",
    footer_desc:
      "በትምህርት፣ በጤና እና በዘላቂ ልማት በዓለም ዙሪያ ባሉ ማህበረሰቦች ውስጥ ዘላቂ ለውጥ ለማምጣት ቁርጠኛ ነው።",
    footer_quick_links: "ፈጣን አገናኞች",
    footer_financials: "ፋይናንስ እና ተጽዕኖ",
    footer_ways_to_give: "የመለገስ መንገዶች",
    footer_contact_us: "ያግኙን",
    footer_stay_updated: "ወቅታዊ ሁኑ",
    footer_subscribe_desc: "ለተጽዕኖ ታሪኮች እና ዝመናዎች ለጋዜጣችን ይመዝገቡ።",
    footer_email_placeholder: "የኢሜይል አድራሻዎ",
    footer_subscribe_btn: "ይመዝገቡ",
    footer_privacy: "የግላዊነት ፖሊሲ",
    footer_terms: "የአገልግሎት ውሎች",
    footer_rights: "መብቱ በሕግ የተጠበቀ ነው።",
    home_hero_title_1: "ማህበረሰቦችን ማብቃት፣",
    home_hero_title_2: "ህይወትን መለወጥ",
    home_hero_subtitle:
      "ለእያንዳንዱ ልጅ ትምህርት፣ ጤና አጠባበቅ እና ደህንነቱ የተጠበቀ አካባቢ ያለበት ዓለም እናምናለን።",
    home_hero_programs_btn: "ፕሮግራሞቻችን",
    home_stats_lives: "የተቀየሩ ህይወቶች",
    home_stats_countries: "የሚያገለግሉ አገሮች",
    home_stats_water: "ንጹህ ውሃ ፕሮጀክቶች",
    home_mission_quote:
      '"እርዳታ ብቻ አንሰጥም፤ ማህበረሰቦች በራሳቸው ሁኔታ ለማደግ የሚያስችሏቸው አጋርነቶችን እንገነባለን።"',
    home_mission_text:
      "ክብር የሰው መብት ነው ብለን እናምናለን፣ ከድህነት፣ ከረሃብ እና ከበሽታ ዘላቂ መፍትሄዎችን ለመፍጠር ከአካባቢው መሪዎች ጋር አብረን እንሰራለን።",
    home_who_we_are: "ህብረት ለብጉ የተመዘገበ ኤንጂኦ ነው፣ ማህበረሰብ ማብቃት እና ዘላቂ ልማት ላይ ያተኮረ።",
    home_what_we_solve:
      "በቂ አገልግሎት በማያገኙ ማህበረሰቦች ውስጥ ድህነት፣ ረሃብ፣ ትምህርት እና ጤና እጥረት፣ እና የውሃ እጥረትን እንይዛለን።",
    home_who_we_help:
      "በኢትዮጵያ እና በቀይ ባህር አካባቢ ያሉ ተጋላጭ ቤተሰቦች፣ ልጆች፣ ሴቶች እና ገጠር ማህበረሰቦችን እንረዳለን።",
    home_our_vision:
      "የረጅም ጊዜ እምነታችን እያንዳንዱ ማህበረሰብ በራሱ የማደግ መሳሪያዎችን እና ዕድሎችን ያለው ዓለም ነው።",
    home_read_story: "ታሪካችንን ያንብቡ",
    home_programs_title: "ዋና ፕሮግራሞቻችን",
    home_programs_subtitle: "ትልቁን ለውጥ ማምጣት የምንችልባቸው ትኩረቶች።",
    home_program_edu_title: "ትምህርት",
    home_program_edu_desc: "ትምህርት ቤቶችን መገንባት እና መምህራንን ማሰልጠን አቅምን ለመክፈት።",
    home_program_water_title: "ንጹህ ውሃ",
    home_program_water_desc: "ለደህንነቱ የተጠበቀ የመጠጥ ውሃ ዘላቂ መዳረሻ መስጠት።",
    home_program_health_title: "ጤና አጠባበቅ",
    home_program_health_desc: "ለገጠር አካባቢዎች የሞባይል ክሊኒኮች እና የእናቶች ጤና ድጋፍ።",
    home_learn_more: "ተጨማሪ ይወቁ",
    home_testimonials_title: "ምስክርነቶች",
    home_testimonials_subtitle: "ለጋስነትዎ ህይወታቸው ከተቀየሩ ሰዎች ይስሙ።",
    home_cta_title: "ለውጥ ለማምጣት ዝግጁ ነዎት?",
    home_cta_text: "ድጋፍዎ ዛሬ ህይወትን ሊቀይር ይችላል። ከህዝብ ልገሳ 100% ወደ ፕሮግራሞቻችን ይሄዳል።",
    home_give_today: "ዛሬ ይለግሱ",
    about_title: "ታሪካችን",
    about_subtitle: "ከአንድ ክፍል ወደ ዓለም አቀፍ እንቅስቃሴ፣ ከፋውንዴሽኑ በስተጀርባ ያለውን ጉዞ ይወቁ።",
    about_spark_title: "የተስፋ ብልጭታ",
    about_spark_text_1:
      "የጀመረው በ2010 መስራታችን ሳራ ሚቼል በገጠር ኬንያ የምትገኝን ትንሽ መንደር ስትጎበኝ ነው። ባገኘቻቸው ልጆች ውስጥ አስደናቂ አቅም አየች፣ ነገር ግን የረሃብ እና የግብዓት እጥረት አሰቃቂ እንቅፋቶችን ተመለከተች።",
    about_spark_text_2:
      '"አማኒ የተባለችውን ወጣት ልጅ አይኖች ውስጥ መመልከቴን አስታውሳለሁ" ትላለች ሳራ። "ዶክተር መሆን ትፈልግ ነበር፣ ነገር ግን ትምህርት ቤቷ መጽሐፍት አልነበሩትም፣ እና ብዙ ጊዜ ያለ ተገቢ ምግብ ቀናትን ታሳልፍ ነበር። ዝም ብዬ መሄድ እንደማልችል አውቅ ነበር።"',
    about_spark_text_3:
      "አንድ ቤተ-መጽሐፍት ለመገንባት እንደ የገቢ ማሰባሰብ የጀመረው ወደ ዓለም አቀፍ ድርጅት አድጓል። ዛሬ ፋውንዴሽኑ በ15 አገሮች ውስጥ ይሠራል፣ በዚያው የመጀመሪያ ብልጭታ እየተመራ፡ ተሰጥኦ ዓለም አቀፋዊ ነው፣ ግን ዕድል አይደለም።",
    about_mission_title: "ተልዕኮአችን እና እሴቶቻችን",
    about_mission_subtitle: "እያንዳንዱን ውሳኔያችንን የሚመሩ መርሆዎች።",
    about_value_integrity: "ታማኝነት",
    about_value_integrity_desc: "በድርጊታችን ግልጽ ነን እና ለምናገለግላቸው ማህበረሰቦች ተጠያቂ ነን።",
    about_value_empowerment: "ማብቃት",
    about_value_empowerment_desc:
      "እርዳታ ብቻ አንሰጥም፤ ለራስ መቻል እና ለረጅም ጊዜ እድገት መሳሪያዎችን እንሰጣለን።",
    about_value_compassion: "ርህራሄ",
    about_value_compassion_desc:
      "እያንዳንዱን ግለሰብ በክብር፣ በአክብሮት እና በጥልቅ ሰብአዊ ግንኙነት እንይዛለን።",
    about_team_title: "ቡድናችንን ያግኙ",
    about_team_subtitle: "ከመጋረጃው በስተጀርባ የሚሰሩ ቁርጠኛ ግለሰቦች።",
    programs_title: "ፕሮግራሞቻችን",
    programs_subtitle:
      "ጥረታችንን በጣም አስፈላጊ በሆኑ ቦታዎች ላይ እናተኩራለን። መሬት ላይ ተጨባጭ ለውጥ እያመጣን ያለነው በዚህ መንገድ ነው።",
    programs_edu_title: "ትምህርት ለሁሉም",
    programs_edu_desc:
      "ትምህርት የድህነትን ዑደት ለመስበር ቁልፍ ነው ብለን እናምናለን። ፕሮግራማችን ደህንነቱ የተጠበቀ ትምህርት ቤቶችን ይገነባል፣ አስፈላጊ የመማሪያ ቁሳቁሶችን ያቀርባል እና የአካባቢ መምህራንን ያሰለጥናል።",
    programs_edu_impact:
      "ባለፉት 5 ዓመታት 45 ትምህርት ቤቶችን ገንብቷል እና ከ12,000 በላይ ልጆችን አስተምሯል።",
    programs_water_title: "የንጹህ ውሃ ተነሳሽነት",
    programs_water_desc:
      "የንጹህ ውሃ አቅርቦት ሁሉንም ነገር ይለውጣል። ጉድጓዶችን እንቆፍራለን፣ የማጣሪያ ስርዓቶችን እንጭናለን እና በሽታን ለመቀነስ እና የህይወት ጥራትን ለማሻሻል የንጽህና ልምዶችን እናስተምራለን።",
    programs_water_impact:
      "ለ50 ማህበረሰቦች ንጹህ የመጠጥ ውሃ አቅርቧል፣ በውሃ ወለድ በሽታዎችን በ60% ቀንሷል።",
    programs_health_title: "የማህበረሰብ ጤና",
    programs_health_desc:
      "የሞባይል ክሊኒኮቻችን ለሩቅ አካባቢዎች አስፈላጊ የጤና እንክብካቤን ያመጣሉ። በእናቶች ጤና፣ በክትባት እና እንደ ወባ ያሉ የተለመዱ ግን ገዳይ በሽታዎችን በማከም ላይ እናተኩራለን።",
    programs_health_impact:
      "25,000 ታካሚዎችን አክሟል እና ለ3,000 እናቶች የቅድመ ወሊድ እንክብካቤ ሰጥቷል።",
    programs_impact_label: "የተጽዕኖ ድምቀት",
    programs_support_btn: "ይህንን ዓላማ ይደግፉ",
    programs_support_message:
      "ትምህርት በስራችን ልብ ነው፣ እና እነዚህ ስኬቶች ብቻ በ� continued community support.",
    donate_title: "ዛሬ ለውጥ ያምጡ",
    donate_subtitle: "ደህንነቱ የተጠበቀ ልገሳዎ አስፈላጊ ስራችንን እንድንቀጥል ይረዳናል።",
    donate_amount_title: "የልገሳ መጠን ይምረጡ",
    donate_custom_placeholder: "ብጁ መጠን",
    donate_info_title: "የእርስዎ መረጃ",
    donate_first_name: "የመጀመሪያ ስም",
    donate_last_name: "የአባት ስም",
    donate_email: "የኢሜይል አድራሻ",
    donate_payment_title: "የክፍያ ዝርዝሮች",
    donate_card_number: "የካርድ ቁጥር",
    donate_submit_btn: "ይለግሱ",
    donate_secure: "ደህንነቱ የተጠበቀ 256-ቢት SSL የተመሰጠረ ክፍያ",
    donate_tier_1: "ለ5 ልጆች የትምህርት ቁሳቁሶችን ያቀርባል",
    donate_tier_2: "አንድን ልጅ ለአንድ ወር ሙሉ ይመግባል",
    donate_tier_3: "ለአንድ ቤተሰብ ንጹህ ውሃ ያቀርባል",
    donate_tier_4: "ለአንድ መንደር የህክምና ምርመራዎችን ይደግፋል",
    transparency_title: "ግልጽነት እና ተጽዕኖ",
    transparency_subtitle:
      "እምነት እንደሚገኝ እናምናለን። ልገሳዎችዎ ለውጥ ለመፍጠር እንዴት ጥቅም ላይ እንደሚውሉ እነሆ።",
    transparency_breakdown_title: "ገንዘብዎ የት ይሄዳል",
    transparency_program_services: "የፕሮግራም አገልግሎቶች",
    transparency_program_desc: "ትምህርት ቤቶችን፣ ክሊኒኮችን እና የውሃ ፕሮጀክቶችን በቀጥታ መደገፍ።",
    transparency_fundraising: "ገቢ ማሰባሰብ",
    transparency_fundraising_desc: "ተጽዕኖአችንን ለማሳደግ ዝግጅቶች እና ዘመቻዎች።",
    transparency_management: "አስተዳደር እና አጠቃላይ",
    transparency_management_desc: "የአስተዳደር ወጪዎች እና ቁጥጥር።",
    transparency_accountability_title: "ተጠያቂነት በመጀመሪያ",
    transparency_accountability_text_1:
      "ለከፍተኛ የፋይናንስ ተጠያቂነት ደረጃዎች ቁርጠኛ ነን። የሚሰጡት እያንዳንዱ ዶላር ከፍተኛ ተጽዕኖን ለማረጋገጥ ክትትል እና ኦዲት ይደረግበታል።",
    transparency_accountability_text_2:
      "የአስተዳደር ወጪዎቻችን በግል ለጋሾች ቡድን ይሸፈናሉ፣ ይህም ማለት ከህዝብ ልገሳዎች ውስጥ ከፍተኛ ድርሻ በቀጥታ ወደ ሜዳ ይሄዳል ማለት ነው።",
    transparency_report_btn: "2023 ዓመታዊ ሪፖርት",
    transparency_financials_btn: "ኦዲት የተደረገ ፋይናንስ",
    transparency_stories_title: "እውነተኛ ታሪኮች፣ እውነተኛ ተጽዕኖ",
    contact_title: "ያግኙን",
    contact_subtitle: "ስለ ስራችን ጥያቄዎች አሉዎት ወይስ መሳተፍ ይፈልጋሉ? ከእርስዎ መስማት እንወዳለን።",
    contact_info_title: "የእውቂያ መረጃ",
    contact_general: "አጠቃላይ ጥያቄዎች",
    contact_donations: "ልገሳዎች",
    contact_phone: "ስልክ",
    contact_hq: "ዋና መሥሪያ ቤት",
    contact_form_title: "መልዕክት ይላኩልን",
    contact_name: "ስም",
    contact_email: "ኢሜይል",
    contact_phone_number: "ስልክ ቁጥር",
    contact_subject: "ርዕሰ ጉዳይ",
    contact_message: "መልዕክት",
    contact_send_btn: "መልዕክት ይላኩ",
    // How We Work Page
    how_title: "እንዴት እንደምንሰራ",
    how_subtitle:
      "እኛ ስልታዊ፣ በአካባቢው የሚመራ ድርጅት ነን። እያንዳንዱን ልገሳ ወደ ዘላቂ እና ሊለካ የሚችል ለውጥ የሚቀይረው ፍልስፍና ይህ ነው።",
    how_locally_led_title: "በአካባቢው የሚመራ",
    how_locally_led_desc:
      "እኛ ከኢትዮጵያ ማህበረሰቦች ጋር እንሰራለን እንጂ ለእነሱ አይደለም። የአካባቢ ሰራተኞችን እንቀጥራለን፣ ከማህበረሰብ መሪዎች ጋር አጋርነት እንፈጥራለን፣ እና እያንዳንዱ ፕሮግራም በሚያገለግላቸው ሰዎች የተቀረፀ መሆኑን እናረጋግጣለን። ከውስጥ የሚመጣ ለውጥ ከውጭ ከተጫነ ለውጥ ይልቅ ረጅም ጊዜ ይቆያል።",
    how_needs_title: "የፍላጎት ግምገማ በቅድሚያ",
    how_needs_desc:
      "አንድ ማህበረሰብ ምን እንደሚያስፈልገው እናውቃለን ብለን በጭራሽ አንገምትም። ማንኛውንም ፕሮጀክት ከመጀመራችን በፊት፣ መሬት ላይ ያሉትን ትክክለኛ ቅድሚያ የሚሰጣቸውን ነገሮች ለመረዳት ጥልቅ ግምገማዎችን — የማህበረሰብ ምክክሮችን፣ የዳሰሳ ጥናቶችን እና የመስክ ጉብኝቶችን — እናካሂዳለን።",
    how_sustainability_title: "ለዘላቂነት የተገነባ",
    how_sustainability_desc:
      "እኛ ጉድጓድ ብቻ አንገነባም። ለአስርተ ዓመታት እንዲንከባከበው የአካባቢ ኮሚቴ እናሰለጥናለን። ግባችን የእኛ ቀጥተኛ ተሳትፎ ካበቃ በኋላም መስራታቸውን የሚቀጥሉ ስርዓቶችን መፍጠር ነው።",
    how_partnership_title: "ስልታዊ አጋርነቶች",
    how_partnership_desc:
      "ሀብቶችን ለማ maksimize እና ድግግሞሽን ለማስወገድ ከመንግስት፣ ከአካባቢ መንግስታዊ ያልሆኑ ድርጅቶች እና ከአለም አቀፍ አካላት ጋር አብረን እንሰራለን። ውስብስብ ችግሮችን ለመፍታት ትብብር ቁልፍ ነው።",
    how_cta_title: "አቀራረባችንን በተግባር ይመልከቱ",
    how_cta_text: "እነዚህ መርሆዎች እንዴት ወደ ህይወት እንደሚመጡ ለማየት ፕሮግራሞቻችንን ያስሱ።",
    // Emergencies Page
    emergency_banner: "አስቸኳይ ጥሪ",
    emergency_title: "የቀውስ ምላሽ",
    emergency_subtitle:
      "አደጋ ሲከሰት፣ እኛ እዚያ አለን። ድጋፍዎ በጣም ለሚያስፈልጋቸው ሰዎች ፈጣን እርዳታ ይሰጣል።",
    emergency_crisis_title: "ወቅታዊ ቀውስ፡ ድርቅ በትግራይ",
    emergency_crisis_desc:
      "ከባድ ድርቅ በትግራይ ክልል በሺዎች የሚቆጠሩ ሰዎችን ህይወት አደጋ ላይ ጥሏል። ሰብሎች ወድመዋል፣ የውሃ ምንጮች ደርቀዋል፣ እና ቤተሰቦች ከፍተኛ የምግብ ዋስትና እጦት ገጥሟቸዋል።",
    emergency_affected: "የተጎዱ ሰዎች",
    emergency_affected_num: "50,000+",
    emergency_deployed: "የተሰማራ እርዳታ",
    emergency_deployed_num: "10 ቶን",
    emergency_raised: "የተሰበሰበ ገንዘብ",
    emergency_raised_num: "$125,000",
    emergency_action_title: "መሬት ላይ ያለን ተግባር",
    emergency_action_desc:
      "ቡድናችን በዚህ ሳምንት 5,000 የአስቸኳይ ጊዜ የምግብ እሽጎችን አከፋፍሏል። እንዲሁም በጣም ለተጎዱ መንደሮች ንጹህ ውሃ በቦቴ እያቀረብን እና ለተመጣጠነ ምግብ እጥረት ላለባቸው ህጻናት የአስቸኳይ ጊዜ የህክምና እርዳታ እየሰጠን ነው።",
    emergency_donate_btn: "ለአደጋ ጊዜ ፈንድ ይለግሱ",
    emergency_urgent: "ይህ ንቁ የአደጋ ጊዜ ነው። እያንዳንዱ ደቂቃ ዋጋ አለው።",
    // Ways to Give Page
    ways_title: "የመለገስ መንገዶች",
    ways_subtitle:
      "ተልዕኮአችንን ለመደገፍ ብዙ መንገዶች አሉ። ከህይወትዎ ጋር የሚስማማውን ይምረጡ እና ዘላቂ ለውጥ እንድንፈጥር ያግዙን።",
    ways_monthly_title: "ወርሃዊ ልገሳ",
    ways_monthly_desc:
      "ዘላቂ ድጋፍ የሚሰጡ የወርሃዊ አጋሮቻችንን ማህበረሰብ ይቀላቀሉ። ተደጋጋሚ ስጦታዎች አስቀድመን እንድናቅድ እና ለአደጋ ጊዜዎች በፍጥነት ምላሽ እንድንሰጥ ያስችሉናል።",
    ways_onetime_title: "የአንድ ጊዜ ልገሳ",
    ways_onetime_desc:
      "ዛሬ ፈጣን ተጽዕኖ ያሳድሩ። እያንዳንዱ ዶላር በቀጥታ መሬት ላይ ላሉ ፕሮግራሞቻችን ይሄዳል።",
    ways_inkind_title: "የዓይነት ልገሳዎች",
    ways_inkind_desc:
      "የመጽሐፍት፣ የህክምና ቁሳቁሶች እና የኮምፒተሮች ልገሳዎችን እንቀበላለን። ለማስረከብ ወይም ለመላክ እባክዎን ያነጋግሩን።",
    ways_legacy_title: "የውርስ ስጦታ",
    ways_legacy_desc:
      "ለወደፊት ትውልዶች ዘላቂ የተስፋ ውርስ ለመተው ፋውንዴሽኑን በኑዛዜ ዕቅድዎ ውስጥ ያካትቱ።",
    ways_tribute_title: "የመታሰቢያ ስጦታዎች",
    ways_tribute_desc:
      "ለምትወዱት ሰው ክብር ለልደት፣ ለሠርግ ወይም ለመታሰቢያ ይለግሱ። ለተቀባዩ የግል ካርድ እንልካለን።",
    ways_stock_title: "አክሲዮን እና ክሪፕቶ",
    ways_stock_desc:
      "አክሲዮን ወይም ክሪፕቶካረንሲ መለገስ ታክስን የሚቀንስ የመስጠት መንገድ ሊሆን ይችላል። ዋና ዋና ክሪፕቶካረንሲዎችን እና የአክሲዮን ዝውውሮችን እንቀበላለን።",
    ways_cta_title: "ለመስጠት ዝግጁ ነዎት?",
    ways_cta_text: "ለጋስነትዎ ስራችንን ያንቀሳቅሳል። የለውጥ አጋር ስለሆኑ እናመሰግናለን።",
    // News Page
    news_title: "ወቅታዊ ዜና እና ታሪኮች",
    news_subtitle:
      "ስለ ድጋፍዎ ተጽዕኖ፣ ከመስክ የተገኙ ዝመናዎችን እና ስለምናገለግላቸው ሰዎች ታሪኮች ያንብቡ።",
    news_featured: "ተለይቶ የቀረበ ታሪክ",
    news_latest: "የቅርብ ጊዜ ዝመናዎች",
    news_read_more: "ሙሉ ታሪኩን ያንብቡ",
    news_field_reports: "የመስክ ሪፖርቶች",
    // Partner Page
    partner_title: "ከእኛ ጋር ይስሩ",
    partner_subtitle:
      "በጋራ፣ የበለጠ ማሳካት እንችላለን። ሰፊ ተጽዕኖ ለመፍጠር ከኮርፖሬሽኖች፣ ፋውንዴሽኖች እና ተቋማት ጋር አጋርነት እንፈጥራለን።",
    partner_why_title: "ለምን ከእኛ ጋር አጋርነት ይፈጥራሉ?",
    partner_why_desc:
      "መሬት ላይ ያለ እውቀትን ያግኙ፣ የኮርፖሬት ማህበራዊ ኃላፊነትን ያሳዩ፣ እና በተጋላጭ ማህበረሰቦች ውስጥ ለከፍተኛ ተጽዕኖ ፈንድዎን ይጠቀሙ።",
    partner_corporate: "የኮርፖሬት ስፖንሰርሺፕ",
    partner_corporate_desc:
      "አንድን ፕሮጀክት ወይም ዝግጅት ስፖንሰር ያድርጉ እና የምርት ስምዎን ትርጉም ካለው ዓላማ ጋር ያስተካክሉ።",
    partner_grant: "የድጋፍ ፈንድ",
    partner_grant_desc: "ትላልቅ ድጋፎችን በግልጽነት እና በሚለካ ውጤት የማስተዳደር የተረጋገጠ ታሪክ አለን።",
    partner_employee: "የሰራተኞች ልገሳ",
    partner_employee_desc:
      "ተመጣጣኝ የስጦታ ፕሮግራሞችን ወይም የስራ ቦታ የገቢ ማሰባሰብ ዘመቻዎችን በመጠቀም ቡድንዎን ያሳትፉ።",
    partner_probono: "የነጻ ሙያ አገልግሎቶች",
    partner_probono_desc:
      "የአስተዳደር ወጪዎችን እንድንቀንስ ለማገዝ የሙያ ክህሎቶችዎን ወይም አገልግሎቶችዎን ይለግሱ።",
    partner_cta_title: "እንተባበር",
    partner_cta_text: "እንዴት አብረን መስራት እንደምንችል ለመወያየት የአጋርነት ቡድናችንን ያነጋግሩ።",
    partner_contact_label: "የአጋርነት ቡድንን ያነጋግሩ",
    // Financial Accountability Page
    financial_title: "የፋይናንስ ተጠያቂነት",
    financial_subtitle:
      "ለሙሉ ግልጽነት ቁርጠኞች ነን። ሀብቶቻችንን እንዴት እንደምናስተዳድር በትክክል ለማየት የፋይናንስ ሰነዶቻችንን ይገምግሙ።",
    financial_annual_title: "ዓመታዊ ሪፖርቶች",
    financial_annual_desc:
      "የእያንዳንዱን ዓመት እንቅስቃሴዎቻችን፣ ተጽዕኖ እና የፋይናንስ አፈጻጸም አጠቃላይ እይታዎች።",
    financial_audited_title: "ኦዲት የተደረጉ የፋይናንስ መግለጫዎች",
    financial_audited_desc:
      "የፋይናንስ ጤንነታችንን እና የሂሳብ አያያዝ ደረጃዎችን ማክበራችንን የሚያረጋግጡ ገለልተኛ ኦዲቶች።",
    financial_filing_title: "የግብር ፋይሎች (990)",
    financial_filing_desc:
      "ገቢያችንን፣ ወጪያችንን እና የስራ አስፈፃሚ ክፍያዎችን በዝርዝር የሚያሳዩ ለ IRS የገባንባቸው ኦፊሴላዊ የግብር ተመላሾች።",
    financial_download: "PDF አውርድ",
    financial_breakdown_title: "የወጪ ዝርዝር",
    financial_certifications: "የምስክር ወረቀቶች እና ደረጃዎች",
    // Advocacy Page
    advocacy_title: "ጥብቅና እና ፖሊሲ",
    advocacy_subtitle:
      "እኛ ምልክቶችን ብቻ አናክምም፤ ለስርዓታዊ ለውጥ በመሟገት የድህነትን መሰረታዊ መንስኤዎች እንታገላለን።",
    advocacy_campaign_1_title: "የትምህርት በጀት ምደባ",
    advocacy_campaign_1_desc:
      "እያንዳንዱ ልጅ ጠረጴዛ እና መምህር እንዳለው ለማረጋገጥ መንግስት ለገጠር የመጀመሪያ ደረጃ ትምህርት ቤቶች የበጀት ምደባን እንዲጨምር ዘመቻ ማድረግ።",
    advocacy_campaign_2_title: "የንጹህ ውሃ ተደራሽነት መብቶች",
    advocacy_campaign_2_desc:
      "ለርቀት ማህበረሰቦች የንጹህ ውሃ ምንጮች ተደራሽነትን በህግ ለማረጋገጥ ከአካባቢ ባለስልጣናት ጋር መስራት።",
    advocacy_campaign_3_title: "የጤና ፖሊሲ ማሻሻያ",
    advocacy_campaign_3_desc:
      "የህክምና ባለሙያዎች በቂ አገልግሎት በማያገኙ የገጠር አካባቢዎች እንዲሰሩ የሚያበረታቱ ፖሊሲዎችን መደገፍ።",
    advocacy_why_title: "ጥብቅና ለምን ያስፈልጋል",
    advocacy_why_desc:
      "አንድን ፖሊሲ መቀየር በሚሊዮን የሚቆጠሩ ሰዎችን ሊረዳ ይችላል። የበጎ አድራጎት ስራ ብቻውን ሊያሳካው የማይችለውን ዘላቂ እና የረጅም ጊዜ መሻሻል ይፈጥራል።",
    advocacy_get_involved_title: "ይሳተፉ",
    advocacy_sign_petition: "አቤቱታውን ይፈርሙ",
    advocacy_share: "በማህበራዊ ሚዲያ ያጋሩ",
    advocacy_write: "ለተወካይዎ ይጻፉ",
    // Safeguarding Page
    safeguarding_title: "ደህንነት መጠበቅ እና ስነ-ምግባር",
    safeguarding_subtitle:
      "ለከፍተኛ የስነ-ምግባር ደረጃዎች እና ለምናገለግላቸው ተጋላጭ ሰዎች ጥበቃ ቁርጠኞች ነን።",
    safeguarding_commitment_title: "ቁርጠኝነታችን",
    safeguarding_commitment_desc:
      "ፋውንዴሽኑ ለጥቃት፣ ለብዝበዛ እና ለትንኮሳ ዜሮ መቻቻል ፖሊሲ አለው። ሁሉንም ተጠቃሚዎች፣ በተለይም ህጻናትን እና ተጋላጭ አዋቂዎችን ለመጠበቅ ቁርጠኞች ነን።",
    safeguarding_child_title: "የህጻናት ደህንነት መጠበቅ ፖሊሲ",
    safeguarding_child_desc:
      "ከህጻናት ጋር የሚገናኙ ሁሉም ሰራተኞች፣ በጎ ፈቃደኞች እና አጋሮች ጉዳትን ለመከላከል የተጣሩ እና የሰለጠኑ መሆናቸውን የሚያረጋግጡ ጥብቅ ፕሮቶኮሎች።",
    safeguarding_psea_title: "ከወሲባዊ ብዝበዛ እና ጥቃት ጥበቃ (PSEA)",
    safeguarding_psea_desc:
      "በሰራተኞቻችን እና በአጋሮቻችን የሚፈጸሙ ወሲባዊ ብዝበዛን እና ጥቃትን ለመከላከል አጠቃላይ እርምጃዎች።",
    safeguarding_reporting_title: "የሪፖርት ማድረጊያ ዘዴ",
    safeguarding_reporting_desc:
      "ማንኛውም ሰው ስጋቶችን ወይም ጥሰቶችን ሪፖርት የሚያደርግበት ሚስጥራዊ፣ ደህንነቱ የተጠበቀ እና ተደራሽ ሂደት አለን። ሁሉም ሪፖርቶች በቁም ነገር ይታያሉ እና በጥልቀት ይመረመራሉ።",
    safeguarding_download_btn: "ፖሊሲ አውርድ (PDF)",
    safeguarding_contact_label: "ስጋትን ሪፖርት ያድርጉ",
  },
};
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const value = {
    language,
    setLanguage,
    t: translations[language],
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
