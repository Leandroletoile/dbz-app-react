import { render, screen } from "@testing-library/react";
import { Gifgrid } from "./Gifgrid";
import { useFetchGif } from "./hooks/useFetchGif";
jest.mock("./hooks/useFetchGif");
//decretamos que va a haber una simulacion

describe('Test en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('Debe mostrar inicialmente el loading ', () => {
        
        //declaramos la simulacion aca
        useFetchGif.mockReturnValue({
            imagenes: [],
            loading: true
        })
        
        render( <Gifgrid category={category}/> )
        // screen.debug();

        expect( screen.getByText( 'Cargando...' ).innerHTML ).toBe('Cargando...');
        expect( screen.getByText( category ).innerHTML ).toBe(category);
 

    });

    test('Debe mostrar items, cuando se cargan las imagenes en useFetchGifs', () => {
        
        useFetchGif.mockReturnValue({
            imagenes:[
                {id:'ABC123', title: 'Saitama', url:'https://onepunch/saitama.jpg'},
                {id:'ABC333', title: 'Garou', url:'https://onepunch/garou.jpg'},
            ],
            loading: false,
        })

        render( <Gifgrid category={category}/>)       
        //esta comprobando que renderice dos veces - toBe (2)
        expect( screen.getAllByRole('img').length ).toBe(2)

    });

});