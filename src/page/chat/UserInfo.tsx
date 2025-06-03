import styled from "styled-components";
import {Profile} from "../../component/Profile.tsx";
import vithou from "../../assets/vithou.jpg";
import media1 from "../../assets/media1.svg";
import media2 from "../../assets/media2.svg";
import media3 from "../../assets/media3.svg";
import media4 from "../../assets/media4.svg";
import media5 from "../../assets/media5.svg";
import media6 from "../../assets/media6.svg";
import {Divider} from "./Divider.tsx";


export const UserInfo = () => {
    return <Container>
        <UserProfile>
            <Profile src={vithou} width={150} height={150}/>
            <Detail>
                <Name>
                    Vithou Then
                </Name>
                <Position>
                    Creative Director
                </Position>
            </Detail>
        </UserProfile>
        <Divider/>
        <UserInfoDetail>
            <InfoText>
                INFO
            </InfoText>
            <InfoHeader>
                Email
            </InfoHeader>
            <Description>
                example@mail.com
            </Description>
            <InfoHeader>
                Phone
            </InfoHeader>
            <Description>
                +123–4567–8800
            </Description>
            <InfoHeader>
                Birthday
            </InfoHeader>
            <Description>
                17 March, 1995
            </Description>
            <InfoHeader>
                Location
            </InfoHeader>
            <Description>
                New York, NY
            </Description>
        </UserInfoDetail>
        <Divider/>
        <SocialMedia>
            <SocialMediaHeader>
                <InfoHeader>
                    MEDIA
                </InfoHeader>
                <ViewAll>
                    View All
                </ViewAll>
            </SocialMediaHeader>
            <MediaCard>
                <img src={media1} alt=""/>
                <img src={media2} alt=""/>
                <img src={media3} alt=""/>
                <img src={media4} alt=""/>
                <img src={media5} alt=""/>
                <img src={media6} alt=""/>
            </MediaCard>
        </SocialMedia>
    </Container>
}

const MediaCard = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

const SocialMediaHeader = styled.div`
    display: flex;
    justify-content: space-between;
`


const ViewAll = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #21943A;
    cursor: pointer;
`

const Description = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`

const InfoHeader = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #8A9099;
`


const InfoText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #3F434A;
`

const Detail = styled.div`
    display: flex;
    flex-direction: column;
`

const Position = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8A9099;
    align-self: center;
`

const Name = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #3F434A;
`

const UserInfoDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const UserProfile = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    padding: 40px;
    gap: 30px;
`