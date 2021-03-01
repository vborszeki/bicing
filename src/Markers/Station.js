import Marker from './Marker';

const Station = ({ stationInfo, selected, showElectricBikes }) => {
  const showStation =
    !showElectricBikes || (showElectricBikes && stationInfo.ebikes > 0);

  if (!showStation) return null;

  return (
    <Marker
      type="station"
      size={stationInfo.capacity * 1.5}
      selected={selected}
    />
  );
};

export default Station;
