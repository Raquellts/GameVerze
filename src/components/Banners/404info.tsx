//styles
import Link from "next/link";
import button from "../../styles/buttons.module.scss";
import banners from "../Banners/banners.module.scss";

export default function NotfoundInfo() {
  return (
    <>
      <div className={`${banners.div404}`}>
        <p className={banners.header404}>404</p>
        <p className={banners.info404}>something's missing</p>
        <p className={banners.info404}>page not found or being updated</p>
        <Link href="/">
          <button className={`${button.primaryButton} mt-5`}>return</button>
        </Link>
      </div>
    </>
  );
}
