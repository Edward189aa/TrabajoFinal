function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const isDark = theme === "dark";
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    direccion: "",
    codigoPostal: "",
    telefono: "",
    detalles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Gracias por contactarnos. Pronto nos pondremos en contacto contigo."
    );
    setFormData({
      nombre: "",
      email: "",
      direccion: "",
      codigoPostal: "",
      telefono: "",
      detalles: "",
    });
  };

  const openWhatsApp = () => {
    const message = "Hola GameUsmp, tengo una consulta:";
    window.open(
      `https://wa.me/51999888777?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  return (
                        <div className={`min-h-screen flex flex-col justify-between relative z-10 transition-colors duration-500 ${isDark ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-slate-100" : "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-slate-900"}`}>

      {/* Header actualizado */}
      <header className="py-4 px-6 text-center bg-transparent backdrop-blur-sm fixed top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-purple-700">GameUsmp</span>
            </h1>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-lg font-semibold p-2"
              aria-label="Abrir menú"
            >
              ☰ Menú
            </button>
          </div>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex mt-4 sm:mt-0 text-lg`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-x-6">
              {menuItems.map(({ label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="font-bold hover:text-purple-600 py-2 sm:py-0"
                  onClick={() => (typeof setMenuOpen === "function" ? setMenuOpen(false) : undefined)}
                >
                  {label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="mt-3 sm:mt-0 sm:ml-4 flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/60 text-sm font-semibold shadow-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              {isDark ? (
                <>
                  <i className="fas fa-sun text-purple-200"></i>
                  <span>Modo claro</span>
                </>
              ) : (
                <>
                  <i className="fas fa-moon text-purple-700"></i>
                  <span>Modo oscuro</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Contenido principal con padding-top para el header fijo */}
      <main className="flex-grow py-12 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctenos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
              <h3 className="text-2xl font-bold mb-4">
                <i className="fas fa-envelope text-purple-500 mr-2"></i>
                Formulario de Contacto
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Más detalles
                  </label>
                  <textarea
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Describe tu consulta o pedido especial..."
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm">
                      Acepto recibir información por correo electrónico
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 px-4 rounded-lg font-bold text-white"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Enviar mensaje
                </button>
              </form>
            </div>

            {/* Mapa e Información */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <h3 className="text-2xl font-bold mb-4">
                  <i className="fas fa-map-marker-alt text-purple-500 mr-2"></i>
                  Nuestro Local
                </h3>
                <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.965717584423!2d-76.96592592471448!3d-12.056424088146622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6a154f1f14d%3A0x1a3c3a1a3a1a3a1a!2sAv.%20la%20Fontana%201250%2C%20La%20Molina%2015024!5e0!3m2!1ses-419!2spe!4v1620000000000!5m2!1ses-419!2spe"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-map-pin text-purple-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-semibold">Dirección:</p>
                      <p>Av. la Fontana 1250, La Molina 15024</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-clock text-purple-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-semibold">Horario:</p>
                      <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                      <p>Sábados: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-phone text-purple-500 mr-3"></i>
                    <a
                      href="tel:+51999888777"
                      className="hover:text-purple-600"
                    >
                      +51 999 888 777
                    </a>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-envelope text-purple-500 mr-3"></i>
                    <a
                      href="mailto:contactos@gameusmp.com"
                      className="hover:text-purple-600"
                    >
                      contactos@gameusmp.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <h3 className="text-2xl font-bold mb-4">
                  <i className="fas fa-route text-purple-500 mr-2"></i>
                  Cómo llegar
                </h3>
                <p className="mb-4">
                  Si desea visitarnos personalmente, aquí le indicamos cómo
                  llegar:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Estamos ubicados en Av. La Fontana 1250, La Molina</li>
                  <li>Puede tomar los buses que van por la Av. La Molina</li>
                  <li>Contamos con estacionamiento para clientes</li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="whatsapp-btn bg-green-100 hover:bg-green-200 text-green-800 rounded-lg p-3 text-center transition flex flex-col items-center justify-center"
                  >
                    <i className="fab fa-whatsapp text-xl mb-1"></i>
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>
                  <a
                    href="tel:+51999888777"
                    className="call-btn bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg p-3 text-center transition flex flex-col items-center justify-center"
                  >
                    <i className="fas fa-phone text-xl mb-1"></i>
                    <span className="text-sm font-medium">Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
      {/* Footer gamer */}
      <footer
        className={`mt-12 border-t ${
          isDark
            ? "border-purple-800 bg-slate-950/80 text-slate-200"
            : "border-purple-100 bg-white/90 text-slate-700"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg">
                  <i className="fas fa-gamepad"></i>
                </span>
                <span className="text-xl font-bold text-purple-400">
                  GameUsmp
                </span>
              </div>
              <p className="text-sm opacity-80">
                Tu tienda de confianza para comprar videojuegos y contenido
                digital de forma rápida y segura.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                Navegación
              </h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="../index.html" className="hover:text-purple-400">
                  Inicio
                </a>
                <a href="servicios.html" className="hover:text-purple-400">
                  Servicios
                </a>
                <a href="productos.html" className="hover:text-purple-400">
                  Productos
                </a>
                <a href="contactos.html" className="hover:text-purple-400">
                  Contactos
                </a>
                <a href="minijuego.html" className="hover:text-purple-400">
                  Minijuego
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                Conecta con nosotros
              </h3>
              <div className="flex flex-col space-y-2 text-sm mb-3">
                <a
                  href="mailto:contacto@gameusmp.com"
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <i className="fas fa-envelope"></i>
                  <span>contacto@gameusmp.com</span>
                </a>
                <a
                  href="https://wa.me/51999888777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>+51 999 888 777</span>
                </a>
              </div>
              <div className="flex space-x-4 text-lg">
                <a
                  href="https://instagram.com/gameusmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://tiktok.com/@gameusmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://facebook.com/gameusmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-80">
            <p>© {new Date().getFullYear()} GameUsmp. Todos los derechos reservados.</p>
            <p>Hecho por gamers, para gamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
