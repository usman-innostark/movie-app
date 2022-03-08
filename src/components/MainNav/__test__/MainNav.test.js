import { screen, render, fireEvent } from "@testing-library/react";
import MainNav from '../index'
import { Provider,useSelector } from "react-redux";
import store from "../../../store";

describe('navbar toggle',()=>{
    it('check for toggle',()=>{
        render(
            <Provider store={store}>
            <MainNav />
          </Provider>
        )
        const navbarStatus = ''
        const toggleBtn=screen.getByTestId('toggle-btn')

    })

})