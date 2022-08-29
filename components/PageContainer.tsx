import { FC, ReactNode } from "react";

import Header from "components/Header";

interface IPageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<IPageContainerProps> = ({ children }) => {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <div className="w-full max-w-8xl">{children}</div>
    </div>
  );
};

export default PageContainer;
