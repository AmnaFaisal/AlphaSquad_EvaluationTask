import React, { Component } from "react";
import Header from "../components/Header";
import HText from "../components/HText";
import Images from "../components/Images";
import Footer from "../components/Footer";

class CaseStudiesInner extends Component {
  render() {
    return (
      <div class="class= w-full bg-gradient-to-b from bg-blue-10 to bg-white h-auto">
        <div >
          <div >
            <Header></Header>
            <div class="sm:grid-cols-2 grid grid-flow-row" >
              <div class="mt-12 p-8">
                <HText classs="text-gray-700" >Kanban Software</HText>
                <HText classs="text-4xl font-bold" >Trello x Weber</HText>
                <HText classs="text-gray-500" >
                  Learn how Trello has leveraged Webber to consolidate it’s
                  diverse range of services software
                </HText>
                <div class="pt-12 grid grid-flow-row grid-cols-2" >
                  <HText classs="font-bold">Industry: Technology</HText>
                  <HText classs="font-bold">Since: 2018</HText>
                  <HText classs="mt-12 font-bold">Use case: Developer operations</HText>
                  <HText classs="mt-12 font-bold">Package: Enterprise+</HText>
                </div>
                <div class="pt-36" >
                  <HText classs="font-bold text-3xl" >The details</HText>
                  <HText classs="pt-4 pb-4">
                    It is a long established fact that a reader will be
                    distracted by the readable. There are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </HText>
                  <img class="pt-4 pb-4" src="https://i.postimg.cc/nVsNPShb/Rectangle-44.png"></img>
                  <HText  classs="pt-4 pb-4text-lg font-bold font-2xl" >
                    Breakdown of milestones
                  </HText>
                  <HText classs="pt-4 pb-4">
                    - Mauris ullamcorper neque sed mauris gravida, vel mollis
                    velit molestie.
                    <br />- Donec iaculis erat in vulputate venenatis.
                    <br />- Vestibulum et velit et metus commodo iaculis.
                    <br />- Sed et urna a felis accumsan commodo vel vel nibh.
                    <br />- Praesent sollicitudin nulla non sollicitudin varius.
                    <br />- Integer convallis orci sed diam volutpat feugiat.
                    <br />- Donec posuere arcu non semper maximus.
                  </HText>
                  <img classs="pt-4 pb-4"
                    src="https://i.postimg.cc/jSh17GZN/Rectangle-45.png"></img>
                  <HText classs="pt-4 pb-4">
                    It is a long established fact that a reader will be
                    distracted by the readable. There are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </HText>
                </div>
              </div>
              <div class="pr-8" >
                <img
                  class="m-4"
                  src="https://i.postimg.cc/tC3Cn4Pg/Project-Cover-6.png"
                ></img>
                <div class="text-white h-auto md:w-auto p-4 md:p-10 grid grid-flow-row  gap-4 clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50" >
                  <HText classs="font-medium md:w-auto text-lg" >
                    Get Webber for your organization
                  </HText>
                  <HText classs="text-sm md:w-auto" >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look.
                  </HText>
                  <div class="grid grid-flow-col gap-2" >
                    <button class="place-self-center rounded-sm p-2  md:py-2 md:px-4 m  text-blue-100 bg-white ">
                      Start trial
                    </button>
                    <button class="place-self-center rounded-sm p-1   text-white border-2 border-white bg-transparent " >
                      Contact sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="bg-gray-200 sm:bg-white " >
            <HText classs=" m-8 font-bold text-4xl">More case studies</HText>
            <div class=" mb-6 sm:grid-cols-4 grid grid-flow-row " >
             <Images
                src="https://i.postimg.cc/prfz4BFb/Project-Cover-2.png"
                sub="Airline"
                heading="Swiss Airline"
                desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                src="https://i.postimg.cc/QxgJyjQ9/Project-Cover-1.png"
                sub="Technology - SaaS"
                heading="Kling and sons"
                desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                src="https://i.postimg.cc/NMtzHKDD/Project-Cover.png"
                sub="Kanban Software"
                heading="Cassin - Zemlak"
                desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              <Images
                src="https://i.postimg.cc/CKcFPp2j/Project-Cover.png"
                sub="Technology - SaaS"
                heading="Russel Kertzmann"
                desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              ></Images>
              
              
              
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default CaseStudiesInner;
