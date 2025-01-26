import React, { useState, useEffect } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { sendMail } from '../config/api';

const MailBox = ({ link }) => {
  const [mailFrom, setMailFrom] = useState('');
  const [mailTo, setMailTo] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const api = async () => {
      const response = await sendMail(data);
      if (response.error) toast.error(response.error);
      else {
        toast(response.success);
        setData('');
        setMailTo('');
      }
    };
    if (data) api();
  }, [data]);

  const onSummitHandler = e => {
    e.preventDefault();
    if (!mailFrom || !mailTo) return toast.error('Email cannot be empty!');
    if (mailFrom === mailTo) return toast.error('Email cannot be the same!');
    const data = { mailFrom, mailTo, link: `${link}` };
    setData(data);
  };

  return (
    <div className="mailbox">
      <p className="mailbox__instruction">Share Link via E-Mail</p>
      <p className="mailbox__info">Files will be deleted automatically after 24 hours.</p>
      <form className="mailbox__form" onSubmit={onSummitHandler}>
        <div className="mailbox__inputs">
          <input
            type="email"
            value={mailFrom}
            placeholder="Enter Your E-Mail"
            onChange={e => setMailFrom(e.target.value)}
          />
          <input
            type="email"
            value={mailTo}
            placeholder="Enter Receiver E-Mail"
            onChange={e => setMailTo(e.target.value)}
          />
        </div>
        <button className="button button--main mailbox__button" type="submit">
          <FaTelegramPlane /> Send Email
        </button>
      </form>
    </div>
  );
};

export default MailBox;
