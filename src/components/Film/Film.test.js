import React from "react";
import Film from "./Film";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const country = "pt-BR";

const filmData = {
    episode_id: "1",
    title: "A New Hope",
    release_date: "1977-05-25"
};

describe("Film Component", () => {
    const component = (
        <IntlProvider locale={country}>
            <Film data={filmData} functionProps={() => true} id={filmData.id} />
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = mount(component);
        expect(tree).toMatchSnapshot();
    });

    it("generated a film item with the details button", () => {
        const wrapper = mount(component);
        const button = wrapper.find("button");
        expect(button.length).toEqual(1);
    });

    it("generated a film item with the columns showing", () => {
        const wrapper = mount(component);
        const checkbox = wrapper
            .find(".text-2")
            .first()
            .text();
        expect(checkbox).toBe("A New Hope");
    });
});
