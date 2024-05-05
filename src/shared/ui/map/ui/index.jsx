"use client";
// styles
import classes from './style.module.scss';


const YMap = () => {
  const defaultState = {
    center: [77.046198, 42.701424],
    zoom: 10,
  };

  return (
    <iframe
      src={`https://yandex.ru/map-widget/v1/?ll=${defaultState.center[0]}%2C${defaultState.center[1]}&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NTU4OTk4OTAxEjLQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0KvRgdGL0Lot0JrTqdC7INGA0LDQudC-0L3RgyIKDds7mkIVHskqQg%2C%2C&z=${defaultState.zoom}`}
      allowFullScreen={true}
      className={classes.map}
    />
  );
}

export default YMap;
