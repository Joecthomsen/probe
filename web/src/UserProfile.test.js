

import { render, screen} from "@testing-library/react";
import UserProfile from "./pages/UserProfile";
import {userPreferences} from "./stores/UserPreferencesStore";
import ActivateDeactivateButton from "./components/UserPreferences/ActivateDeactivateButton";
import PreferenceArray from "./components/UserPreferences/PreferenceArray";


test('correct Header', () => {
    render(<UserProfile />);
    const header = screen.getByRole("heading")
    expect(header).toHaveTextContent("User Preferences")
});

test('correct button in activateDeactivateButton', () => {
    render(<ActivateDeactivateButton />)
    const button = screen.queryByRole('button');
    if (userPreferences.active) {
        expect(button).toHaveTextContent("Deactivate Me")
    }
    if (!userPreferences.active) {
        expect(button).toHaveTextContent("Activate Me")
    }

})

test("preferenceArray has correct length", () => {
    render(<PreferenceArray />);

    userPreferences.setCurrentPref("pref1");
    userPreferences.setCurrentChoice("choice1");
    userPreferences.addPreference();
    userPreferences.setCurrentPref("pref2");
    userPreferences.setCurrentChoice("choice2");
    userPreferences.addPreference();

    expect(userPreferences.thisUsersPreferences.length).toBe(2);


})

test("preferenceArray has twice as many buttons as elements", () => {
    render(<PreferenceArray />);

    userPreferences.setCurrentPref("pref1");
    userPreferences.setCurrentChoice("choice1");
    userPreferences.addPreference();
    userPreferences.setCurrentPref("pref2");
    userPreferences.setCurrentChoice("choice2");
    userPreferences.addPreference();

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(4);




})
