import { render } from '@testing-library/react';
import Loading from '../../components/Loading';  

describe('Loading Component', () => {
  it('renders the loading message', () => {
    
    const { getByText } = render(<Loading />);

    expect(getByText('Loading flight data...')).toBeInTheDocument();
  });
});
