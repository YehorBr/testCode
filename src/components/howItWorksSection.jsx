import { Container } from "./Container"
import { HowItWorksList,HowItWorksListItem, HowItWorksTitle, HowItWorksText, CardTitle } from "./HowItWorks.styled"
import { LuLayoutDashboard } from "react-icons/lu";
import { TbArmchair2 } from "react-icons/tb";
import { MdOutlineSaveAlt } from "react-icons/md";

export const HowItWorks = () =>{
    return <>
    <Container>
    <HowItWorksTitle>Як це працює?</HowItWorksTitle>
    <HowItWorksList>
        <HowItWorksListItem>
            <LuLayoutDashboard size={50}/>
            <CardTitle>Обери кімнату</CardTitle>
            <HowItWorksText>Вибери розмір кімнати або створюй свою сітку</HowItWorksText>
        </HowItWorksListItem>
        <HowItWorksListItem>
            <TbArmchair2 size={50}/>
            <CardTitle>Перетягуй меблі</CardTitle>
            <HowItWorksText>Обирай предмети з каталогу та перетягуй у свою кімнату</HowItWorksText>
        </HowItWorksListItem>
        <HowItWorksListItem>
            <MdOutlineSaveAlt size={50}/>
            <CardTitle>Збережи та поділись</CardTitle>
            <HowItWorksText>Збережи свій дизайн як картинку або поділись із друзями</HowItWorksText>
        </HowItWorksListItem>
    </HowItWorksList>
    </Container>
    </>
}