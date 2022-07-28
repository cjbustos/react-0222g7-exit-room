import styled from "@emotion/styled";

//Creamos un componente con estilos para distribuir las responsabilidades
export const ButtonWithStyle = styled.button`
    width: ${({ size }) => size === 'normal' ? '180px' : '90px'};
    height: ${({ size }) => size === 'normal' ? '42px' : '21px'};
    background-color: #0C9D9C;
    color: '#FFFFFF';
    border-radius: 10px;
    font-family: 'Rationale';
    font-size: ${({ size }) => size === 'normal' ? '20px' : '10px'};`
    
export const Text = styled.h1``

