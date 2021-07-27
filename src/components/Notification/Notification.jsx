import React from 'react';
import PropTypes from 'prop-types';
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

Notification.propTypes = {
  message: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  message: undefined,
};
export default Notification;
