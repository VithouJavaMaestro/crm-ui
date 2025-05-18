import {NoteRepresentation} from "../../model/note.ts";
import dateIcon from "../../assets/date.svg";
import menuIcon from "../../assets/menu.svg";
import {
    Clickable,
    Color,
    Content,
    DateTitle,
    DescriptionContainer,
    Header,
    NoteInput,
    NoteTextArea,
    TitleNoteContainer,
    Topic
} from "./NoteDetail.tsx";
import cancelIcon from "../../assets/cancel.svg";
import saveIcon from "../../assets/save.svg";
import {useForm} from "react-hook-form";
import {useUpdateNoteMutation} from "../../api/noteApi.ts";

export const NoteDetailEdit = ({data, setMode, closeModal}: {
    data?: NoteRepresentation,
    setMode: () => void,
    closeModal: () => void
}) => {

    const [triggerUpdateNote] = useUpdateNoteMutation();

    const {
        register,
        handleSubmit
    } = useForm<NoteRepresentation>();

    const onSubmit = async (note: NoteRepresentation) => {
        note.id = data?.id;
        try {
            await triggerUpdateNote(note).unwrap();
            closeModal();
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <Header>
            <div style={{
                display: "flex",
                gap: 30,
                justifyContent: "flex-end"
            }}>
                <Clickable src={cancelIcon} alt="" width={20} onClick={setMode}/>
                <Clickable src={saveIcon} alt="" height={20} onClick={handleSubmit(onSubmit)}/>
            </div>
        </Header>
        <Content>
            <TitleNoteContainer>
                <Topic className={"title"}>
                    <div style={{
                        alignSelf: "center",
                    }}>
                        <Color/>
                    </div>
                    <NoteInput id={'title'} type={'text'} defaultValue={data?.title} {...register("title", ({
                        required: true
                    }))}/>
                </Topic>
                <Topic>
                    <img src={dateIcon} alt="date"/>
                    <DateTitle>{data?.createdAt}</DateTitle>
                </Topic>
            </TitleNoteContainer>
            <DescriptionContainer>
                <img src={menuIcon} alt={"menu"} width={20} height={20}/>

                <NoteTextArea id={'description'} placeholder={"Type something"}
                              defaultValue={data?.description} {...register("description", ({
                    required: true
                }))}/>
            </DescriptionContainer>
        </Content>
    </>

}