import styled from "styled-components";
import {Team} from "./Team.tsx";
import {Divider} from "./Divider.tsx";

const teamData = [
    {name: "John Min Doe", lastChat: "Hello. Can you drop the photos?"},
    {name: "Manager 2", lastChat: "Sure, sending them now."},
    {name: "Manager 3", lastChat: "Let's meet at 3 PM."},
    {name: "Manager 4", lastChat: "I’ve updated the report."},
    {name: "Manager 5", lastChat: "Check your email."},
    {name: "Manager 6", lastChat: "I'll be late to the meeting."},
    {name: "Manager 7", lastChat: "Can we reschedule?"},
    {name: "Manager 8", lastChat: "The server is down."},
    {name: "Manager 9", lastChat: "Lunch at 1?"},
    {name: "Manager 10", lastChat: "Finished the task."},
    {name: "Manager 100", lastChat: "Thanks everyone!"},
    {name: "John Min Doe", lastChat: "Hello. Can you drop the photos?"},
    {name: "Manager 2", lastChat: "Sure, sending them now."},
    {name: "Manager 3", lastChat: "Let's meet at 3 PM."},
    {name: "Manager 4", lastChat: "I’ve updated the report."},
    {name: "Manager 5", lastChat: "Check your email."},
    {name: "Manager 6", lastChat: "I'll be late to the meeting."},
    {name: "Manager 7", lastChat: "Can we reschedule?"},
    {name: "Manager 8", lastChat: "The server is down."},
    {name: "Manager 9", lastChat: "Lunch at 1?"},
    {name: "Manager 10", lastChat: "Finished the task."},
    {name: "Manager 100", lastChat: "Thanks everyone!"},
    {name: "John Min Doe", lastChat: "Hello. Can you drop the photos?"},
    {name: "Manager 2", lastChat: "Sure, sending them now."},
    {name: "Manager 3", lastChat: "Let's meet at 3 PM."},
    {name: "Manager 4", lastChat: "I’ve updated the report."},
    {name: "Manager 5", lastChat: "Check your email."},
    {name: "Manager 6", lastChat: "I'll be late to the meeting."},
    {name: "Manager 7", lastChat: "Can we reschedule?"},
    {name: "Manager 8", lastChat: "The server is down."},
    {name: "Manager 9", lastChat: "Lunch at 1?"},
    {name: "Manager 10", lastChat: "Finished the task."},
    {name: "Manager 100", lastChat: "Thanks everyone!"}
];


export const Teams = () => {
    return <TeamContainer>
        <TeamWrapper>
            {teamData.map((value, index) => (
                <>
                    <Team name={value.name} lastChat={value.lastChat} key={index}/>
                    <Divider/>
                </>
            ))}
        </TeamWrapper>
    </TeamContainer>
}

const TeamWrapper = styled.div`
    width: 100%;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    scrollbar-color: #636363 #F5F5F5;
    overflow: auto;
    height: calc(100vh - 210px);
`

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    height: 100%;
`