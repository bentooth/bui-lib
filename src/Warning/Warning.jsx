import React from 'react'
import styled from 'styled-components';

import {
    Card,
    Text,
} from 'components/lib';

const WarningContainer = styled(Card)`
    background: ${({ theme }) => theme.palette.background.paper};
    box-shadow: ${({ theme }) => theme.shadows[1]};
    ${({ theme }) => theme.mixins.spacing('padding', 2)}
`;

const WarningHeader = styled(Text)`
    color: ${({ theme }) => theme.palette.secondary.main};
`;

const WarningText = styled(Text)`
    ${({ theme }) => theme.mixins.spacing('line-height', 3)}
`;

const Warning = () => {
    return (
        <WarningContainer>
            <WarningHeader type="title">WARNING THIS IS A DEMO</WarningHeader>
            <WarningText type="subheading" guttertop={2}>
                This is demo version of Blossom connected to the Rinkeby Test Net. <br /><b>DO NOT</b> send real Ether to this address.
            </WarningText>
        </WarningContainer>
    )
}

export default Warning
