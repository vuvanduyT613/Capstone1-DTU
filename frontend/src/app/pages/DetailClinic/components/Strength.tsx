import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

interface Props {}

export function Strength(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <h4>
        Với mong muốn người bệnh Việt Nam có thể khám và điều trị ngay trong nước, không cần ra nước
        ngoài để thực hiện điều trị bệnh lý, Phòng khám đã ứng dụng công nghệ cao, trang bị các
        thiết bị hiện đại để phục vụ chẩn đoán và điều trị, đặc biệt là các bệnh lý về cột sống, tủy
        sống.
      </h4>
      <h4>Một số phẫu thuật được thực hiện thành công qua khám và điều trị tại phòng khám:</h4>
      <ul>
        <li>Vi phẫu thoát vị đĩa đệm cột sống cổ </li>
        <li>Mổ triệt để u nội tuỷ sống bằng vi phẫu thuật </li>
        <li>
          Áp dụng các kĩ thuật tiên tiến nhất trong phẫu thuật các trường hợp chấn thương cột sống
          cổ cao, cột sống cổ thấp, cột sống lưng, thắt lưng
        </li>
        <li> Chẩn đoán và điều trị loãng xương</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 50px;
`;
