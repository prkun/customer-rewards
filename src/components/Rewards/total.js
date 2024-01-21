import { Container } from "react-bootstrap";

const RewardsTotal = ({ total, filter }) => {

    return (
        <Container className="p-4">
            <h4>{filter?.customer?.name} has earned a total of {total} Reward Points for the period between {filter?.fromDate || ""} and {filter?.toDate || ""}</h4>
        </Container>
    )

}

export default RewardsTotal;