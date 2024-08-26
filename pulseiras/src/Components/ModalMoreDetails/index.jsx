import * as S from './style'
import Modal from '../Modal';
import checkCircle from '/assets/check-circle.svg';
// import { useState } from 'react';

function ModalMoreDetails({ isOpen, onClose, product }) {
    if (!product) return null;  // Certifique-se que o product está definido
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleModalOpen = () => {
    //     setIsModalOpen(true);
    // };

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <>
            {/* <button onClick={handleModalOpen}>Open Modal</button> */}
            <Modal
                isOpen={isOpen}  // Passes the state to control visibility
                onClose={onClose}  // Passes the function to close the modal
                title="Check out more details of this product"
                icon={checkCircle}
                footer={<button onClick={onClose}>Close</button>}
            >
                <S.ContentLeft>
                    <img src={product.src} alt={product.title} />
                </S.ContentLeft>
                <S.ContentRight>                    
                    <S.LabelSection>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </S.LabelSection>
                    <S.PriceSection>
                        <p className='price'>{product.price}</p>
                        <p>{product.description}</p>
                    </S.PriceSection>
                    <S.ColorSection>
                        <h3>Colors:</h3>
                        <div className="colors">
                            {product.colors.map((color, index) => (
                                <div className="color" key={index}>
                                    <input type="radio" />
                                    <p>{color}</p>
                                </div>
                            ))}
                        </div>
                    </S.ColorSection>
                    <S.SizeSection>
                        <h3>Size:</h3>
                        <div className="sizes">
                            {product.sizes.map((size, index) => (
                                <div className="size" key={index}>                                
                                    <input type="radio" />
                                    <p>{size}</p>
                                </div>
                            ))}
                        </div>
                    </S.SizeSection>
                    <button>adicionar a sacola</button>
                </S.ContentRight>
            </Modal>
        </>
    );
}

export default ModalMoreDetails;


            {/* <S.Container>
                <S.ModalHeader>
                    <div className='header-title'>
                        <img className='check ' src={check} alt="" />
                        <h1>Check out more details of this product</h1>
                    </div>
                    <div className='close'>
                        <p>x</p>
                    </div>
                </S.ModalHeader>
                <S.ModalContainer>
                    <div className='left'>
                        <S.ProductImage>
                            <img src={testpic} alt="" />
                        </S.ProductImage>
                    </div>
                    <div className='right'>
                        <S.ModalBody>
                            <div className='label'>
                                <h2>Jaqueta Jeans</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, beatae!</p>
                            </div>
                            <div className='price-info'>
                                <p className='price'>R$150,00</p>
                                <p>Lorem ipsum dolor, sit amet consect.</p>
                            </div>
                            <div className='color-info'>
                                <h3>Colors:</h3>
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                            </div>
                            <div className='size-info'>
                                <h3>Size:</h3>
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                            </div>
                            <button>adicionar a sacola</button>
                        </S.ModalBody>
                    </div>
                </S.ModalContainer>
            </S.Container> */}