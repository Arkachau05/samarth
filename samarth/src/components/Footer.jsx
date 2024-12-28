const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 px-4 mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold">MedEase</h4>
          <p>© 2024 MedEase. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Twitter</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;