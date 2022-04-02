import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {Button} from "@mui/material";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Node React Passport App</title>
      </Head>

      <main className={styles.main}>
        <div>
          <button
            className={styles.button24}
            onClick={(ev) => {
              ev.preventDefault();
              window.open(
                "https://nodereactpassport.herokuapp.com/api/youtube/auth/youtube",
                "_self"
              );
            }}
          >
            Login to Youtube
          </button>
        </div>

        <div>
          <Link href="/youtubeLikedVideos">
            <Button variant="contained">See Liked Videos</Button>
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Home;
