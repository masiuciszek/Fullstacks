import styled from "styled-components";
import { above, below, handleFlex } from "../../src/utils/helpers";

export const FormGroup = styled.div`
  padding: 0.5rem;
  margin: 0.5rem 0;
  ${below.small`
    width: 100%
  `}
  ${above.small`
    width: 90%
  `}

  ${above.medium`
    width: 70%;
  `}
  ${above.large`
    width: 45rem;
  `}
`;
export const FormLabel = styled.label`
  ${handleFlex("column", "flex-start", "flex-start")};
  span {
    text-transform: capitalize;
    padding: 0.5rem 0;
  }
`;
export const FormInput = styled.input`
  width: 100%;
  padding: 0.4rem 0.6rem;
  font-size: 1em;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 3px solid ${({ theme }) => theme.colors.illustrations.main};
  outline: none;
  transition: ${({ theme }) => theme.transition.mainTransition};
  &:focus {
    border-color: ${({ theme }) => theme.colors.illustrations.secondary};
    width: 97%;
  }
`;