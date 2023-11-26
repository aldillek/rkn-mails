import {
    Body,
    Container,
    Font,
    Head,
    Heading,
    Html,
    Section,
    Tailwind,
} from '@react-email/components'

import * as React from 'react'
import { RknSection } from '../email-elements/rkn-section'
import { image1 } from '../images/img'

export interface RknSectionModel {
    title: string
    image: string
    position: 'left' | 'right'
    text: string[]
}

const sections: RknSectionModel[] = [
    {
        title: 'Zebranie walne',
        image: image1,
        position: 'left',
        text: [
            `Przypominamy przedstawicielom Kół Naukowych o pierwszym Zwyczajnym
  Walnym Zgromadzeniu RKN w tym roku kalendarzowym, które odbędzie
  się już w przyszłym tygodniu w czwartek, 23 marca.`,
            `W czasie obrad przedstawione propozycje zmian w Statucie RKN oraz
  przeprowadzone zostaną wybory uzupełniające do Komisji Rewizyjnej,
  Konkursowej i Komisji Odwoławczej. Szczegółowe informacje zostały
  indywidualnie do Kół.`,
            `Przypominamy również, że obecność reprezentacji Koła jest
  obowiązkowa. W przypadku delegacji osoby spoza Zarządu Koła
  (niewymienionej w ankiecie), prosimy o przesłanie pełnomocnictwa
  na adres mailowy: wiceprzewodniczacy.rkn@uj.edu.pl.`,
            `Po Walnym zapraszamy na integrację członków Wszystkich Kół
  Naukowych Walne po Walnym.`,
        ],
    },
    {
        title: 'INTEGRACJA KóŁ NAUKOWYCH',
        image: image1,
        position: 'right',
        text: [
            `Bezpośrednio po Walnym Zgromadzeniu, 23 marca w Klubie Spotkań Poczta Główna (przy ul. Westerplatte 20) odbędzie się impreza integracyjna Kół Naukowych.`,
            `Zachęcamy do wspólnej zabawy członków wszystkich Kół Naukowych! To nie tylko okazja, by spędzić czas w świetnej atmosferze, ale również doskonała okazja, by poznać osoby z innych kół i wydziałów, o przeróżnych zainteresowaniach.`,
            `Więcej informacji dostępnych jest w wydarzeniu . Do zobaczenia!`,
        ],
    },
    {
        title: 'STUDENCKO-DOKTORANCKIE SALONY NAUKOWE',
        image: image1,
        position: 'left',
        text: [
            `Bezpośrednio po Walnym Zgromadzeniu, 23 marca w Klubie Spotkań Poczta Główna (przy ul. Westerplatte 20) odbędzie się impreza integracyjna Kół Naukowych.`,
            `Zachęcamy do wspólnej zabawy członków wszystkich Kół Naukowych! To nie tylko okazja, by spędzić czas w świetnej atmosferze, ale również doskonała okazja, by poznać osoby z innych kół i wydziałów, o przeróżnych zainteresowaniach.`,
            `Więcej informacji dostępnych jest w wydarzeniu . Do zobaczenia!`,
        ],
    },
    {
        title: 'STUDENCKO-DOKTORANCKIE SALONY NAUKOWE',
        image: image1,
        position: 'right',
        text: [
            `Bezpośrednio po Walnym Zgromadzeniu, 23 marca w Klubie Spotkań Poczta Główna (przy ul. Westerplatte 20) odbędzie się impreza integracyjna Kół Naukowych.`,
            `Zachęcamy do wspólnej zabawy członków wszystkich Kół Naukowych! To nie tylko okazja, by spędzić czas w świetnej atmosferze, ale również doskonała okazja, by poznać osoby z innych kół i wydziałów, o przeróżnych zainteresowaniach.`,
            `Więcej informacji dostępnych jest w wydarzeniu . Do zobaczenia!`,
        ],
    },
]

export const RknUjTemplate = () => (
    <Tailwind
        config={{
            theme: {
                extend: {
                    colors: { greenMain: '#164330', greenSecond: '#76AB95' },
                },
            },
        }}
    >
        <Html lang="pl">
            <Head>
                <Font
                    fontFamily="Lato"
                    fallbackFontFamily="Georgia"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Body style={main}>
                <Container style={container}>
                    <Section>
                        <Section>
                            <Heading
                                as="h1"
                                className="px-3 py-6 rounded-2xl font-bold tracking-wider bg-greenMain text-center text-white text-5xl"
                            >
                                NEWSLETTER RKN UJ
                            </Heading>
                        </Section>
                        <Section style={yearStyle}>
                            <Heading as="h2" style={yearHeading}>
                                MARZEC 2023
                            </Heading>
                        </Section>
                    </Section>
                    {sections.map((section) => (
                        <RknSection key="{section.title}" section={section} />
                    ))}
                </Container>
            </Body>
        </Html>
    </Tailwind>
)

export default RknUjTemplate

const main = {
    backgroundColor: '#fefefe',
}

const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
}

const yearStyle = {}

const yearHeading = {
    backgroundColor: '#76AB95',
    fontSize: '26px',
    color: 'black',
    textAlign: 'center' as const,
    padding: '15px',
    width: '180px',
    marginLeft: 'auto',
    marginRight: '35px',
    marginTop: '-40px',
    borderRadius: '18px',
}

const logoSection = {
    textAlign: 'center',
    backgroundColor: 'red',
}
