

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-400">FikrCode</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Web & App Development Studio — Crafting digital experiences.
        </p>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">What We Do</h2>
        <p className="text-gray-400 mb-8">
          We build modern, responsive websites and mobile applications tailored to your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Web Development</h3>
            <p className="text-sm text-gray-400">
              Fast, responsive, and SEO-optimized websites using modern frameworks.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Custom Solutions</h3>
            <p className="text-sm text-gray-400">
              Tailored software built around your unique business processes.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Fikrcode. All rights reserved.</p>
        <p className="mt-1">🌐 <a href="https://fikrcode.online" className="text-indigo-400 hover:underline">fikrcode.online</a></p>
      </footer>
    </div>
  );
}

export default App
