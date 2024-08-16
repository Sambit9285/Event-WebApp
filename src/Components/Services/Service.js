import React from 'react'
import { GiPartyPopper } from "react-icons/gi";

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="p-10 sm:p-10 lg:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-blue-50 dark:bg-blue-50 relative overflow-hidden">
            <div className="rounded-xl text-lg  bg-gray-200 dark:bg-gray-800 p-3 text-gray-900 dark:text-white w-max relative">
                {icon}
            </div>
            <div className="mt-6 space-y-16 ">
                <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                </h2>
                <p className="text-gray-900 font-medium dark:text-gray-300">
                    {description}
                </p>
            </div>
            <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full" />
        </div>
    )
    }
    const services = [
        {
            id: 1,
            title: "Marriage Event",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
            icon: <GiPartyPopper/>
        },
        {
            id: 2,
            title: "Birthday Event",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
            icon: <GiPartyPopper/>
        },
        {
            id: 3,
            title: "Other Event",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
            icon: <GiPartyPopper/>
        },
              ]
              const Service = () => {
                return (
                    <section className="py-20">
                        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-3 flex flex-col items-start gap-10 xl:gap-14">
                            <div className="text-center max-w-5xl mx-auto space-y-4">
                                <h1 className="text-gray-900 dark:text-white font-semibold text-4xl">
                                    Services
                                </h1>
                               
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                                {
                                    services.map(services => (
                                        <ServiceCard key={services.id} {...services} />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                )
                }
            export default Service