

import {act, render, screen} from "@testing-library/react";
import {userPreferences} from "./stores/UserPreferencesStore";
import ActivateDeactivateButton from "./components/UserPreferences/ActivateDeactivateButton";

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


    act( () => {
        userPreferences.setCurrentPref("pref1");
        userPreferences.setCurrentChoice("choice1");
        userPreferences.addPreference();
        userPreferences.setCurrentPref("pref2");
        userPreferences.setCurrentChoice("choice2");
        userPreferences.addPreference();

        expect(userPreferences.thisUsersPreferences.length).toBe(2);


    })



})
