import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface Props {}

export function Map(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <Wrapper>
      <h3>Vị trí phòng khám</h3>
      <P>
        Phòng khám tại số 722 Sư Vạn Hạnh - cách Bệnh viện Nhi đồng 1 khoảng 350m Đường Sư Vạn Hạnh
        là đường 1 chiều, để thuận tiện hơn bạn nên tìm hiểu đường đi kỹ càng trước khi đi khám
      </P>
      <LoadScript googleMapsApiKey="AIzaSyBRK7vvFABVIi4BH4Qtqz-oglOaE-jt-Zk">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: block;
  padding-top: 50px;
`;

const P = styled.p``;
