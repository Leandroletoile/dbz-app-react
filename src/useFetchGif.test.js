import { renderHook , waitFor } from "@testing-library/react";
import { useFetchGif } from "./hooks/useFetchGif";

describe ('Test en hook useFetchGif', ()=>{

    test ('Debe regresar el estado inicial', ()=>{

        const {result} = renderHook(()=> useFetchGif('One Punch') );

        console.log(result);

        const {imagenes,loading} = result.current;
        expect( imagenes.length ).toBe(0);
        expect( loading ).toBeTruthy();

    });

    test('Debe retornar un arreglo de imagenes y el loading en false', async ()=>{
        const {result} = renderHook(()=> useFetchGif('One Punch') );
        await waitFor(
            ()=> expect(result.current.imagenes.length).toBeGreaterThan(0)
        )
        const { imagenes, loading } = result.current;
        expect(imagenes.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
    })    

});



