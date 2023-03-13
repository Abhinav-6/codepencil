import React, { ReactNode } from "react";
type pageProps = {
  children: ReactNode;
};
const Page = ({ children }: pageProps) => {
  return <main>{children}</main>;
};

export default Page;
