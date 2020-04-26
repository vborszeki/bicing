import React from 'react';
import styled from 'styled-components';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';
import Close from './Close';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  margin-top: 52px;
  margin-left: 40px;
  outline: none;
  border: none;
  caret-color: #000;
}
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 16px;
  cursor: pointer;
`;

const Name = styled.span`
  font-weight: 400;
`;

const Address = styled.span`
  font-weight: 100;
`;

const NoSearchResult = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin-top: 52px;
`;

const Search = ({ setShowSearch, setSearchLocation, setZoom }) => {
  const {
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete({
    requestOptions: {
      location: new window.google.maps.LatLng({ lat: 41.39, lng: 2.17 }),
      radius: 5000
    },
    debounce: 300
  });
  const showAutocomplete = status === 'OK';
  const hasNoSearchResult = status === 'ZERO_RESULTS';

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => async () => {
    try {
      const geoCode = await getGeocode({ address: description });
      const latLng = await getLatLng(geoCode[0]);
      const { lat, lng } = latLng;

      setSearchLocation({ lat, lng });
      setShowSearch(false);
      setZoom(17);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <CloseButtonWrapper>
        <Close onClose={() => setShowSearch(false)} />
      </CloseButtonWrapper>
      <Input
        type="text"
        autoFocus
        placeholder="search places"
        value={value}
        onChange={handleChange}
      />
      {showAutocomplete && (
        <List>
          {data.map(suggestion => {
            const {
              id,
              structured_formatting: {
                main_text: name,
                secondary_text: address
              }
            } = suggestion;

            return (
              <ListItem key={id} onClick={handleSelect(suggestion)}>
                <Name>{name}</Name> <Address>{address}</Address>
              </ListItem>
            );
          })}
        </List>
      )}
      {hasNoSearchResult && (
        <NoSearchResult>
          <span role="img" aria-label="crying cat face">
            😿
          </span>
        </NoSearchResult>
      )}
    </Wrapper>
  );
};

export default Search;
