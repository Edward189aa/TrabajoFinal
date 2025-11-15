function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const isDark = theme === "dark";
  const [carrito, setCarrito] = React.useState([]);
  const [mostrarCarrito, setMostrarCarrito] = React.useState(false);
  const [sortOption, setSortOption] = React.useState("recomendados");

  const juegos = [
    {
      id: 1,
      nombre: "Elden Ring",
      img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1748630546",
      plataforma: "PC / PS5 / Xbox",
      categoria: "Multi",
      genero: "Action RPG",
      precio: 199,
      ventas: 95,
    },
    {
      id: 2,
      nombre: "FIFA 24",
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
      plataforma: "PC / Consolas",
      categoria: "Multi",
      genero: "Deportes",
      precio: 159,
      ventas: 88,
    },
    {
      id: 3,
      nombre: "Minecraft",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png",
      plataforma: "PC",
      categoria: "PC",
      genero: "Sandbox",
      precio: 89,
      ventas: 100,
    },
    {
      id: 4,
      nombre: "God of War",
      img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1750909504",
      plataforma: "PS4 / PS5",
      categoria: "PSN",
      genero: "Acción / Aventura",
      precio: 149,
      ventas: 82,
    },
    {
      id: 5,
      nombre: "Hollow Knight",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
      plataforma: "PC",
      categoria: "PC",
      genero: "Metroidvania",
      precio: 39,
      ventas: 75,
    },
    {
      id: 6,
      nombre: "Fortnite (V-Bucks)",
      img: "https://store-images.s-microsoft.com/image/apps.30391.71999796408230842.3e86f9b2-2b2a-4f08-b968-a949de7ff3f5.ffd7e7f5-67ee-4643-96b8-421c4e2c3204?q=90&w=480&h=270",
      plataforma: "PC / Consolas",
      categoria: "Multi",
      genero: "Battle Royale",
      precio: 59,
      ventas: 90,
    },
    {
      id: 7,
      nombre: "The Last of Us Part I",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/ca6Dr3k7PXKaDgEbhN9eODeD.png",
      plataforma: "PS5",
      categoria: "PSN",
      genero: "Acción / Historia",
      precio: 179,
      ventas: 92,
    },
    {
      id: 8,
      nombre: "Mario Kart 8 Deluxe",
      img: "https://storegamesperu.com/files/images/productos/1637877600-mario-kart-8-deluxe.jpg",
      plataforma: "Nintendo Switch",
      categoria: "Nintendo",
      genero: "Carreras",
      precio: 169,
      ventas: 98,
    },
    {
      id: 9,
      nombre: "Zelda: Breath of the Wild",
      img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild.jpg",
      plataforma: "Nintendo Switch",
      categoria: "Nintendo",
      genero: "Aventura",
      precio: 189,
      ventas: 96,
    },
    {
      id: 10,
      nombre: "Halo Infinite",
      img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/a81650e53947c65a928d86c97823ff05663a9fc4/capsule_616x353.jpg?t=1759857354",
      plataforma: "Xbox",
      categoria: "Xbox",
      genero: "Shooter",
      precio: 149,
      ventas: 72,
    },
  ];

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  function agregarAlCarrito(juego) {
    setCarrito(function (prev) {
      return prev.concat(juego);
    });
    setMostrarCarrito(true);
  }

  function quitarDelCarrito(index) {
    setCarrito(function (prev) {
      return prev.filter(function (_, i) {
        return i !== index;
      });
    });
  }

  function pagar() {
    if (carrito.length === 0) return;
    alert(
      "¡Gracias por tu compra! 🎮 Revisa tu correo para recibir los códigos digitales."
    );
    setCarrito([]);
    setMostrarCarrito(false);
  }

  var juegosOrdenados = juegos.slice();
  if (sortOption === "masVendidos") {
    juegosOrdenados.sort(function (a, b) {
      return b.ventas - a.ventas;
    });
  } else if (sortOption === "psn") {
    juegosOrdenados.sort(function (a, b) {
      return (b.categoria === "PSN") - (a.categoria === "PSN");
    });
  } else if (sortOption === "nintendo") {
    juegosOrdenados.sort(function (a, b) {
      return (b.categoria === "Nintendo") - (a.categoria === "Nintendo");
    });
  } else if (sortOption === "xbox") {
    juegosOrdenados.sort(function (a, b) {
      return (b.categoria === "Xbox") - (a.categoria === "Xbox");
    });
  } else if (sortOption === "pc") {
    juegosOrdenados.sort(function (a, b) {
      return (b.categoria === "PC") - (a.categoria === "PC");
    });
  }

  return (
    <div
      className={
        "min-h-screen flex flex-col justify-between relative z-10 transition-colors duration-500 " +
        (isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-slate-100"
          : "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-slate-900")
      }
    >
      {/* Header */}
      <header className="py-4 px-6 text-center bg-transparent backdrop-blur-sm fixed top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-purple-700">GameUsmp</span>
            </h1>
            <button
              onClick={function () {
                setMenuOpen(!menuOpen);
              }}
              className="sm:hidden text-lg font-semibold p-2"
              aria-label="Abrir menú"
            >
              ☰ Menú
            </button>
          </div>

          <nav
            className={
              (menuOpen ? "flex" : "hidden") + " sm:flex mt-4 sm:mt-0 text-lg"
            }
          >
            <div className="flex flex-col sm:flex-row items-center gap-x-6">
              {menuItems.map(function (item, i) {
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="font-bold hover:text-purple-600 py-2 sm:py-0"
                    onClick={function () {
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                onClick={function () {
                  setMostrarCarrito(!mostrarCarrito);
                }}
                className="relative p-2 hidden sm:block"
                aria-label="Ver carrito"
              >
                <i className="fas fa-shopping-cart text-xl"></i>
                {carrito.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {carrito.length}
                  </span>
                )}
              </button>
            </div>
            <button
              onClick={function () {
                setTheme(isDark ? "light" : "dark");
              }}
              className="mt-3 sm:mt-0 sm:ml-4 flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/60 text-sm font-semibold shadow-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              {isDark ? (
                <span className="flex items-center gap-2">
                  <i className="fas fa-sun text-purple-200"></i>
                  <span>Modo claro</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <i className="fas fa-moon text-purple-700"></i>
                  <span>Modo oscuro</span>
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Carrito flotante */}
      {mostrarCarrito && (
        <div className="fixed right-4 top-24 sm:top-20 bg-white/95 rounded-xl shadow-xl z-50 p-4 w-72 max-h-[70vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Tu carrito ({carrito.length})</h3>
            <button
              onClick={function () {
                setMostrarCarrito(false);
              }}
              className="text-gray-500 hover:text-black"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {carrito.length === 0 ? (
            <p className="text-sm text-gray-600">Aún no has agregado juegos.</p>
          ) : (
            <>
              <ul className="mb-3">
                {carrito.map(function (item, i) {
                  return (
                    <li
                      key={i}
                      className="carrito-item flex justify-between items-center py-2 px-1 border-b border-gray-100"
                    >
                      <div>
                        <p className="font-medium">{item.nombre}</p>
                        <p className="text-sm text-gray-600">
                          S/ {item.precio}
                        </p>
                      </div>
                      <button
                        onClick={function () {
                          quitarDelCarrito(i);
                        }}
                        className="text-red-400 hover:text-red-600 p-1"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  S/{" "}
                  {carrito.reduce(function (acc, item) {
                    return acc + item.precio;
                  }, 0)}
                </span>
              </div>
              <button
                onClick={pagar}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full shadow"
              >
                Finalizar compra
              </button>
            </>
          )}
        </div>
      )}

      {/* Contenido principal */}
      <main className="pt-28 pb-20 px-6 flex-grow">
        <section className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Catálogo de videojuegos
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-xl">
                Elige tu próximo juego digital. Todos nuestros productos son
                códigos originales para canjear en plataformas oficiales como
                Steam, PlayStation, Xbox y Nintendo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="text-sm font-semibold uppercase tracking-wide">
                Ordenar por
              </label>
              <select
                value={sortOption}
                onChange={function (e) {
                  setSortOption(e.target.value);
                }}
                className="border border-purple-300 rounded-full px-4 py-2 text-sm bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="recomendados">Recomendados</option>
                <option value="masVendidos">Más vendidos</option>
                <option value="psn">Plataforma: PSN</option>
                <option value="nintendo">Plataforma: Nintendo</option>
                <option value="xbox">Plataforma: Xbox</option>
                <option value="pc">Plataforma: PC</option>
              </select>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {juegosOrdenados.map(function (juego) {
              return (
                <article
                  key={juego.id}
                  className="bg-white/95 rounded-2xl shadow-lg overflow-hidden flex flex-col card-hover border border-purple-200"
                >
                  <div className="relative h-40 bg-slate-900">
                    <img
                      src={juego.img}
                      alt={juego.nombre}
                      className="w-full h-full object-cover"
                      onError={function (e) {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/400x200?text=Game";
                      }}
                    />
                    <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-purple-600/90 text-white">
                      {juego.plataforma}
                    </span>
                    <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-black/60 text-yellow-300">
                      ⭐ {juego.ventas}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-base mb-1">
                      {juego.nombre}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">
                      Género: {juego.genero}
                    </p>
                    <p className="text-xs text-gray-600 mb-3">
                      Plataforma: {juego.plataforma}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-600">
                        S/ {juego.precio}
                      </span>
                      <button
                        onClick={function () {
                          agregarAlCarrito(juego);
                        }}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-sm flex items-center gap-1"
                      >
                        <i className="fas fa-cart-plus"></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer gamer */}
      <footer
        className={
          "mt-12 border-t " +
          (isDark
            ? "border-purple-800 bg-slate-950/80 text-slate-200"
            : "border-purple-100 bg-white/90 text-slate-700") +
          " backdrop-blur-sm"
        }
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
            <p>
              © {new Date().getFullYear()} GameUsmp. Todos los derechos
              reservados.
            </p>
            <p>Hecho por gamers, para gamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
