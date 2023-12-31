/* eslint-disable max-len */
import React from "react"

import Banner from "components/Banner/Banner";
import Section from "components/Section/Section";
import SectionTitle from "components/Section/SectionTitle";
import UnistafSection from "components/UnistafSection/UnistafSection";
import CardSection from "components/CardSection/CardSection";

const PublicHomePage = () => {
    return (
        <>
            <Banner />
            <Section>
                <SectionTitle title={"L’orientation pas à pas avec UNISTAF"} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-16 px-10 mt-20">
                    <CardSection
                        number={1}
                        className={"bg-orange"}
                        label={"Projet"}
                        description={"Définissez votre parcours et votre projet d’orientation."}
                    />
                    <CardSection
                        number={2}
                        className={"bg-blueSecondary"}
                        label={"Projet"}
                        description={"Définissez votre parcours et votre projet d’orientation."}
                    />
                    <CardSection
                        number={3}
                        className={"bg-green"}
                        label={"Projet"}
                        description={"Définissez votre parcours et votre projet d’orientation."}
                    />
                </div>
            </Section>

            <UnistafSection
                description={"Unistaf est une plateforme d’orientation visant à dématérialiser les informations concernant les écoles accréditées ainsi que leurs programmes auprès des organisations agréées."}
            />
            {/* ******************* footer ********************* */}
        </>
    )
}

export default PublicHomePage