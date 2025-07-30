import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SplashScreen from '../components/common/SplashScreen';

describe('SplashScreen Component', () => {
  it('debería renderizar la pantalla de carga', () => {
    // Renderizamos el componente SplashScreen
    render(<SplashScreen />);
    
    // Verificamos que la imagen del logo aparezca
    const logoImage = screen.getByAltText('Uala Logo');
    expect(logoImage).toBeInTheDocument();
  });

  it('debería tener la imagen con atributos correctos', () => {
    // Renderizamos el componente
    render(<SplashScreen />);
    
    const logoImage = screen.getByAltText('Uala Logo');
    
    // Verificamos que la imagen tenga el atributo src y alt correcto
    expect(logoImage).toHaveAttribute('src');
    expect(logoImage).toHaveAttribute('alt', 'Uala Logo');
  });
});
