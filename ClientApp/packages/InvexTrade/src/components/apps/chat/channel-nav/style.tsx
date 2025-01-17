//@ts-nocheck
import styled, { css, device, themeGet } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`;

interface ILinkProps {
    $active?: boolean;
}

const linkCss = css<ILinkProps>`
    color: ${themeGet("colors.text3")};
    padding: 2px;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
        margin-left: 2px;
    }
    ${device.small} {
        padding: 2px 5px;
    }
    ${({ $active }) =>
        !!$active &&
        css`
            color: ${themeGet("colors.text2")};
        `}
    span {
        margin-left: 5px;
        font-weight: 500;
    }
    svg {
        width: 20px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        !!props.$active &&
        css`
            color: ${themeGet("colors.primary")};
        `}
`;

export const StyledLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))<ILinkProps>`
    ${linkCss};
`;

export const StyledButton = styled(({ ...rest }) => (
    <button type="button" {...rest} />
))<ILinkProps>`
    border: none;
    background: transparent;
    ${linkCss};
`;
