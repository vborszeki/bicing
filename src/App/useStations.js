import { useState, useEffect } from 'react';

const useStations = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    try {
      const stationInfoResponse = await fetch(
        'https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information'
      );
      const stationInfoData = await stationInfoResponse.json();
      const stationInfo = stationInfoData.data.stations.map(station => ({
        id: station.station_id,
        name: station.name,
        lat: station.lat,
        lng: station.lon,
        capacity: station.capacity
      }));

      const stationStatusResponse = await fetch(
        'https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_status'
      );
      const stationStatusData = await stationStatusResponse.json();
      const stationStatus = stationStatusData.data.stations.map(station => ({
        id: station.station_id,
        mechanicalBikes: station.num_bikes_available_types.mechanical,
        ebikes: station.num_bikes_available_types.ebike,
        availableDocks: station.num_docks_available,
        status: station.status
      }));

      const stationData = stationInfo
        .map(info => ({
          ...stationStatus.find(status => status.id === info.id),
          ...info
        }))
        .filter(station => station.status === 'IN_SERVICE');

      setStations(stationData);
    } catch (error) {
      console.error(error);
    }
  };

  return stations;
};

export default useStations;
