import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order";

//import { configure } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";



configure({adapter: new Adapter()});

describe('Order tests', () => {

    it('Order renders without a problem', () => {
        const div = document.createElement('div');
        const order = [];
        ReactDOM.render(<Order order={order}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // it('Zamówienie', () => {
    //     const wrapper = shallow(<Order />);        
    //     expect(wrapper.find('div').text()).toBe('Zamówienie');
    // })

    it('Snapshot matches', () => {
        const order = [];
        const wrapper = shallow(<Order order={order}/>);        
        //console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })
    
});