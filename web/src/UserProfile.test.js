

import {act, render, screen} from "@testing-library/react";
import {userPreferences} from "./stores/UserPreferencesStore";
import ActivateDeactivateButton from "./components/UserPreferences/ActivateDeactivateButton";

test('correct button in activateDeactivateButton', () => {

    render(<ActivateDeactivateButton />)
    const button = screen.queryByRole('button');

    act( () => {
        userPreferences.activeState = true;
    });


    expect(button).toHaveTextContent("Deactivate Me")
})

test('correct button in activateDeactivateButton', () => {

    render(<ActivateDeactivateButton />)
    const button = screen.queryByRole('button');

    act( () => {
        userPreferences.activeState = false;
    });

    expect(button).toHaveTextContent("Activate Me")
})

test("preferenceArray has correct length", () => {


    act( () => {
        userPreferences.prefToAdd = "pref1";
        userPreferences.choiceToAdd = "choice1";
        userPreferences.addPreference();
        userPreferences.prefToAdd = "pref2";
        userPreferences.choiceToAdd = "choice2";
        userPreferences.addPreference();

    });
    expect(userPreferences.thisUsersPreferences.length).toBe(2);
})

