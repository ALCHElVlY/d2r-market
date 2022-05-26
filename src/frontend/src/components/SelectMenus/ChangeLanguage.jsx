const ChangeLanguage = () => {
  return (
    <select
      name="Change Language Menu"
      id="change_language_menu"
      title="Change Language Menu"
      className="form__control">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="it">Italiano</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default ChangeLanguage;
