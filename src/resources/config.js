const routes = {
    "/": true,
    "/technical-support": true,
    "/products": true,
    "/contact": true,
  };
  
  // These are displayed in the navigation header
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/technical-support", label: "Technical Support" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];
  
  export { routes, navLinks };