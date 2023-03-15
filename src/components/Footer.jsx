const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="mt-auto py-10 bg-gray-900 text-gray-300">
      <div className="flex justify-center px-10">
        Copyright © Website {year}
      </div>
    </footer>
  );
};

export default Footer;
