import "./App.css";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="shadow-md bg-slate-900 w-screen">
        <div className="text-white h-16 mx-auto px-5 flex items-center justify-between">
          <h1 className="text-2xl cursor-default">Kwan Tekasala</h1>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-5">
              <li>
                <a className="hover:text-red-500 transition-colors" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-500 transition-colors"
                  href="/work"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-500 transition-colors"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="bg-red-500 p-2 active:bg-inherit transition-colors"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Main />
      </main>

      {/*footer*/}
      <footer className="p-2 bg-slate-900">
        <div className="text-white h-16 mx-auto px-5 flex items-center justify-center">
          <ul className="flex items-center gap-5">
            <li className="text-xl">More Of My Work:</li>
            <li>
              <a
                href="https://kwantekasala6.artstation.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Artstation profile"
              >
                <img
                  className="object-contain h-5"
                  src="images/artstation-logo-white.png"
                  alt="Artstation logo"
                />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center"
                href="https://www.youtube.com/@kwantekasala5759"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my YouTube channel"
              >
                <img
                  className="object-contain h-12"
                  src="images/youtube-100.png"
                  alt="YouTube logo"
                />
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
