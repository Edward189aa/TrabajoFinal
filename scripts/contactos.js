function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const isDark = theme === "dark";
  const [activeProblem, setActiveProblem] = React.useState(null);
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    pedido: "",
    problema: "",
    mensaje: "",
  });
  const [copiedEmail, setCopiedEmail] = React.useState(null);
  const [helpfulRatings, setHelpfulRatings] = React.useState({});

  // Problemas comunes con soluciones mejoradas
  
const problemasComunes = [
  {
    id: 1,
    titulo: "No me llegó el código de mi juego",
    solucion: [
      "Revisa la bandeja de spam o correos no deseados",
      "Confirma que el correo registrado en GameUsmp esté escrito correctamente",
      "Si no lo encuentras, escríbenos a: soporte@gameusmp.com",
    ],
    email: "soporte@gameusmp.com",
  },
  {
    id: 2,
    titulo: "El código dice que ya fue utilizado",
    solucion: [
      "Asegúrate de ingresar el código exactamente como aparece (mayúsculas y números)",
      "Verifica que estés canjeando el código en la plataforma correcta (Steam, PlayStation, Xbox, etc.)",
      "Si el problema continúa, envía una captura de pantalla a: validaciones@gameusmp.com",
    ],
    email: "validaciones@gameusmp.com",
  },
  {
    id: 3,
    titulo: "Mi juego no aparece en mi biblioteca",
    solucion: [
      "Cierra sesión y vuelve a entrar en tu cuenta de la plataforma",
      "Revisa el historial de compras para confirmar la activación",
      "Si sigue sin aparecer, contáctanos por WhatsApp para revisar tu caso",
    ],
    whatsapp: "+51999888777",
  },
  {
    id: 4,
    titulo: "Compré el juego en la plataforma equivocada",
    solucion: [
      "Solo podemos ayudar si el código aún no fue canjeado",
      "Escríbenos indicando tu número de pedido y la plataforma correcta",
      "Nuestro equipo evaluará si es posible un cambio o nota de crédito",
    ],
    email: "cambios@gameusmp.com",
  },
  {
    id: 5,
    titulo: "Tengo problemas con el método de pago",
    solucion: [
      "Verifica que tu tarjeta o medio de pago tenga saldo disponible",
      "Prueba con otro navegador o dispositivo",
      "Si el cobro se realizó pero no ves tu juego, envíanos el comprobante a: pagos@gameusmp.com",
    ],
    email: "pagos@gameusmp.com",
  },
];


  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  const toggleProblem = (id) => {
    setActiveProblem(activeProblem === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hemos recibido tu consulta. Te responderemos dentro de 24 horas.");
    setFormData({
      nombre: "",
      email: "",
      pedido: "",
      problema: "",
      mensaje: "",
    });
  };

  const copyToClipboard = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(id);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const rateSolution = (problemId, isHelpful) => {
    setHelpfulRatings((prev) => ({
      ...prev,
      [problemId]: isHelpful,
    }));
  };

  const openWhatsApp = () => {
    const message = "Hola GameUsmp, necesito ayuda con mi pedido:";
    window.open(
      `https://wa.me/51999888777?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
                        <div className={`min-h-screen flex flex-col justify-between relative z-10 transition-colors duration-500 ${isDark ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-slate-100" : "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-slate-900"}`}>

      {/* Header transparente con el nuevo diseño */}
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

      <main className="pt-32 px-4 pb-24 flex-grow max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Centro de Ayuda</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problemas comunes */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4">Problemas frecuentes</h3>
            <div className="space-y-3">
              {problemasComunes.map((problema) => (
                <div
                  key={problema.id}
                  className={`problema-item border-b border-gray-200 pb-3 ${
                    activeProblem === problema.id ? "active" : ""
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-purple-600"
                    onClick={() => toggleProblem(problema.id)}
                  >
                    <h4 className="font-bold text-lg">
                      <i className="fas fa-question-circle text-purple-500 mr-2"></i>
                      {problema.titulo}
                    </h4>
                    <span className="toggle-icon text-2xl">+</span>
                  </div>
                  <div className="solucion pl-4 mt-2">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {problema.solucion.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    {/* Acciones adicionales */}
                    <div className="mt-3 space-y-2">
                      {problema.email && (
                        <button
                          onClick={() =>
                            copyToClipboard(problema.email, problema.id)
                          }
                          className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 rounded px-2 py-1"
                        >
                          <i className="fas fa-copy mr-1"></i>
                          <span>
                            {copiedEmail === problema.id
                              ? "✓ Copiado!"
                              : `Copiar email`}
                          </span>
                        </button>
                      )}

                      {problema.whatsapp && (
                        <button
                          onClick={openWhatsApp}
                          className="flex items-center text-sm bg-green-100 hover:bg-green-200 text-green-800 rounded px-2 py-1"
                        >
                          <i className="fab fa-whatsapp mr-1"></i>
                          <span>Contactar por WhatsApp</span>
                        </button>
                      )}

                      {/* Valoración de solución */}
                      <div className="mt-2 flex items-center text-sm">
                        <span className="mr-2">¿Te ayudó esta solución?</span>
                        <button
                          onClick={() => rateSolution(problema.id, true)}
                          className={`mr-1 ${
                            helpfulRatings[problema.id] === true
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        >
                          👍
                        </button>
                        <button
                          onClick={() => rateSolution(problema.id, false)}
                          className={`${
                            helpfulRatings[problema.id] === false
                              ? "text-red-500"
                              : "text-gray-400"
                          }`}
                        >
                          👎
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4">Envíanos tu consulta</h3>
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

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Número de pedido (opcional)
                </label>
                <input
                  type="text"
                  name="pedido"
                  value={formData.pedido}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Ej: MY-2023-001"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Tipo de problema
                </label>
                <select
                  name="problema"
                  value={formData.problema}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="envio">Problemas con el envío</option>
                  <option value="pago">Problemas con el pago</option>
                  <option value="producto">Producto dañado/incompleto</option>
                  <option value="sabor">Problemas con el sabor</option>
                  <option value="otro">Otro problema</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Describe tu problema
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  placeholder="Incluye detalles como número de pedido, fotos adjuntas, etc."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm">
                    Acepto recibir información sobre mi reclamo por correo
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

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                O contáctanos directamente
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/51999888777"
                  className="bg-green-100 hover:bg-green-200 text-green-800 rounded-lg p-3 text-center transition"
                >
                  <i className="fab fa-whatsapp text-lg mb-1"></i>
                  <p className="text-sm font-medium">WhatsApp</p>
                </a>
                <a
                  href="tel:+51999888777"
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg p-3 text-center transition"
                >
                  <i className="fas fa-phone text-lg mb-1"></i>
                  <p className="text-sm font-medium">Llamar</p>
                </a>
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
