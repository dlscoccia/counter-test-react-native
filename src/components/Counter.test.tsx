import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Counter from './Counter';

describe('Counter Component', () => {
  it('renders correctly', () => {
    // Arrange
    const {getByText} = render(<Counter />);
    // Assert
    expect(getByText('0')).toBeTruthy();
  });

  it("increments the counter when 'Incrementar' is pressed", () => {
    // Arrange
    const {getByText} = render(<Counter />);
    const incrementButton = getByText('Incrementar');

    // Act
    fireEvent.press(incrementButton);

    // Assert
    expect(getByText('1')).toBeTruthy();
  });

  it("decrements the counter when 'Decrementar' is pressed", () => {
    // Arrange
    const {getByText} = render(<Counter />);
    const incrementButton = getByText('Decrementar');

    // Act
    fireEvent.press(incrementButton);

    // Assert
    expect(getByText('-1')).toBeTruthy();
  });
});
