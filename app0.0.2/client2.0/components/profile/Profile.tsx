import React from "react"
import {
  useAuthState,
  useAuthDispatch,
} from "../../context/authState/AuthProvider"
import styled from "styled-components"
import { Button } from "../styled/Buttons"
import ProfileForm from "./ProfileForm"
import { useToggle } from "../../hooks/useToggle"
import { below } from "../../src/utils/helpers"

const StyledProfile = styled.section`
  padding: 2rem 1rem;
  width: 100%;
`

interface GridProps {
  wantToEdit: boolean
}
const Grid = styled.div<GridProps>`
  border: 2px solid ${(props) => props.theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  .user {
    flex: 1 1 50%;
    width: 50%;
    margin-top: 2rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    p {
      border-bottom: 2px solid
        ${({ theme }) => theme.colors.illustrations.stroke};
      padding: 0.5rem;
      width: ${({ wantToEdit }) => (wantToEdit ? "70%" : "80%")};
      span {
        color: ${({ theme }) => theme.colors.illustrations.stroke};
        margin: 0 0.3rem;
        text-transform: capitalize;
      }
    }
  }
  ${below.medium`
    flex-flow: column wrap;
    .user{
      p{
        width: 100%;
      }
    }
  `}
`

const BtnWrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  button {
    position: static;
    color: ${({ theme }) => theme.colors.illustrations.stroke};
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
    font-size: 1.3em;
  }
`

const Profile = () => {
  const { user } = useAuthState()
  const dispatch = useAuthDispatch()
  const { state: wantToEdit, toggle: toggleWantToEdit } = useToggle()

  const handleEdit = (user: User): void => {
    dispatch({ type: "SET_USER", payload: user })
    toggleWantToEdit()
  }

  return (
    <StyledProfile>
      <Grid wantToEdit={wantToEdit}>
        <div className="user">
          <p>
            <span>name</span>
            {user?.firstName} {user?.lastName}
          </p>
          <p>
            {" "}
            <span>Role</span> {user?.role}
          </p>
        </div>
        <ProfileForm wantToEdit={wantToEdit} />
      </Grid>

      <BtnWrapper>
        {user && <Button onClick={() => handleEdit(user)}>Edit</Button>}
        <Button>Delete</Button>
      </BtnWrapper>
    </StyledProfile>
  )
}
export default Profile