import Img1 from '../../js/assets/images/img-1.webp'

export type CoreValueType = {
    title: string,
    description: string,
}
export const coreValues: CoreValueType[] = [
    {
        title: "Godliness",
        description: "Reverence for God in all we do, living a life that honours Him."
    },
    {
        title: "Love",
        description: "Demonstrating Christ-like love to one another and our community."
    },
    {
        title: "Excellence",
        description: "Pursuing the highest standard in every area of service."
    },
    {
        title: "Righteousness",
        description: "Standing firm in the righteousness of Christ as our identity."
    },
    {
        title: "Servanthood",
        description: "Leading through humble service as Jesus exemplified."
    },
    {
        title: "Humility",
        description: "Walking in meekness, esteeming others above ourselves."
    },
]

export type MinisterType = {
    name: string,
    role: string,
    image: string,
}
export const ministers: MinisterType[] = [
    {
        name: "Pastor Olufisayo",
        role: "Pastor",
        image: Img1
    },
    {
        name: "Lady Evangelist  Olufisayo",
        role: "Lady Evangelist",
        image: Img1
    },
    {
        name: "Evangelist Kay",
        role: "Evangelist",
        image: Img1
    },
    {
        name: "Evangelist Timothy",
        role: "Evangelist",
        image: Img1
    },
    {
        name: "Lady Evangelist Charles",
        role: "Evangelist",
        image: Img1
    },
]