const BOARD_SIZE = 15;

function getRandomFood(snake) {
  while (true) {
    const x = Math.floor(Math.random() * BOARD_SIZE);
    const y = Math.floor(Math.random() * BOARD_SIZE);
    if (!snake.some((segment) => segment.x === x && segment.y === y)) {
      return { x, y };
    }
  }
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const isDark = theme === "dark";

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "../pages/servicios.html" },
    { label: "PRODUCTOS", href: "../pages/productos.html" },
    { label: "CONTACTOS", href: "../pages/contactos.html" },
    { label: "MINIJUEGO", href: "../pages/minijuego.html" },
  ];

  const initialSnake = [
    { x: Math.floor(BOARD_SIZE / 2), y: Math.floor(BOARD_SIZE / 2) },
  ];

  const [snake, setSnake] = React.useState(initialSnake);
  const [direction, setDirection] = React.useState({ x: 1, y: 0 });
  const [food, setFood] = React.useState(getRandomFood(initialSnake));
  const [isRunning, setIsRunning] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  // Controles de teclado
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setDirection((prev) => {
        if ((key === "arrowup" || key === "w") && prev.y !== 1) {
          return { x: 0, y: -1 };
        }
        if ((key === "arrowdown" || key === "s") && prev.y !== -1) {
          return { x: 0, y: 1 };
        }
        if ((key === "arrowleft" || key === "a") && prev.x !== 1) {
          return { x: -1, y: 0 };
        }
        if ((key === "arrowright" || key === "d") && prev.x !== -1) {
          return { x: 1, y: 0 };
        }
        return prev;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Loop del juego
  React.useEffect(() => {
    if (!isRunning || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        // Colisión con paredes
        if (
          newHead.x < 0 ||
          newHead.x >= BOARD_SIZE ||
          newHead.y < 0 ||
          newHead.y >= BOARD_SIZE
        ) {
          setGameOver(true);
          setIsRunning(false);
          return prevSnake;
        }

        // Colisión con el cuerpo
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          setIsRunning(false);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        // Comer comida
        if (newHead.x === food.x && newHead.y === food.y) {
          const nextFood = getRandomFood(newSnake);
          setFood(nextFood);
          setScore((prev) => prev + 10);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 140);

    return () => clearInterval(interval);
  }, [isRunning, direction, gameOver, food]);

  const handleStart = () => {
    setSnake(initialSnake);
    setDirection({ x: 1, y: 0 });
    setFood(getRandomFood(initialSnake));
    setScore(0);
    setGameOver(false);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    if (!gameOver) {
      setIsRunning(true);
    }
  };

  const boardCells = [];
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
      const isHead = isSnake && snake[0].x === x && snake[0].y === y;
      const isFood = food.x === x && food.y === y;

      let cellClass = isDark ? "bg-slate-900/70" : "bg-slate-100";
      if (isSnake) {
        cellClass = isDark ? "bg-emerald-400" : "bg-emerald-500";
      }
      if (isHead) {
        cellClass = isDark ? "bg-emerald-300" : "bg-emerald-400";
      }
      if (isFood) {
        cellClass = isDark ? "bg-purple-400" : "bg-purple-500";
      }

      boardCells.push(
        React.createElement("div", {
          key: `${x}-${y}`,
          className:
            "border border-white/5 aspect-square " +
            cellClass,
        })
      );
    }
  }

  return (
    <div
      className={`min-h-screen flex flex-col justify-between relative z-10 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-slate-100"
          : "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-slate-900"
      }`}
    >
      {/* Header */}
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
                  onClick={() => setMenuOpen(false)}
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

      {/* Contenido principal */}
      <main className="flex-grow pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
          <div className="text-left space-y-4">
            <h2 className="text-4xl font-bold mb-2 text-purple-500 flex items-center gap-3">
              <i className="fas fa-gamepad"></i>
              Snake Game
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Mueve la serpiente por el tablero, come la comida morada y evita chocar
              contra las paredes o contra tu propio cuerpo. Cada comida suma
              <span className="font-semibold"> +10 puntos</span> y hace que la serpiente
              crezca un poco más.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md text-sm text-gray-700 space-y-2">
              <h3 className="font-bold mb-1 flex items-center gap-2">
                <i className="fas fa-keyboard text-purple-500"></i>
                Controles
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Usa las flechas del teclado o W, A, S, D para mover la serpiente.</li>
                <li>Presiona <span className="font-semibold">Iniciar partida</span> para comenzar.</li>
                <li>Puedes pausar y reanudar la partida en cualquier momento.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p>
                <span className="font-semibold">Puntaje:</span> {score}
              </p>
              {gameOver && (
                <p className="text-red-500 font-semibold">
                  <i className="fas fa-skull-crossbones mr-1"></i>
                  ¡Juego terminado! Inténtalo de nuevo.
                </p>
              )}
              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={handleStart}
                  className="btn-primary text-gray-900 font-bold py-2 px-6 rounded-full text-sm shadow-lg"
                >
                  <i className="fas fa-play mr-2"></i>
                  Iniciar partida
                </button>
                {!gameOver && isRunning && (
                  <button
                    onClick={handlePause}
                    className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-full text-sm shadow"
                  >
                    <i className="fas fa-pause mr-2"></i>
                    Pausar
                  </button>
                )}
                {!gameOver && !isRunning && score > 0 && (
                  <button
                    onClick={handleResume}
                    className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-full text-sm shadow"
                  >
                    <i className="fas fa-play mr-2"></i>
                    Reanudar
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="rounded-2xl shadow-2xl overflow-hidden border border-purple-500/40"
              style={{
                width: "360px",
                height: "360px",
                display: "grid",
                gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
              }}
            >
              {boardCells}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
