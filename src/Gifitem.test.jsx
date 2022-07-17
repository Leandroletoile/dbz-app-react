import { render , screen } from "@testing-library/react";
import { Gifitem } from "./Gifitem";

describe('Test en <Gifitem />', () => {
    
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';

        test('Debe coincidir con el snapshot ', () => {        
            //        
        const {container} = render( <Gifitem title={title} url={url} /> );
        expect( container ).toMatchSnapshot();   
     });

       test('Debe encontrar un texto', ()=>{

        // si existe dragon ball get by text , tira true o false
        const {getByText} = render( <Gifitem title={title} url={url} /> );      
        expect( getByText(title) ).toBeTruthy();

    });

    test('Debe encontrar por test-id', () => {  
        
        // en get bytestId hay que agregarle a la etiqueta el id      
        const {getByTestId} = render( <Gifitem title={title} url={url} /> );  //ponerle screen
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('Debe mostrar URL y ALT', () => {
        
        render( <Gifitem title={title} url={url} /> )

        // screen.debug();
           
        const {src, alt} = screen.getByRole( 'img' );
        expect( src ).toContain(url);
        expect( alt ).toContain('gif');
    });

});