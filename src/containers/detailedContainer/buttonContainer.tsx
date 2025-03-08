import IconButton from '@/components/StyledButton';

const ButtonContainer = () => {
  const handleClick = (label: string) => {
    alert(`${label} button clicked!`);
  };

  return (
    <div className="flex justify-between items-center gap-4 p-4">
      <IconButton icon="FaHome" label="Add Notable Activity" onClick={() => handleClick("Home")} />
      <IconButton icon="FaUser" label="Create Task" onClick={() => handleClick("Profile")} />
      <IconButton icon="FaCog" label="Add Note" onClick={() => handleClick("Settings")} />
    </div>
  );
};

export default ButtonContainer;
