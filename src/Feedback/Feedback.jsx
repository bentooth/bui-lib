import React from 'react'
import styled from 'styled-components';

import {
    Card,
    Text,
    ExternalLink,
} from 'index';

const FeedbackContainer = styled(Card)`
    ${({ theme }) => theme.mixins.spacing('padding', 2)}
`;

const FeedbackText = styled(Text)`
    ${({ theme }) => theme.mixins.spacing('line-height', 3)}
`;

const Link = styled(ExternalLink)`
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;
`;

const Feedback = () => {
    return (
        <FeedbackContainer>
            <Text type="title">Feedback</Text>
            <FeedbackText type="subheading" guttertop={2}>
                Chat with us on <Link href='https://discord.gg/7ktgMuX'>Discord</Link> or reach out to us by email <Link href='mailto:support@modular.network'>support@modular.network</Link>
            </FeedbackText>
        </FeedbackContainer>
    )
}

export default Feedback
