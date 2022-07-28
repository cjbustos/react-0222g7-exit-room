import styled from "@emotion/styled";

//Creamos un componente con estilos para distribuir las responsabilidades
export const ButtonWithStyle = styled.button`
    width: ${({ size }) => size === 'small' ? '90px' : '180px'};
    height: ${({ size }) => size === 'small' ? '21px' : '42px'};
    background-color: #0C9D9C;
    color: '#FFFFFF';
    border-radius: 10px;
    font-family: 'Rationale';
    font-size: ${({ size }) => size === 'small' ? '12px' : '22px'};`

export const Text = styled.h1``

