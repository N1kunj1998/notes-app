import AddButton from "./AddButton";

const Sidebar = ({ onAddNote }: { onAddNote: (color: string) => void }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-50 p-4 flex flex-col justify-start items-center shadow-md z-30">
      <AddButton onSelectColor={onAddNote} />
    </div>
  );
};

export default Sidebar;
