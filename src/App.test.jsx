import { render, screen, renderHook } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect'
import { App } from "./App";


describe('Test de <App />', () => {

    test('renderizar la app', () => {

        render(<App/>);

        expect(screen.getByRole('heading')).toHaveTextContent('GIF APP!');
    })

    test('Test de categories', () => {

        const {result} = renderHook( () => App());

        const {categories} = result.current;

        console.log(categories);

        expect.arrayContaining(categories)//Hay que agregar un toBe???;

    });

});
