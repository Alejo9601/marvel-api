import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: white;
  height: 30px;
  border-radius: 10px;
  border: 0px;
  width: 400px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
`;

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledInput
        type="text"
        name="search"
        placeholder="make a character search here..."
      ></StyledInput>
    </StyledContainer>
  );
};

export default SearchBar;
