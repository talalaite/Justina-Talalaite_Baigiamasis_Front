import React from 'react';
import * as S from './Notification.style';

const Notification = ({ message, handleDelete }) => {
  if (message) {
    return (
      <>
        <S.NotificationBlock>
          <S.CloseButton onClick={() => handleDelete()}>x</S.CloseButton>
          {message}
        </S.NotificationBlock>
      </>
    );
  }
  return <></>;
};

export default Notification;
