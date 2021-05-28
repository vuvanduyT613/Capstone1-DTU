import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

interface Props {}

export function Overview(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <h4>GENERAL INTRODUCTION</h4>
      <p>
        Phòng khám Đa khoa Quốc tế Exson là phòng khám đa khoa tư nhân chuyên sâu về điều trị các
        bệnh lý cột sống và tủy sống.
      </p>
      <p>Địa chỉ: Số 722 Sư Vạn Hạnh, Phường 12, Quận 10, Tp. Hồ Chí Minh</p>
      <p>
        Thời gian làm việc Khách hàng có thể đăng kí khám với các bác sĩ tại Phòng khám Đa khoa
        Exson từ thứ 2 đến thứ 7 hàng tuần:
      </p>
      <p>Sáng: 7h00 - 11h30 Chiều: 13h30 - 17h00</p>
      <p>
        Hình thức thanh toán chi phí khám chữa bệnh Chi trả trực tiếp bằng tiền mặt Chi trả qua các
        loại thẻ ATM
      </p>
      <h5>Lưu ý quan trọng(*)</h5>
      <p>
        Người bệnh nên mang toàn bộ kết quả chụp chiếu (chụp Xquang, chụp MRI) trong vòng 6 tháng
        Người bệnh nên chuẩn bị một số câu hỏi liên quan đến tình trạng của mình trước khi đi khám
        để quá trình thăm khám được hiệu quả Để tránh chờ đợi khi đi khám, người bệnh nên đặt khám
        trước để được hẹn giờ khám
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  padding-top: 50px;
`;
