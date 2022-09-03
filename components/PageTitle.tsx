import { FC } from "react";

interface IPageTitle {
  title: string;
}

const PageTitle: FC<IPageTitle> = ({ title }) => {
  return (
    <div className="flex justify-center items-center py-9 lg:py-24">
      <span className="border-y-2 lg:border-y-4 py-1 lg:py-3 border-B95F1E text-2xl lg:text-6xl font-bold">
        {title}
      </span>
    </div>
  );
};

export default PageTitle;
