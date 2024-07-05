import React from 'react';
import Banner from "Components/Banner/Banner";
import styles from "./NuevoVideo.module.css";
import Titulo from "Components/Titulo/Titulo";
import Card from "Components/Card/Card";

function NuevoVideo({ videos }) {
  return (
    <>
      <Banner img="favorite" color="#44d97d" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {videos && videos.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default NuevoVideo;
