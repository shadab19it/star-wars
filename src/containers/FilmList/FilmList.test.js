import React from "react";
import { FilmListWithoutWithRouter } from "./FilmList";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../store";

configure({ adapter: new Adapter() });

const country = "pt-BR";

describe("FilmList Container", () => {
    const component = (
        <IntlProvider locale={country}>
            <Provider store={store}>
                <FilmListWithoutWithRouter />
            </Provider>
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("generated a film list with a header inside", () => {
        const wrapper = mount(component);
        const header = wrapper.find(".film-list-header");
        expect(header.length).toEqual(1);
    });

    it("generated an film list that is loading films", () => {
        const wrapper = mount(component);
        const loading = wrapper
            .find(".container div")
            .last()
            .text();
        expect(loading).toBe("Carregando...");
    });
});
