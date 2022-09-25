

import { render, screen} from "@testing-library/react";
import UserProfile from "./pages/UserProfile";
import {userPreferences} from "./stores/UserPreferencesStore";
import ActivateDeactivateButton from "./components/UserPreferences/ActivateDeactivateButton";


test('correct Header', () => {
    render(<UserProfile />);
    const header = screen.getByRole("heading")
    expect(header).toHaveTextContent("User Preferences")
});

test('correct button', () => {
    render(<ActivateDeactivateButton />)
    const button = screen.queryByRole('button');
    if (userPreferences.active) {
        expect(button).toHaveTextContent("Deactivate Me")
    }
    if (!userPreferences.active) {
        expect(button).toHaveTextContent("Activate Me")
    }

})

test("preferenceArray", () => {

})
