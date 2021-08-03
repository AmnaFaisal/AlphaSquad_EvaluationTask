import React, { Component } from "react";
import Header from "../components/Header";
import HText from "../components/HText";
import WSelect from "../components/WSelect";
import Images from "../components/Images";

class CaseStudies extends Component {
  render() {
    return (
      <div class="class= w-full bg-gradient-to-b from bg-blue-10 to bg-white h-auto">
        <div >
          <div >
            <Header></Header>
            <div >
              <HText classs="text-8xl text-center leading-tight tracking-widest font-bold" >
                CASE STUDIES
              </HText>
              <HText classs="text-xl leading-6 text-center" >
                See how leading organizations and freelance developers have used
                Webber to tackle <br />
                different use cases and get ahead of the competition
              </HText>
              <div class="border-2 rounded-sm  place-self-center grid md:grid-flow-col gap-8 p-4 m-10 space-x-5 place-content-center" >
                <WSelect label="Region: "></WSelect>
                <WSelect label="Industry: "></WSelect>
                <WSelect label="Type: "></WSelect>
              </div>
            </div>
            <div class="sm:grid-cols-2 grid grid-flow-row gap-12 mt-14" >
              <Images
                classs="sm:mt-36"
                src="https://i.postimg.cc/CKcFPp2j/Project-Cover.png"
                sub="Technology - SaaS"
                heading="Adobe Systems Inc"
                desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                classs="sm:mb-36"
                src="https://i.postimg.cc/NMtzHKDD/Project-Cover.png"
                sub="Kanban Software"
                heading="Trello"
                desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                classs="sm:mt-36"
                src="https://i.postimg.cc/QxgJyjQ9/Project-Cover-1.png"
                sub="Technology - SaaS"
                heading="Gutkowski, Schuppe and Pagac"
                desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                classs="sm:mb-36"
                src="https://i.postimg.cc/prfz4BFb/Project-Cover-2.png"
                sub="Airline"
                heading="Swiss Airline"
                desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                classs="sm:mt-36"
                src="https://i.postimg.cc/65zGZqV0/Project-Cover-3.png.png"
                sub="Technology - SaaS"
                heading="Virtual Reality"
                desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                classs="sm:mb-36"
                src="https://i.postimg.cc/2Sb85S03/Project-Cover-4.png"
                sub="Kanban Software"
                heading="Mann and Sons"
                desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudies;
