import React from "react";
import styled from "styled-components";
import { formatRatingToStars } from "../../src/utils/helpers";

interface StoreItemProps {
  store: Store;
}

const StyledStore = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme: { colors } }) => colors.illustrations.main};
`;

const StoreHero = styled.div`
  background-image: url("https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center;
  padding-bottom: 62.5%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to left,
      rgba(209, 107, 165, 0.6),
      rgba(199, 119, 185, 0.45),
      rgba(186, 131, 202, 0.4),
      rgba(170, 143, 216, 0.56),
      rgba(154, 154, 225, 0.54),
      rgba(138, 167, 236, 0.56),
      rgba(121, 179, 244, 0.66),
      rgba(105, 191, 248, 0.69),
      rgba(82, 207, 254, 0.72),
      rgba(65, 223, 255, 0.55),
      rgba(70, 238, 250, 0.45),
      rgba(95, 251, 241, 0.85)
    );
  }
`;

const Body = styled.div`
  background: ${({ theme: { colors } }) => colors.illustrations.main};
  height: 12em;
  margin: 0;
  padding: 0 0.5em;
  h3 {
    background: ${({ theme: { colors } }) => colors.illustrations.tertiary};
    color: ${({ theme: { colors } }) => colors.elements.headline};
    padding: 0 0.4em;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    span {
      display: inline-block;
      &:last-child {
        margin-left: 0.6rem;
        background: ${({ theme }) => theme.colors.illustrations.stroke};
      }
    }
  }

  p {
    color: ${({ theme: { colors } }) => colors.elements.paragraph};
  }
`;

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  function handleWord(word: string) {
    return store.name.split(" ").map((x) => <span key={x}>{x}</span>);
  }
  return (
    <StyledStore>
      <StoreHero></StoreHero>
      <Body>
        <h3>{handleWord(store.name)}</h3>
        <p>{store.name}</p>
        <p>{formatRatingToStars(store.rating)}</p>
        <p>owner {store.author.firstName} </p>
      </Body>
    </StyledStore>
  );
};
export default StoreItem;
