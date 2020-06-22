import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: solid 1px rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      height: 42px;
      width: 42px;
      border: 0;
      cursor: pointer;
      border-radius: 18px;
      background-color: #3b5bfd;
      transition: all 0.3s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  ul {
    margin-top: 30px;
  }

`;