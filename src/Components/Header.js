import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>

      {
        burgerStatus && 
        <BurgerNav>
            <CloseWrap>
                 <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrap>
                <li>
                <a href="#">Existing Inventory</a>{" "}
                </li>
                <li>
                <a href="#">Used Inventory</a>{" "}
                </li>
                <li>
                <a href="#">Trade-in</a>{" "}
                </li>
                <li>
                <a href="#">Cybertruck</a>{" "}
                </li>
                <li>
                <a href="#">Roadster</a>{" "}
                </li>
                <li>
                <a href="#">Semi</a>{" "}
                </li>
                <li>
                <a href="#">Charging</a>{" "}
                </li>
                <li>
                <a href="#">Power Station</a>{" "}
                </li>
                <li>
                <a href="#">Test Drive</a>{" "}
                </li>
      </BurgerNav>
      }
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  /* top: 0;
    left: 0;
    right: 0; */
  justify-content: space-between;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  display: flex;
  text-align: start;
  flex-direction: column;
  padding: 20px; 
  li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    font-weight: 600;
  }
`;

const CloseWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
