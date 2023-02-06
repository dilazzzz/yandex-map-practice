import React from 'react';
import {YMaps, Map} from "@pbe/react-yandex-maps";
import mapStyles from './mapStyles.module.css'

const YandexMap = () => {
    return (
        <YMaps>
            <div className={mapStyles.wrapper}>
                <Map className={mapStyles.map} defaultState={{ center: [55.75, 37.57], zoom: 5}}></Map>
            </div>
        </YMaps>
    );
};

export default YandexMap;