/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export const Notification: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 3000);
  }, []);

  return (
    <div className={classNames(
      'notification is-danger is-light has-text-weight-normal',
      { hidden },
    )}
    >
      <button
        type="button"
        className="delete"
        onClick={() => setHidden(true)}
      />

      {/* show only one message at a time */}
      Unable to add a todo
      <br />
      Unable to delete a todo
      <br />
      Unable to update a todo
    </div>
  );
};