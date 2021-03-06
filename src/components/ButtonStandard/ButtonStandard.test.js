import React from "react";
import ButtonStandard from "./ButtonStandard";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

const country = "pt-BR";

configure({ adapter: new Adapter() });

describe("ButtonStandard Component", () => {
    const component = (
        <IntlProvider locale={country}>
            <ButtonStandard
                textId="Detalhes"
                className="btn btn-primary"
                onClick={() => {
                    console.log("FUNCIONOU");
                }}
            />
        </IntlProvider>
    );
    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is clickable", () => {
        const wrapper = mount(component);
        expect(wrapper.find(ButtonStandard).simulate("click"));
    });
});
