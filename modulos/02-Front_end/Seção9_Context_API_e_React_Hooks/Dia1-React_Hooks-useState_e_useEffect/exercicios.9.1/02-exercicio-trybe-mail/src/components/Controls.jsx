import PropTypes from 'prop-types';

import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <img src={ readIcon } alt="" />
        Marcar todas como lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src={ unreadIcon } alt="" />
        Marcar todas como não lida
      </button>
    </div>
  );
}

Controls.propTypes = {
  markAllAsRead: PropTypes.func.isRequired,
  markAllAsUnread: PropTypes.func.isRequired,
};

export default Controls;
