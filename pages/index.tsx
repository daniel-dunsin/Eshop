import Head from "next/head";
import css from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Data } from "../components/data";
import SingleItem from "../components/singleItem";

export default function Home() {
  const { storeItems } = useSelector((state: RootState) => state.store);
  return (
    <main>
      <Head>
        <title>E-Shop Home</title>
      </Head>
      <section className={css.homeSection}>
        <div className={css.inputContainer}>
          <input type="text" placeholder="Search Products" />
        </div>
        <div className={css.products}>
          {storeItems.map((item: Data, index) => (
            <SingleItem key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
