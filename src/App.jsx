import React, { useState, useEffect } from 'react';
import { Moon, Sun, Phone, MapPin, Clock, Pizza, ChefHat, Star } from 'lucide-react';

const PizzaWebsite = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  const menuItems = [
    { name: 'Margherita', description: 'Domates sosu, mozzarella, fesleğen', price: '150₺' },
    { name: 'Pepperoni', description: 'Domates sosu, mozzarella, pepperoni', price: '180₺' },
    { name: 'Quattro Formaggi', description: '4 peynir karışımı, domates sosu', price: '200₺' },
    { name: 'Vegetarian', description: 'Sebzeler, mozzarella, domates sosu', price: '170₺' },
    { name: 'BBQ Chicken', description: 'Barbekü sosu, tavuk, mozzarella', price: '190₺' },
    { name: 'Seafood Special', description: 'Deniz ürünleri, mozzarella, özel sos', price: '220₺' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className={`sticky top-0 z-50 backdrop-blur-md ${theme === 'dark' ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Pizza className="w-8 h-8 text-red-500" />
              <h1 className="text-2xl font-bold">Pizza Bella</h1>
            </div>
            <div className="flex items-center gap-6">
              <a href="#menu" className="hover:text-red-500 transition-colors">Menü</a>
              <a href="#about" className="hover:text-red-500 transition-colors">Hakkımızda</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">İletişim</a>
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 opacity-90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Gerçek İtalyan Pizzası</h2>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">Odun ateşinde pişen lezzetler</p>
          <a href="#menu" className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Menüyü Keşfet
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className={`text-center p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <ChefHat className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Usta Şefler</h3>
            <p className="text-gray-600 dark:text-gray-400">İtalya'da eğitim almış ustalarımız</p>
          </div>
          <div className={`text-center p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Pizza className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Taze Malzemeler</h3>
            <p className="text-gray-600 dark:text-gray-400">Her gün taze gelen malzemeler</p>
          </div>
          <div className={`text-center p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5 Yıldızlı Lezzet</h3>
            <p className="text-gray-600 dark:text-gray-400">Müşteri memnuniyeti garantisi</p>
          </div>
        </div>
      </section>

      <section id="menu" className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Menümüz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-red-500 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">Hakkımızda</h2>
          <p className="text-lg leading-relaxed mb-6">
            Pizza Bella, 2010 yılından beri İstanbul'un kalbinde gerçek İtalyan pizza deneyimi sunuyor. 
            Odun ateşinde pişen pizzalarımız, İtalya'dan getirdiğimiz özel un ve taze malzemelerle hazırlanıyor.
          </p>
          <p className="text-lg leading-relaxed">
            Misyonumuz, her lokmada İtalya'nın sıcaklığını ve lezzetini hissettirmek. 
            Ailenizle veya dostlarınızla keyifli vakit geçirebileceğiniz samimi atmosferimizle sizi bekliyoruz.
          </p>
        </div>
      </section>

      <section id="contact" className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">İletişim</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p>0212 555 12 34</p>
            </div>
            <div>
              <MapPin className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Adres</h3>
              <p>Beşiktaş, İstanbul</p>
            </div>
            <div>
              <Clock className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
              <p>11:00 - 23:00</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-8 text-center ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
        <p className="text-gray-600 dark:text-gray-400">© 2024 Pizza Bella. Tüm hakları saklıdır.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default PizzaWebsite;