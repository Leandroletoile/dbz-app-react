import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { App } from "./App";


describe('Test de <App />', () => {

    test('Renderizar la app y comprobar el Estado Inicial', () => {

        render(<App/>);
        screen.debug();

        expect(screen.getByTestId('titleApp')).toHaveTextContent('GifApp');

        const  h3 = screen.queryByRole('heading',{level: 3})
        expect(h3).toBeNull();

    })

    test('Show changes in state (categories)', () => {

        render (<App/>)

            const input = screen.getByRole('searchbox');
            const form = screen.getByRole('form');

            fireEvent.change(input, { target: { value: 'Goku' } });
            fireEvent.submit(form);

            screen.debug();

            const  h3 = screen.queryByRole('heading',{level: 3});
            expect(h3).toBeTruthy();

    });

    test('Render buttons -Reset & Search- getting by test Id', ()=>{

            const {getByTestId} = render(<App />)

            const buttonR = getByTestId('reset')
            const buttonS = getByTestId('search')

            fireEvent.click(buttonR)
            fireEvent.click(buttonS)

            screen.debug();
            expect(buttonR).toBeTruthy();
            expect(buttonS).toBeTruthy();
         
    });

    test('Render button DeleteForCategory firing event in the form', ()=>{

        render (<App/>)

            const input = screen.getByRole('searchbox');
            const form = screen.getByRole('form');

            fireEvent.change(input, { target: { value: 'Vegeta' } });
            fireEvent.submit(form);

            const  deleteForCategory = screen.queryByTestId('delete');
            expect(deleteForCategory).toBeTruthy();
        
    });
    test('Render Modal Card', ()=>{

        render (<App/>)

            const input = screen.getByRole('searchbox');
            const form = screen.getByRole('form');

            fireEvent.change(input, { target: { value: 'Anime' } });
            fireEvent.submit(form);

            const  cardGrid = screen.getAllByTestId('cardGrid');
            expect(cardGrid).toBeTruthy();

            //const imgButtonCard =screen.getByTestId('imgButtonCard');
            //fireEvent.click(imgButtonCard);
            //console.log(imgButtonCard);

            screen.debug();
        
    });

});


