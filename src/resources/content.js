const person = {
    firstName: "GLAZZONE",
    lastName: "",
    get name() {
      return `${this.firstName}`;
    },
    role: "Display Technology Specialists",
    avatar: "/images/logo.png",
    email: "baruchglazz@gmail.com",
    phone: "+972-58-448-5115",
    location: "Israel",
    languages: ["English", "Hebrew"],
  };
  
  const newsletter = {
    display: false,
    title: <>Subscribe to {person.name}'s Newsletter</>,
    description: <></>,
  };
  
  const social = [
    {
      name: "Email",
      icon: "email",
      link: `mailto:${person.email}`,
    },
    {
      name: "Phone",
      icon: "phone",
      link: `tel:${person.phone}`,
    },
  ];
  
  const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `Welcome to GLAZZONE`,
    description: `Display Technology Specialists — TFT LCD, Touch Panels, and Display Solutions`,
    headline: <>Welcome to GLAZZONE</>,
    featured: {
      display: true,
      title: <>Your Display Technology Partner</>,
      href: "/products",
    },
    subline: (
      <>
        We specialize in TFT LCD screens, resistive and capacitive touch panels,
        and full display module solutions. Whether you're sourcing components or
        need technical guidance — we're here to help.
      </>
    ),
  };
  
  const about = {
    path: "/about",
    label: "About",
    title: `About GLAZZONE`,
    description: `Learn more about GLAZZONE, display technology specialists.`,
    tableOfContent: {
      display: false,
      subItems: false,
    },
    avatar: {
      display: false,
    },
    calendar: {
      display: false,
      link: "",
    },
    intro: {
      display: true,
      title: "About Us",
      description: (
        <>
          GLAZZONE is a display technology specialist company providing TFT LCD
          modules, resistive touch panels, capacitive touch panels, and complete
          display solutions. We help engineers and businesses find the right
          display components for their projects.
        </>
      ),
    },
    work: { display: false, title: "", experiences: [] },
    studies: { display: false, title: "", institutions: [] },
    technical: { display: false, title: "", skills: [] },
  };
  
  const technical = {
    path: "/technical-support",
    label: "Technical Support",
    title: "Technical Support — How to Find Your LCD",
    description:
      "Learn how to identify and select the right LCD, TFT, or touch panel for your application.",
    categories: [
      {
        id: "panel-lcd",
        title: "Panel LCD",
        subtitle: "Character LCD, Graphic LCD, OLED, COG Modules",
        specs: [
          "TN, STN, HTN, FSTN display types",
          "O.A = Overall Dimension",
          "V.A = View Area",
          "Backlight color and type",
          "Pin configuration: T.H., SMD, or without pins",
          "Interface: COG, Parallel, RS232, SPI",
          "Supply Voltage",
          "Filter color options",
        ],
      },
      {
        id: "tft-lcd",
        title: "TFT LCD",
        subtitle: "Thin Film Transistor Color Displays",
        specs: [
          "Panel Size",
          "Resolution — number of pixels",
          "Pixel pitch",
          "Module size & Outline Dimension",
          "Active Area",
          "Viewing Direction",
          "Operating & Storage Temperature",
          "Data Transfer: RGB, LVDS, MIPI",
          "Number of pins & pin symbol description",
          "Supply Voltage",
          "Backlight — number of LEDs",
          "Brightness (mcd)",
          "IC Driver",
          "Display color",
          "Contrast ratio",
          "Weight",
        ],
      },
      {
        id: "resistive-touch",
        title: "Resistive Touch Panels (RTP)",
        subtitle: "4-wire and 5-wire resistive touch overlays",
        specs: [
          "Panel Size",
          "Active Area",
          "Outline Dimension",
          "Number of pins: 4 or 5",
          "Pin symbol description",
          "Length of the flat cable",
        ],
      },
      {
        id: "capacitive-touch",
        title: "Capacitive Touch Panels (CTP)",
        subtitle: "Projected capacitive touch overlays",
        specs: [
          "Panel Size",
          "Active Area",
          "Outline Dimension",
          "Number of pins",
          "Pin symbol description",
          "Length of the flat cable",
          "Single or multi-touch",
          "Glove touch / finger touch support",
          "Gesture recognition",
          "Driver IC",
        ],
      },
    ],
  };
  
  const products = {
    path: "/products",
    label: "Products",
    title: "Products — Display Modules & Touch Panels",
    description:
      "Browse our range of TFT LCD displays, resistive and capacitive touch panels, and display accessories.",
    categories: [
      "TFT LCD Modules",
      "Resistive Touch Panels",
      "Capacitive Touch Panels",
      "Character LCD Modules",
      "Graphic LCD Modules",
      "OLED Displays",
    ],
  };
  
  const contact = {
    path: "/contact",
    label: "Contact",
    title: "Contact GLAZZONE",
    description:
      "Get in touch with GLAZZONE for display technology inquiries and orders.",
    intro: "We're happy to hear from you. Contact us today to learn more about our business and how you can benefit from working with us.",
    phone: "+972-58-448-5115",
    email: "baruchglazz@gmail.com",
  };
  
  export { person, social, newsletter, home, about, technical, products, contact };