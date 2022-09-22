import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Fetch from '../fetch'

test('is there a homebutton in the navbar', () => {
    
    render(<Fetch url="/"/>)
})