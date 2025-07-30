import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import CustomButton from '../components/common/CustomButton';

describe('CustomButton Component', () => {
  it('debería renderizar el botón con el texto correcto', () => {
    // Creamos una función mock para el onClick
    const mockOnClick = vi.fn();
    
    // Renderizamos el botón
    render(
      <CustomButton 
        title="Hacer clic aquí" 
        onClick={mockOnClick} 
      />
    );
    
    // Verificamos que el botón aparezca con el texto correcto
    expect(screen.getByRole('button', { name: 'Hacer clic aquí' })).toBeInTheDocument();
  });

  it('debería ejecutar onClick cuando se hace clic', async () => {
    // Configuramos userEvent
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    
    // Renderizamos el botón
    render(
      <CustomButton 
        title="Botón clickeable" 
        onClick={mockOnClick} 
      />
    );
    
    // Hacemos clic en el botón
    await user.click(screen.getByRole('button', { name: 'Botón clickeable' }));
    
    // Verificamos que la función onClick se haya ejecutado
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('debería estar deshabilitado cuando disabled es true', () => {
    const mockOnClick = vi.fn();
    
    // Renderizamos botón deshabilitado
    render(
      <CustomButton 
        title="Botón deshabilitado" 
        onClick={mockOnClick} 
        disabled={true}
      />
    );
    
    const button = screen.getByRole('button', { name: 'Botón deshabilitado' });
    
    // Verificamos que el botón esté deshabilitado
    expect(button).toBeDisabled();
  });
});
