import React from 'react';
import style from "./Banner.module.css";

const bannerImageUrl = `${process.env.PUBLIC_URL}/img/banner.png`;

function Banner() {
    return (
        <div 
            className={style.capa} 
            style={{ backgroundImage: `url(${bannerImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className={style.textContainer}>
                <button className={`${style.button} roboto-condensed`} style={{ color: `var(--blanco)` }}>FRONT END</button>
                <h1 className={`${style.title} roboto-condensed`}>Challenge React</h1>
                <p className={`${style.subtitle} roboto-condensed`}>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
        </div>
    );
}

export default Banner;
