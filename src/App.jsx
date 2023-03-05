import "./App.css";
import Main from "./Components/Main"

export default function App() {
  return (
    <div class="flex flex-col h-screen">
      <div class="shadow-lg shadow-white bg-slate-900">
        <div class="text-white h-16 mx-auto px-5 flex items-center justify-between">
          <h1 class="text-2xl hover:text-red-500 transition-colors cursor-default">
            Kwan Tekasala
          </h1>

          <ul class="flex items-center gap-5">
            <li>
              <a class="hover:text-red-500 transition-colors" href="">
                Home
              </a>
            </li>
            <li>
              <a class="hover:text-red-500 transition-colors" href="">
                Work
              </a>
            </li>
            <li>
              <a class="hover:text-red-500 transition-colors" href="">
                About
              </a>
            </li>
            <li>
              <a
                class="bg-red-500 p-2 hover:text-red-500 hover:bg-inherit transition-colors"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main class="flex-grow">
      <Main />
      </main>

      {/*footer*/}
      <footer class="p-2 bg-slate-900">
        <div class="text-white h-16 mx-auto px-5 flex items-center justify-center">
          <ul class="flex items-center gap-5">
          <li class="text-xl">More Of My Work:</li>
          <a href="https://kwantekasala6.artstation.com/" target="_blank"><img class="object-contain h-5" src="src/assets/artstation-logo-white.png"/></a>
          <a class="inline-flex items-center" href="https://www.youtube.com/@kwantekasala5759" target="_blank"><img class="object-contain h-12" src="src/assets/youtube-100.png"/>Youtube</a>
          </ul>
        </div>
      </footer>
    </div>
  );
}
