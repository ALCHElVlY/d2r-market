const ChangeTheme = () => {
  return (
    <select
      name="Change Theme Menu"
      id="change_theme_menu"
      title="Change Theme Menu"
      className="form__control">
      <option value="--theme-system">Default</option>
      <option value="--theme-light">Light</option>
      <option value="--theme-dark">Dark</option>
    </select>
  );
};

export default ChangeTheme;
