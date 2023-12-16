import { MediaRenderer } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

type HeroCardProps = {
  isLoading: Boolean;
  title: string;
  description: string;
  image: string;
};

export default function HeroCard(props: HeroCardProps) {
  return (
    <>
      {props.isLoading ? (
        <div className={styles.isLoading}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.heroContainer} >
          <MediaRenderer
            src={props.image}
            width="22%"
            height="auto"
            className={styles.heroImage}
          />
          <div className={styles.heroImageprops}>
            <h1 className={styles.gradientText1}>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
