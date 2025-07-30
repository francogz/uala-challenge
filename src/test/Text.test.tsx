import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Text from '../components/common/Text';

describe('Text Component', () => {
  it('debería renderizar el texto correctamente', () => {
    // Renderizamos el componente con props básicas
    render(
      <Text 
        title="Hola Mundo" 
        fs="16px" 
        fw="400" 
        color="#000000" 
      />
    );
    
    // Verificamos que el texto aparezca en pantalla
    expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
  });

  it('debería aplicar los estilos correctos', () => {
    // Renderizamos con estilos específicos
    render(
      <Text 
        title="Texto con estilos" 
        fs="20px" 
        fw="bold" 
        color="#FF0000" 
        textAlign="center"
      />
    );
    
    const textElement = screen.getByText('Texto con estilos');
    
    // Verificamos que el elemento tenga los estilos aplicados
    expect(textElement).toHaveStyle({
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#FF0000',
      textAlign: 'center'
    });
  });
});
