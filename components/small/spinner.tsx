import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent dark:border-gray-50 dark:border-t-transparent" />
  );
};

export default Spinner;
