import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';
import { setTimeout, setInterval } from 'timers';

interface Props {
  Mensagem: string;
  Show: boolean;
}

const AlertSucess: React.FC<Props> = ({ Mensagem, Show }) => {
  const [seconds, setSeconds] = useState(10);

  const nav = useHistory();

  useEffect(() => {
    if (Show) {
      setTimeout(() => {
        nav.push('/');
      }, 10000);
    }

    // TODO: verificar settimeout nas outras paginas

    // const interval = setInterval(() => {
    //   setSeconds((seconds) => seconds - 1);
    // }, 1000);

    // return () => clearInterval(interval);
  }, [Show]);

  if (!Show) return <></>;

  return (
    <div className="alert">
      <FiCheckCircle></FiCheckCircle>
      <p>{Mensagem}</p>
      {/* <small>Redirecionando em {seconds}</small> */}
    </div>
  );
};

export default AlertSucess;
