import { render } from '@testing-library/react';
import Error from '../../components/Error';  

describe('Error Component', () => {
  it('renders the message passed as a prop', () => {
    const message = 'Something went wrong!';

    const { getByText } = render(<Error message={message} />);

    expect(getByText(message)).toBeInTheDocument();
  });
});
