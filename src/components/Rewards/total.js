import { Container } from 'react-bootstrap';

const RewardsTotal = ({ total }) => {

    return (
        <Container className='p-1'>
            <h4>Total Reward Points: {total}</h4>
        </Container>
    )

}

export default RewardsTotal;