import * as S from './style';

function Modal({ 
    isOpen, 
    onClose, 
    title, 
    icon, 
    children, 
    footer 
}) {  // Destructure props
    if (!isOpen) return null;

    return (
        <S.Overlay onClick={onClose}>
            <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                <header>
                    <S.ModalHeader>
                        {icon && <img className="modal-icon" src={icon} alt="Icon" />}
                        {title && <h1 className="modal-title">{title}</h1>}
                    </S.ModalHeader>
                    <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
                </header>
                <S.ModalBody>{children}</S.ModalBody>
                {footer && <S.ModalFooter>{footer}</S.ModalFooter>}  {/* Assuming it's `ModalFooter` in the style */}
            </S.ModalContainer>
        </S.Overlay>
    );
}

export default Modal;
