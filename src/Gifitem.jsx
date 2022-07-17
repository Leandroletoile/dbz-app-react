import { useState } from 'react';
import PropTypes from 'prop-types';


export const Gifitem = ({ title, url }) => {
	//Se inicializan estados relacionados al contenido de Modal, 
  //como el objeto que contendrá tanto la URL de la imagen como el titulo, 
  //y otro estado que será para evaluar cuando mostrar el modal.
	const [modalContent, setModalContent] = useState({})
	const [mustDisplayModal, setMustDisplayModal] = useState(false)

	// 'HandleClick' se disparará cuando se haga click a la imagen, del cual saldrá el modal.
	const handleClick = () => {
		setModalContent({ url: url, title: title })
		setMustDisplayModal(true)
	}
	// 'handleExitModal' se disparará cuando se haga click al modal, y cuando se cierre el modal.
	const handleExitModal = () => {
		setMustDisplayModal(false)
	}
	return (
		<div className="card">
			{/* <!-- Button trigger modal --> */}
			<img
				type="button"
				id="myImg"
				data-toggle="modal"
				data-target="#staticBackdrop"
				src={url}
				alt={title}
				onClick={() => handleClick()}
			/>
			{/* Este componente únicamente se va a mostrar cuando 'MustDisplayModal' sea verdadero. */}
			{/* <!-- Modal --> */}
			{mustDisplayModal && (
				<Modal handleExitModal={handleExitModal} modalContent={modalContent} />
			)}
		</div>
	)
}
//Se declara un nuevo componente que contendrá el modal con la URL y con el titulo de la imagen seleccionada. 
//Es recomendable realizar esta separación de lógica cuando hay más responsabilidades dentro de un componente. 
//Por ej: Dentro de un formulario, puede haber un componente que contenga el campo, y el label del field.
const Modal = ({ modalContent, handleExitModal }) => {
	return (
		<div
			className="modal fade"
			id="staticBackdrop"
			data-backdrop="static"
			data-keyboard="false"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 data-testid='test-title' className="modal-title text-success bg-dark rounded padding-title-modal" id="staticBackdropLabel">
							{modalContent.title}
						</h5>
					</div>
					<div className="modal-body flex">
						<img id="myImg" src={modalContent.url} alt={modalContent.title} />
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={handleExitModal}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
  Gifitem.propTypes={
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
  }

