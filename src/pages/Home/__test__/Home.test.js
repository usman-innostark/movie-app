import { render,screen,fireEvent } from "@testing-library/react";
import Home from '../index'

describe('Home section',()=>{
    
    it('check for next button',()=>{
        render(<Home/>)
        const nextButton=screen.getByText(/Next/i)
        const movieLabelBefore=screen.getByTitle('name').textContent
        fireEvent.click(nextButton)
        const movieLabelAfter=screen.getByTitle('name').textContent
        expect(movieLabelAfter).not.toBe(movieLabelBefore)
    })

    it('check for prev button',()=>{
        render(<Home/>)
        const prevButton=screen.getByText(/Prev/i)
        const movieLabelBefore=screen.getByTitle('name').textContent
        fireEvent.click(prevButton)
        const movieLabelAfter=screen.getByTitle('name').textContent
        expect(movieLabelAfter).toBe(movieLabelBefore)
    })
    
})