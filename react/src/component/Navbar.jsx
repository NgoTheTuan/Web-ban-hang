import { useState } from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined, ExitToApp } from '@material-ui/icons'
import { Badge,List } from '@material-ui/core';
import { mobile,tabled } from '../responsive'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux'
import { useNavigate } from 'react-router-dom';

import aokhoan from '../img/ao-khoan.png';
import quandai from '../img/quan-dai.png';
import aococ from '../img/ao-coc.png';

const Container = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
    ${mobile({
    height: "120px"
})}

`;

const Wapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({

})}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items:center;
`;

const Languages = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({
    display: "none"
})}
`;

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items:center;
   margin-left:25px;
   padding:5px;
   ${mobile({
    margin: "13px"
})}

`;

const Input = styled.input`
    border:none;
    ${mobile({
    width: "50px"
})}
`;

const Center = styled.div`
    flex:1;
    text-align:center; 
`;

const Logo = styled.h1`
    font-weight:bold;
    cursor: pointer;
    ${mobile({
    fontSize: "24px"
})}
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({
    flex: 2,
    justifyContent: "center"
})}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left:25px;
    ${mobile({
    fontSize: "12px",
    marginLeft: "10px"

})}
`;

const MenuUser = styled.div`
    font-size:24px;
    cursor: pointer;
    margin-left:25px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({
    fontSize: "12px",
    marginLeft: "10px"

})}
`;

const UserName = styled.span`
margin-right: 10px;
`;

const Menu = styled.div`
    background-color: #F7F7F7;
    flex:1;

    ${tabled({
        display: 'none'
    })}

`;

const MenuContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    height: 100%;
    ${mobile({
    width: '650px'

})}

`;

const MenuInfo = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 120px;
    height: 100%;
    cursor: pointer;
    &:hover {
    background-color: #e2dfdf;
    }

    ${mobile({
    
})}
`;

const MenuImg = styled.div`
    margin-right: 5px;
`;

const MenuInfoImg = styled.img`
  
`;

const MenuInfoName = styled.span`
    display: block;
    color: black;
`;

const MenuTabled = styled.div``;


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const [search, setSearch] = useState('');

    const Logout = () => {
        dispatch(logout([]))
    }

    const clickSearch = () => {
        navigate(`search/${search}`);
    }
    return (
        <Container>
            <Wapper>
                <Left>
                    <Languages>VN</Languages>
                    <SearchContainer>
                        <Input onChange={(e) => setSearch(e.target.value)} />
                        <Search onClick={() => clickSearch()} style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo onClick={() => navigate('/')}>LAMA.</Logo>
                </Center>
                <Right>
                    {user
                        ? <MenuUser onClick={Logout}><UserName>{user.username}</UserName>  <ExitToApp /> </MenuUser>
                        : <MenuItem onClick={() => navigate('/login')}>SIGN IN</MenuItem>
                    }


                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wapper>


            <Menu>
                <MenuContainer>
                    <MenuInfo>
                        <Link to='/products/Be gai' style={{ textDecoration: 'none', display: "contents" }}>
                            <MenuImg>
                                <MenuInfoImg src='https://theme.hstatic.net/1000290074/1000848821/14/icon_menu_2.png?v=69' />
                            </MenuImg>
                            <MenuInfoName>Bé gái</MenuInfoName>
                        </Link>
                    </MenuInfo>
                    <MenuInfo>
                        <Link to='/products/Be trai' style={{ textDecoration: 'none', display: "contents" }}>
                            <MenuImg>
                                <MenuInfoImg src='https://theme.hstatic.net/1000290074/1000848821/14/icon_menu_3.png?v=69' />
                            </MenuImg>
                            <MenuInfoName>Bé trai</MenuInfoName>
                        </Link>
                    </MenuInfo>
                    <MenuInfo>
                        <Link to='/products/ao coc' style={{ textDecoration: 'none', display: "contents" }}>
                            <MenuImg>
                                <MenuInfoImg style={{ opacity: 0.6 }} src={aococ} />
                            </MenuImg>
                            <MenuInfoName>Áo cộc</MenuInfoName>
                        </Link>

                    </MenuInfo>
                    <MenuInfo>
                        <Link to='/products/ao khoac' style={{ textDecoration: 'none', display: "contents" }}>

                            <MenuImg>
                                <MenuInfoImg style={{ opacity: 0.6 }} src={aokhoan} />
                            </MenuImg>
                            <MenuInfoName>Áo khoác</MenuInfoName>
                        </Link>

                    </MenuInfo>
                    <MenuInfo>
                        <Link to='/products/quan' style={{ textDecoration: 'none', display: "contents" }}>

                            <MenuImg>
                                <MenuInfoImg style={{ opacity: 0.6 }} src={quandai} />
                            </MenuImg>
                            <MenuInfoName>Quần dài</MenuInfoName>
                        </Link>

                    </MenuInfo>
                </MenuContainer>
            </Menu>

            <MenuTabled>
                <List/>
            </MenuTabled>

        </Container >
    )
}

export default Navbar

