"use client";

import React, { ComponentProps, FC } from "react";
import { useFormStatus } from "react-dom";
import { LoaderIcon } from "lucide-react";
import { Button } from "../ui/button";

type ButtonProps = ComponentProps<typeof Button>;
type Props = Omit<ButtonProps, "type"> & {
  type?: "submit";
};

const SubmitButton: FC<Props> = ({
  children,
  type = "submit",
  ...props
}: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" {...props}>
      {pending ? <LoaderIcon className="animate animate-spin mr-2" /> : ""}
      {children}
    </Button>
  );
};

export default SubmitButton;
