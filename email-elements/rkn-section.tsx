import {
    Section,
    Row,
    Column,
    Img,
    Heading,
    Text,
} from '@react-email/components'
import React from 'react'
import { RknSectionModel } from '../emails/rkn-uj'

export const RknSection = ({ section }: { section: RknSectionModel }) => {
    return (
        <Section>
            <Row>
                {section.position === 'left' && (
                    <Column>
                        <Img src={section.image} width={315} height={210}></Img>
                    </Column>
                )}
                <Column>
                    <Row>
                        <Heading as="h2">{section.title}</Heading>
                    </Row>
                    {section.text.map((text) => (
                        <Row>
                            <Text style={textStyle}> - {text}</Text>
                        </Row>
                    ))}
                </Column>
                {section.position === 'right' && (
                    <Column>
                        <Img src={section.image} width={315} height={210}></Img>
                    </Column>
                )}
            </Row>
        </Section>
    )
}

const textStyle = {
    fontSize: '13px',
    lineHeight: '16px',
    margin: '2px 0px',
}
