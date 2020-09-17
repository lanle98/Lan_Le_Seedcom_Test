import React from 'react';
import { Modal } from 'antd';
import './index.scss';
import 'antd/dist/antd.css';

const { confirm } = Modal;


export default (props) => {
  const CurrentComponent = props.component;
  confirm({
    className: 'form-modal',
    icon: false,
    title: props.title,
    content: <CurrentComponent {...props} />,
  });
};
