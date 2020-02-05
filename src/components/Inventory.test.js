import React from "react";
import ReactDOM from "react-dom";
import Inventory from "./Inventory";

//import { configure } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";



configure({adapter: new Adapter()});

describe('Inventory tests', () => {

    it('App renders without a problem', () => {
        const div = document.createElement('div');
        const books = [];
        ReactDOM.render(<Inventory books={books}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // it('Inwentarz', () => {
    //     const wrapper = shallow(<Inventory />);        
    //     expect(wrapper.find('div').text()).toBe('Inwentarz');
    // })

    it('Snapshot matches', () => {
        const books = [];
        const wrapper = shallow(<Inventory books={books}/>);
        //console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })
    
});