import { GetGifs } from "./helpers/GetGifs";

describe('test en GetGifs', () => {
    
    test('Debe retornar el arreglo de gifs', async () => {
        
        const gifs = await GetGifs('Dragon Ball')
        
        expect( gifs.length ).toBeGreaterThan( 0 );

        // any string cualquier dato que sea string - cuando hay propiedades diferentes de un objeto es toEqual
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});