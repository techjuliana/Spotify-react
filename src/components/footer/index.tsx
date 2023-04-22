import React from "react";
import logo from "./../../assets/img/spotify-logo.png";
function Footer() {
  return (
    <div className="App">
         <footer>
        <div className="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
          <div className="md:col-span-1 pt-10 md:pt-0">
            <a href="/">
              <img
                src={logo}
                alt="Spotify"
                className="w-20 md:w-132px"
              />
            </a>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">
              Empresa
            </h3>
            <ul>
              <li className="mb-5">
                <a href="/">Sobre</a>
              </li>
              <li className="mb-5">
                <a href="/">Empregos</a>
              </li>
              <li className="mb-5">
                <a href="/">For the Record</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">
              Comunidades
            </h3>
            <ul>
              <li className="mb-5">
                <a href="/">Para Artistas</a>
              </li>
              <li className="mb-5">
                <a href="/">Desenvolvedores</a>
              </li>
              <li className="mb-5">
                <a href="/">Publicidade</a>
              </li>
              <li className="mb-5">
                <a href="/">Investidores</a>
              </li>
              <li className="mb-5">
                <a href="/">Fornecedores</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">
              Links Úteis
            </h3>
            <ul>
              <li className="mb-5">
                <a href="/">Ajuda</a>
              </li>
              <li className="mb-5">
                <a href="/">Player da Web</a>
              </li>
              <li className="mb-5">
                <a href="/">Aplicativo móvel grátis</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 pt-10 md:pt-4">
            <ul className="flex md:justify-end">
              <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 mt-20">
            <ul>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="/">Legal</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="/">Centro de Privacidade</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="/">Política de Privacidade</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="/">Cookies</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="/">Sobre anúncios</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 mt-20">
            <p className="flex justify-end text-gray-500 text-xs">
              &copy; 2020 Spotify AB
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
