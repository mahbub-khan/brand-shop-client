import useTheme from "../../ContextProviders/themeToggler";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
const ThemeToggleButton = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleOnChange = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    console.log(darkModeStatus);

    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div className="ml-2 sm:ml-3 mt-1 flex items-center">
      <input
        type="checkbox"
        onChange={handleOnChange}
        className="toggle toggle-info"
        checked={themeMode === "dark"}
      />
      <div className="ml-1 sm:ml-2">
        {themeMode === "dark" ? <IoSunnySharp /> : <IoMoon />}
      </div>
    </div>
  );
};

export default ThemeToggleButton;
