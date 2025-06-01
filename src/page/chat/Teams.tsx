import {TeamHeader} from "./TeamHeader.tsx";
import styled from "styled-components";
import {Team} from "./Team.tsx";

export const Teams = () => {
    return <TeamContainer>
        <TeamHeader/>
        <Divider/>
        <TeamWrapper>
            <Team name={"Manager 1"} lastChat={"Hello. Can you drop the photos?"}/>
            <Divider/>
            <Team name={"Manager 2"} lastChat={"Sure, sending them now."}/>
            <Divider/>
            <Team name={"Manager 3"} lastChat={"Let's meet at 3 PM."}/>
            <Divider/>
            <Team name={"Manager 4"} lastChat={"I’ve updated the report."}/>
            <Divider/>
            <Team name={"Manager 5"} lastChat={"Check your email."}/>
            <Team name={"Manager 6"} lastChat={"I'll be late to the meeting."}/>
            <Team name={"Manager 7"} lastChat={"Can we reschedule?"}/>
            <Team name={"Manager 8"} lastChat={"The server is down."}/>
            <Team name={"Manager 9"} lastChat={"Lunch at 1?"}/>
            <Team name={"Manager 10"} lastChat={"Finished the task."}/>
            <Team name={"Manager 11"} lastChat={"Need access to the doc."}/>
            <Team name={"Manager 12"} lastChat={"All good from my side."}/>
            <Team name={"Manager 13"} lastChat={"Working on it now."}/>
            <Team name={"Manager 14"} lastChat={"What’s the deadline?"}/>
            <Team name={"Manager 15"} lastChat={"Review requested changes."}/>
            <Team name={"Manager 16"} lastChat={"Call me when you're free."}/>
            <Team name={"Manager 17"} lastChat={"Got the approval."}/>
            <Team name={"Manager 18"} lastChat={"Pushed to production."}/>
            <Team name={"Manager 19"} lastChat={"Designs look great!"}/>
            <Team name={"Manager 20"} lastChat={"Where’s the invoice?"}/>
            <Team name={"Manager 21"} lastChat={"Reboot fixed the issue."}/>
            <Team name={"Manager 22"} lastChat={"Joined the meeting."}/>
            <Team name={"Manager 23"} lastChat={"Deadline moved to Friday."}/>
            <Team name={"Manager 24"} lastChat={"Shared on the drive."}/>
            <Team name={"Manager 25"} lastChat={"Need final sign-off."}/>
            <Team name={"Manager 26"} lastChat={"Taking a quick break."}/>
            <Team name={"Manager 27"} lastChat={"Looks like a bug."}/>
            <Team name={"Manager 28"} lastChat={"Can you review it?"}/>
            <Team name={"Manager 29"} lastChat={"Please check again."}/>
            <Team name={"Manager 30"} lastChat={"We’re ahead of schedule."}/>
            <Team name={"Manager 31"} lastChat={"Add this to the agenda."}/>
            <Team name={"Manager 32"} lastChat={"I'm on leave today."}/>
            <Team name={"Manager 33"} lastChat={"Resent the files."}/>
            <Team name={"Manager 34"} lastChat={"Need feedback ASAP."}/>
            <Team name={"Manager 35"} lastChat={"Thanks for the update."}/>
            <Team name={"Manager 36"} lastChat={"Meeting rescheduled."}/>
            <Team name={"Manager 37"} lastChat={"Could you clarify this?"}/>
            <Team name={"Manager 38"} lastChat={"Looks good to me."}/>
            <Team name={"Manager 39"} lastChat={"Docs are incomplete."}/>
            <Team name={"Manager 40"} lastChat={"I’ll finish it today."}/>
            <Team name={"Manager 41"} lastChat={"Waiting for confirmation."}/>
            <Team name={"Manager 42"} lastChat={"Bug is now fixed."}/>
            <Team name={"Manager 43"} lastChat={"Check the new release."}/>
            <Team name={"Manager 44"} lastChat={"Everything is on track."}/>
            <Team name={"Manager 45"} lastChat={"We need to escalate."}/>
            <Team name={"Manager 46"} lastChat={"Sent to QA."}/>
            <Team name={"Manager 47"} lastChat={"How’s the progress?"}/>
            <Team name={"Manager 48"} lastChat={"Code has been merged."}/>
            <Team name={"Manager 49"} lastChat={"Created the ticket."}/>
            <Team name={"Manager 50"} lastChat={"Approved!"}/>
            <Team name={"Manager 51"} lastChat={"On a quick call."}/>
            <Team name={"Manager 52"} lastChat={"Working remotely today."}/>
            <Team name={"Manager 53"} lastChat={"Demo went well."}/>
            <Team name={"Manager 54"} lastChat={"Branch is up-to-date."}/>
            <Team name={"Manager 55"} lastChat={"Let's wrap this up."}/>
            <Team name={"Manager 56"} lastChat={"Fix deployed."}/>
            <Team name={"Manager 57"} lastChat={"Logging out."}/>
            <Team name={"Manager 58"} lastChat={"Retrying the request."}/>
            <Team name={"Manager 59"} lastChat={"Please update status."}/>
            <Team name={"Manager 60"} lastChat={"All clear now."}/>
            <Team name={"Manager 61"} lastChat={"Ready for production."}/>
            <Team name={"Manager 62"} lastChat={"Let’s test it again."}/>
            <Team name={"Manager 63"} lastChat={"Will join soon."}/>
            <Team name={"Manager 64"} lastChat={"Add me to the thread."}/>
            <Team name={"Manager 65"} lastChat={"I’ll review tonight."}/>
            <Team name={"Manager 66"} lastChat={"Everything works fine."}/>
            <Team name={"Manager 67"} lastChat={"Let’s discuss tomorrow."}/>
            <Team name={"Manager 68"} lastChat={"Looping in John."}/>
            <Team name={"Manager 69"} lastChat={"Ping me later."}/>
            <Team name={"Manager 70"} lastChat={"Draft is ready."}/>
            <Team name={"Manager 71"} lastChat={"Need more details."}/>
            <Team name={"Manager 72"} lastChat={"Can we prioritize?"}/>
            <Team name={"Manager 73"} lastChat={"Estimate the effort."}/>
            <Team name={"Manager 74"} lastChat={"Looks promising."}/>
            <Team name={"Manager 75"} lastChat={"Sync completed."}/>
            <Team name={"Manager 76"} lastChat={"Page not loading."}/>
            <Team name={"Manager 77"} lastChat={"Redesign suggested."}/>
            <Team name={"Manager 78"} lastChat={"Adding test cases."}/>
            <Team name={"Manager 79"} lastChat={"Remove unused code."}/>
            <Team name={"Manager 80"} lastChat={"Push before 5 PM."}/>
            <Team name={"Manager 81"} lastChat={"Let's release it."}/>
            <Team name={"Manager 82"} lastChat={"Thanks, noted."}/>
            <Team name={"Manager 83"} lastChat={"New build deployed."}/>
            <Team name={"Manager 84"} lastChat={"Restarting server."}/>
            <Team name={"Manager 85"} lastChat={"Retry the process."}/>
            <Team name={"Manager 86"} lastChat={"Add to release notes."}/>
            <Team name={"Manager 87"} lastChat={"Blocked by issue #234"}/>
            <Team name={"Manager 88"} lastChat={"Fix looks solid."}/>
            <Team name={"Manager 89"} lastChat={"Request completed."}/>
            <Team name={"Manager 90"} lastChat={"Looks inconsistent."}/>
            <Team name={"Manager 91"} lastChat={"I’ll double-check."}/>
            <Team name={"Manager 92"} lastChat={"Merge is pending."}/>
            <Team name={"Manager 93"} lastChat={"Deployment failed."}/>
            <Team name={"Manager 94"} lastChat={"Testing again."}/>
            <Team name={"Manager 95"} lastChat={"Debug logs added."}/>
            <Team name={"Manager 96"} lastChat={"Hotfix committed."}/>
            <Team name={"Manager 97"} lastChat={"CI pipeline passed."}/>
            <Team name={"Manager 98"} lastChat={"Rollout started."}/>
            <Team name={"Manager 99"} lastChat={"Fix pushed live."}/>
            <Team name={"Manager 100"} lastChat={"Thanks everyone!"}/>
        </TeamWrapper>


    </TeamContainer>
}

const Divider = styled.hr`
    border: 1px solid #E8E9EB;
`

const TeamWrapper = styled.div`
    height: calc(100vh - 200px);
    overflow: scroll;
    overflow-x: hidden;
    width: 100%;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
`

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
`