function App() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const isDark = theme === "dark";

  const menuItems = [
  { label: "INICIO", href: "../index.html" }, 
  { label: "SERVICIOS", href: "../pages/servicios.html" },
  { label: "PRODUCTOS", href: "../pages/productos.html" },
  { label: "CONTACTOS", href: "../pages/contactos.html" },
  { label: "MINIJUEGO", href: "../pages/minijuego.html" },
];

  return (
                        <div className={`min-h-screen flex flex-col justify-between relative z-10 transition-colors duration-500 ${isDark ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-slate-100" : "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-slate-900"}`}>

      <header className="py-4 px-4 sm:px-6 text-center bg-transparent backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              <span className="text-purple-700">GameUsmp</span>
            </h1>

            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="sm:hidden text-lg font-semibold p-2"
              aria-label="Abrir menú"
            >
              ☰ Menú
            </button>
          </div>

          <nav
            className={`${
              menuAbierto ? "flex" : "hidden"
            } sm:flex mt-4 sm:mt-0 text-lg`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-x-6">
              {menuItems.map(({ label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="font-bold hover:text-purple-600 py-2 sm:py-0"
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


      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-purple-600">
              <i className="fas fa-star mr-2"></i>
              Lo que dicen nuestros jugadores
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
              En GameUsmp nos enfocamos en que tu experiencia comprando videojuegos sea rápida,
              segura y llena de diversión. Estas son algunas opiniones reales de gamers que ya
              confiaron en nuestra tienda.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Testimonio 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex gap-4 items-start">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
                alt="Clienta gamer"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
              />
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">Ana Gómez</h3>
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">@anagamer</p>
                <p className="text-gray-700 text-sm text-justify">
                  “Compré un paquete de juegos retro y llegó todo al instante. El proceso de pago
                  fue súper sencillo y el soporte respondió mis dudas en minutos. GameUsmp ya es mi
                  tienda de videojuegos favorita.”
                </p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex gap-4 items-start">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Cliente gamer"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
              />
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">Carlos Rivera</h3>
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">@carlosplays</p>
                <p className="text-gray-700 text-sm text-justify">
                  “Lo mejor es que activé mi juego en menos de 5 minutos. Buenos precios,
                  códigos originales y me llegaron todas las instrucciones por correo. 100%
                  recomendado para gamers de PC.”
                </p>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex gap-4 items-start">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                alt="Cliente gamer"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
              />
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">Lucía Fernández</h3>
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">@luchigames</p>
                <p className="text-gray-700 text-sm text-justify">
                  “Aproveché una oferta de fin de semana y compré tres videojuegos digitales.
                  El panel de pedidos de GameUsmp es clarito y pude descargar todo sin problemas.
                  Me encantó el diseño de la página.”
                </p>
              </div>
            </div>

            {/* Testimonio 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex gap-4 items-start">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
                alt="Cliente gamer"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
              />
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">Diego Torres</h3>
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">@dtgamer</p>
                <p className="text-gray-700 text-sm text-justify">
                  “GameUsmp tiene colecciones de juegos indie que no encontraba en otras tiendas.
                  Me llegaron las claves a mi correo y pude jugar el mismo día. Se nota que está
                  hecha por y para gamers.”
                </p>
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
