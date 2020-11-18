// libs
import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";

/**
 * NotFound
 * TODO: Create NotFound
 */
const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
  />
);

export default NotFound;
