"use client";
// modules
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
// styles
import classes from './style.module.scss';


const YMap = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} className={classes.map}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}

export default YMap;
