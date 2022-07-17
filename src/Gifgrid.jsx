
import { Gifitem } from "./Gifitem";
import { useFetchGif } from "./hooks/useFetchGif";
import PropTypes from 'prop-types';


export const Gifgrid = ( {category, handleFilter} ) => {
    const {imagenes, loading} = useFetchGif(category)

 
    return(
        <div>
            {           
             category ? <h3>{category}<button onClick={()=> handleFilter(category)} className="buttonclose"><i className="bi bi-x-circle buttonc"></i></button> </h3> : false
            }
            <div className="card-grid">
                {
                    loading ? <h2>Cargando...</h2> :
                    
                    imagenes.map(imagen => <Gifitem key={imagen.id} {...imagen} />)
                               
                }               
            </div>
        </div>
    )

}
Gifgrid.propTypes={
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired
  }