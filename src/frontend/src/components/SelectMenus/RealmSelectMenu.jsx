// Interanl imports
import './selectmenu.css';

const RealmSelectMenu = () => {
  return (
    <select name="Realm Select Menu" id="realm_select_menu" title="Realm Select Menu"
    className="form__control">
        <option value="americas">Americas</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
    </select>
  );
}

export default RealmSelectMenu;