//propers
import Image from "next/image";
//styles
import navs from "../Navs/navs.module.scss";

export default function Footer() {
  return (
    <footer className="text-center bg-black text-neutral-600 lg:text-left">
      <div className="flex items-center justify-center p-6 lg:justify-between bg-blacktwo">
        <div className="flex justify-center">
          <p className={navs.footertext}>
            <u>Atenção:</u> Os jogos disponibilizados neste site não são
            hospedados por nós. Os links são obtidos de fontes: The Pirate Bay,
            1337x, OnlineFix. Qualquer denúncia deve ser encaminhada diretamente
            aos responsáveis por hospedar os jogos torrent em seus servidores ou
            solicitada a remoção do conteúdo diretamente ao provedor de pesquisa
            (via DMCA).
          </p>
        </div>
      </div>

      <div className="bg-blacktwo p-6 text-center">
        <p>By: Gameverze</p>
      </div>
    </footer>
  );
}
