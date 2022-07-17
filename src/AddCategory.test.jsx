import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "./AddCategory";


describe('Test en <AddCategory />', () => { 
    
    test('Debe cambiar el valor del input', () => {


        // getByrOle para el heading hay que ponerle heading h1,h2,h3
        render( <AddCategory addCategory={()=>{}}/>  )       
        const input = screen.getByRole('searchbox');
        fireEvent.change( input, {target: {value: 'Goku'}});       
        expect(input.value).toBe('Goku');

    });

    test('Debe llamar la funcion addCategory si el input tiene valor', () => {
       
        const inputValue = 'Goku';
        //jest simula la funcion
        const addCategory = jest.fn();
        render( <AddCategory addCategory={ addCategory } /> )
        const input = screen.getByRole('searchbox');
        const form = screen.getByRole('form');
        fireEvent.change( input, {target: {value: inputValue}});
        fireEvent.submit( form );
        screen.debug();
        expect( input.value ).toBe( '' );
        expect( addCategory ).toHaveBeenCalled();       
        expect( addCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No se debe llamar la funcion addCategory, si el input esta vacio', ()=>{
        const addCategory = jest.fn();
        render( <AddCategory addCategory={addCategory} /> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( addCategory ).not.toHaveBeenCalled();
    });
})