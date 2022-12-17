import {ReactNode} from "react";

type Props = {
  children: ReactNode
};

export default function Main({children}: Props) {
  //TODO: Add styles to <main>
  return (
    <main>{children}</main>
  );
}