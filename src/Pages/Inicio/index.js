import React, { useEffect, useState } from "react";
import Banner from "Components/Banner/Banner";
import Titulo from "Components/Titulo/Titulo";
import Card from "Components/Card/Card";
import styles from "./index.module.css";

function Inicio() {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Zoe-2688/Aluraflix/master/db.json")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched videos:", data);
                if (data && data.videos) {
                    const categoriasUnicas = [...new Set(data.videos.map(video => video.categoria))];
                    setCategorias(categoriasUnicas);

                    const videosWithImageURLs = data.videos.map(video => ({
                        ...video,
                        img: video.img ? `${process.env.PUBLIC_URL}${video.img}` : null
                    }));
                    setVideos(videosWithImageURLs);
                } else {
                    console.error("Videos not found in data:", data);
                    setVideos([]);
                }
            })
            .catch(error => {
                console.error("Error fetching videos:", error);
            });
    }, []);

    const renderVideosPorCategoria = (categoria) => {
        return videos
            .filter(video => video.categoria === categoria)
            .map(video => (
                <Card {...video} key={video.id} />
            ));
    };

    return (
        <>
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar tus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {categorias.map((categoria, index) => (
                    <div key={index}>
                        <h2>{categoria}</h2>
                        <div className={styles.cardsContainer}>
                            {renderVideosPorCategoria(categoria)}
                        </div>
                    </div>
                ))}
                {videos.length === 0 && <p>No hay videos disponibles.</p>}
            </section>
        </>
    );
}

export default Inicio;



