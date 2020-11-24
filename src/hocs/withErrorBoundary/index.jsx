// libs import
import React from "react";
import { Result } from "antd";
// others
import "./style.scss";

const withErrorBoundary = ({ isError, error = {} }) => (WrappedComponent) =>
  isError ? (
    <Result status="error" title="Something went wrong">
      <div>{error.message}</div>
      <a href="/">Back To Home</a>
    </Result>
  ) : (
    WrappedComponent
  );

export default withErrorBoundary;
