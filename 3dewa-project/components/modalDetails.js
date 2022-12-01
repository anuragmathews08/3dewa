import { ModalInfo } from "components";

export const ModalDetails = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <ModalInfo
        title="This is test Title"
        description="This is dummy description for the modal"
      />
    </div>
  );
};
