import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function Birthday() {

    const [ userList, setUserList ] = useState([]);

    const list = [
        {
            image: require("../assets/images/1.png"),
            name: "Griffin Wooldridge",
            age: "20 Years",
            id: 1
        },
        {
            image: require("../assets/images/2.png"),
            name: "Hester Hogan",
            age: "23 Years",
            id: 2
        },
        {
            image: require("../assets/images/3.png"),
            name: "Danny Winget",
            age: "25 Years",
            id: 3
        },
        {
            image: require("../assets/images/4.png"),
            name: "Joshua Vergera",
            age: "25 Years",
            id: 4
        },
        {
            image: require("../assets/images/5.png"),
            name: "Jon Rettinger",
            age: "20 Years",
            id: 5
        },
    ]

    useEffect(() => {
        setUserList(list.map((user) => (
            <ListItem key={user.id}>
                <ImageContainer>
                    <Image
                        src={user.image}
                        alt="image"
                    />
                </ImageContainer>
                <Description>
                    <Name>{user.name}</Name>
                    <Age>{user.age}</Age>
                </Description>
            </ListItem>
        )))
    },[]);

    return (
            <Container>
                <Heading>5 birthdays today</Heading>
                <List>{userList}</List>
                <Button onClick={() => setUserList([])}>Clear All</Button> 
            </Container>
    );
}
const Container = styled.section`
    height: 100vh;
    width: 50%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 30px;
`;
const Heading = styled.h1`
    text-align: center;
    font-family: "baloo_paaji_2bold";
    font-size: 40px;
    margin-bottom: 25px;
`;
const List = styled.ul`
    width: 80%;
`;
const ListItem = styled.li`
    display: flex;
    margin-bottom: 20px;
    margin-left: 50px;
`;
const ImageContainer = styled.div`
    width: 13%;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const Description = styled.div`
    margin-left: 10px;
`;
const Name = styled.h3`
    font-size: 17px;
    font-weight: 700;
`;
const Age = styled.span`
    color: #868f9c;
    font-size: 16px;
`;
const Button = styled.button`
    background: #d43d94;
    display: block;
    padding: 12px 220px;
    margin-left: 50px;
    border-radius: 6px;
    font-size: 16px;
    color: #fff;
    font-family: "baloo_paaji_2regular";
`;
