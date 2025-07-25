import { Container } from "./Container"
import { HeroTitleStyled, BackgroundHero, HeroTextStyled } from "./Hero.styled"

export const Hero = ()=>{
    return <>
        <BackgroundHero>
        <Container>
        <HeroTitleStyled>RoomCraft</HeroTitleStyled>

        <HeroTextStyled>Створи кімнату своєї мрії за 5 хвилин</HeroTextStyled>
        </Container>
        </BackgroundHero>
    </>
}