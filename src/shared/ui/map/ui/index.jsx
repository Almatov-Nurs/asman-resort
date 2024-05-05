"use client";
// styles
import classes from './style.module.scss';


const YMap = () => {
  const defaultState = {
    center: [77.027969, 42.174602],
    zoom: 17,
  };

  return (
    <iframe
      src={`https://yandex.ru/map-widget/v1/?ll=${defaultState.center[0]}%2C${defaultState.center[1]}&mode=search&ol=geo%2C%2C&z=${defaultState.zoom}`}
      allowFullScreen={true}
      className={classes.map}
    />
  );
}

export default YMap;
