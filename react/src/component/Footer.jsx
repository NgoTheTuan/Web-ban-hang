import styled from 'styled-components'
import { Facebook, Instagram, Pinterest, Twitter, Room, LocalPhone, Email } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({
    flexDirection: 'column'
})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding:20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color:#${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({
    display: "none"

})}
`;

const Tittle = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding:20px;

`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>LAMA là thương hiệu thời trang trẻ em hàng đầu Việt Nam sở hữu gần 80 cửa hàng, showroom tại các trung tâm thương mại lớn Aeon, Vincom , Lotte khắp Việt Nam.
                Rabity cũng là đơn vị thời trang duy nhất tại VN 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Tittle>Liên kết</Tittle>
                <List>
                    <ListItem>Trang chủ</ListItem>
                    <ListItem>Giỏ hàng</ListItem>
                    <ListItem>Danh sách sản phẩm</ListItem>
                    <ListItem>Đăng kí</ListItem>
                    <ListItem>Đăng nhập</ListItem>
                </List>

            </Center>
            <Right>

                <Tittle>Liên hệ</Tittle>
                <ContactItem>
                    <Room style={{ marginRight: 10 }} />
                    355 Phố Thái Hà, Hà Nội
                </ContactItem>
                <ContactItem>
                    <LocalPhone style={{ marginRight: 10 }} />
                    0932473845
                </ContactItem>
                <ContactItem>
                    <Email style={{ marginRight: 10 }} />
                    lammashop@gmail.com
                </ContactItem>

            </Right>
        </Container>
    )
}

export default Footer
