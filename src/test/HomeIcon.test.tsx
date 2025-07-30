import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomeIcon from '../assets/icons/HomeIcon';

describe('HomeIcon Component', () => {
  it('debería renderizar el icono SVG correctamente', () => {
    // Renderizamos el icono con color por defecto
    const { container } = render(<HomeIcon color="#3564FD" />);
    
    // Verificamos que el SVG esté presente
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('debería aplicar el color pasado como prop', () => {
    const customColor = "#FF0000";
    
    // Renderizamos con un color personalizado
    const { container } = render(<HomeIcon color={customColor} />);
    
    // Verificamos que el path tenga el color correcto
    const pathElement = container.querySelector('path');
    expect(pathElement).toHaveAttribute('fill', customColor);
  });

  it('debería tener las dimensiones correctas del SVG', () => {
    // Renderizamos el icono
    const { container } = render(<HomeIcon color="#000000" />);
    
    const svgElement = container.querySelector('svg');
    
    // Verificamos las dimensiones del SVG
    expect(svgElement).toHaveAttribute('width', '18');
    expect(svgElement).toHaveAttribute('height', '18');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 18 18');
  });
});
